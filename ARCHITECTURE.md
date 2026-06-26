# Architecture

A browser-based **3D garment configurator** built with **Next.js 16** (App Router), **React Three Fiber** for real-time 3D rendering, and **Zustand** for global state.

The codebase separates concerns into four axes:

- **UI** — Atomic Design (`src/ui/`) — HTML panels, layout, checkout, home
- **Domain & state** — Zustand stores, app hooks, shared types (`src/store/`, `src/hooks/`, `src/types/`)
- **3D configurator** — R3F canvas, scene, GLSL shaders, gizmo, runtime (`src/configurator/`)

> **Rule of thumb:** R3F components, garment print utils, and configurator hooks **do not** live in Atomic organisms. The organism `Configurator` is a thin mount point that re-exports `@configurator/canvas`.

---

## Table of contents

1. [Repository layout](#repository-layout)
2. [High-level data flow](#high-level-data-flow)
3. [3D configurator module](#3d-configurator-module)
4. [UI layer (Atomic Design)](#ui-layer-atomic-design)
5. [Non-UI layers](#non-ui-layers)
6. [Next.js routing](#nextjs-routing)
7. [Technology stack](#technology-stack)
8. [Scripts & tooling](#scripts--tooling)
9. [Path aliases](#path-aliases)
10. [Conventions](#conventions)

---

## Repository layout

```
3D_T-shirts_Sportwear_Realize/
├── app/                    # Next.js App Router — thin route files, no business logic
├── public/                 # Static assets: GLTF models, textures, WASM, logos
├── scripts/                # Node asset-pipeline scripts
├── src/
│   ├── configurator/       # ★ 3D configurator module (R3F, scene, runtime, types)
│   ├── constants/          # Immutable configuration values
│   ├── data/               # Product JSON catalogs and accessors
│   ├── fonts/              # UI and garment-print fonts
│   ├── hooks/              # App-level React hooks (non-3D)
│   ├── providers/          # App-level React context (embedded mode, getStrictContext)
│   ├── shopify/            # Shopify Storefront / Admin API integration
│   ├── store/              # Zustand stores (global state)
│   ├── types/              # Shared TypeScript types (entities, UI, cart, …)
│   ├── ui/                 # UI components (Atomic Design)
│   └── utils/              # App utilities (catalog, logo, checkout, design)
├── playwright/             # End-to-end tests
└── ARCHITECTURE.md         # This document
```

---

## High-level data flow

```mermaid
flowchart TB
  subgraph routes [App Router]
    Slug["/[slug]"]
    Checkout["/checkout"]
  end

  subgraph ui [UI — Atomic]
    Page["ConfiguratorPage"]
    Aside["AsideConfiguration"]
    Organism["Configurator organism\n(thin re-export)"]
  end

  subgraph cfg ["@configurator"]
    Bootstrap["bootstrap/\napplyConfiguratorRouteProduct"]
    Canvas["canvas/\nConfiguratorCanvas"]
    Scene["scene/\nGarmentModel + meshes"]
    Runtime["runtime/\nGarmentRuntime + PrintGizmoLayer"]
    Hooks["hooks/\nappearance, textures, gizmo"]
    Utils["utils/\nprint atlases, materials, orbit"]
    Gizmo["gizmo/\nhit-test, drag, elements"]
    Mappers["mappers/\nproduct → print state"]
    Shaders["shaders/\nGLSL print patches"]
    Providers["providers/\nPBR + material registry"]
    CfgConstants["constants/\natlas, slots, gizmo chrome"]
  end

  subgraph state [Zustand @store]
    Product["useConfiguratorProduct"]
    Control["useConfigurationControl"]
    Garment["useGarmentName / Logo / …"]
  end

  Slug --> Page
  Page --> Aside
  Page --> Organism
  Organism --> Canvas
  Bootstrap --> Product
  Canvas --> Scene
  Scene --> Runtime
  Runtime --> Hooks
  Hooks --> Utils
  Hooks --> Shaders
  Hooks --> CfgConstants
  Utils --> Shaders
  Scene --> Providers
  Bootstrap --> Mappers
  Mappers --> state
  Runtime --> Gizmo
  Aside --> state
```

1. **Route** resolves product (`ConfiguratorRouteShell` / Shopify) and calls `applyConfiguratorRouteProduct`.
2. **Store** holds user configuration (colors, design, names, logos, cart).
3. **`GarmentRuntime`** subscribes to stores via hooks and drives shader uniforms + gizmo interaction.
4. **UI panels** (molecules) read/write the same stores; they never import R3F scene internals directly.

---

## 3D configurator module

All real-time 3D logic lives in `src/configurator/`. Import via `@configurator` or subpath aliases (see [Path aliases](#path-aliases)).

### Structure

```
src/configurator/
├── index.ts              # Public API (canvas, scene, runtime, gizmo, bootstrap, utils, types)
├── constants/            # 3D pipeline constants (atlas size, slot counts, gizmo chrome, fonts)
├── gizmo/                # Hit-test, drag, printable mesh construction, button hover/reveal
├── mappers/              # Product catalog → runtime print/gradient state (used by @store)
│   ├── mapProductDesigns/
│   ├── mapProductNames/
│   ├── mapProductNumbers/
│   ├── mapProductLogos/
│   └── partGradient/
├── bootstrap/            # Route → product hydration, preload on navigation
├── canvas/               # R3F <Canvas>, controls, scene mount
│   ├── ConfiguratorCanvas/
│   ├── CanvasControl/
│   ├── SceneModel/
│   └── ViewControls/
├── scene/                # GLTF loading, mesh cloning, PBR extraction
│   ├── GarmentModel/
│   ├── GarmentMeshes/
│   ├── GarmentPartMesh/
│   ├── GltfSceneProvider/
│   ├── PreserveGltfMesh/
│   ├── StaticGltfMesh/
│   └── *.ts              # gltfMeshHelpers, preloadGarmentScene, …
├── runtime/              # Side-effect layers inside <Canvas>
│   ├── GarmentRuntime/   # appearance + texture hooks + PrintGizmoLayer
│   └── PrintGizmoLayer/
│       ├── PrintGizmoLayer.tsx
│       └── PrintGizmoInstance/
├── shaders/              # GLSL patches for MeshStandardMaterial (print, gizmo UI)
├── providers/            # PbrMaps + garment material registry (in-canvas React context)
│   ├── pbrMapsProvider/
│   └── garmentMaterialRegistry/
├── hooks/                # R3F-facing React hooks
│   ├── useGarmentAppearance/
│   ├── useGarmentLogoTextures/
│   ├── useGarmentNameTextures/
│   ├── useGizmoPointerContext/
│   ├── useGizmoSelection/
│   ├── usePrintGizmoDrag/
│   ├── usePrintPlacementMigration/
│   └── …
├── utils/                # Pure 3D/print helpers (no React)
│   ├── createGarmentMaterial/
│   ├── garmentPrint/
│   ├── composeLogoAtlas/
│   ├── orbitCamera/
│   ├── configuratorPreviewCapture/
│   └── …
└── types/                # Configurator-owned TypeScript types
    ├── configuratorStep/
    ├── configuratorProductHydration/
    ├── garmentGltfSceneType/
    ├── gizmo/            # Gizmo element, drag, pointer-target types
    ├── printPlacementInstance/
    ├── sceneComponentProps/
    └── index.ts
```

### Layer responsibilities

| Layer       | Alias                   | Responsibility                                              |
| ----------- | ----------------------- | ----------------------------------------------------------- |
| `bootstrap` | `@configurator`         | Apply route product, preload GLB + appearance textures; **app-facing facade** for preload/preview/image cache |
| `mappers`   | `@configurator/mappers` | Map product JSON → print positions, instances, gradients    |
| `canvas`    | `@configurator/canvas`  | WebGL canvas, orbit controls, preview capture wiring        |
| `scene`     | `@configurator/scene`   | Load GLTF, clone meshes, register garment materials         |
| `runtime`   | `@configurator/runtime` | In-canvas side effects: textures, gizmo selection/drag      |
| `hooks`     | `@configurator/hooks`   | React hooks that bridge `@store` ↔ shader uniforms          |
| `utils`     | `@configurator/utils`   | Atlases, uniform builders, material factory, orbit math     |
| `gizmo`     | `@configurator/gizmo`   | Hit-testing, drag resolution, gizmo element builders          |
| `shaders`   | `@configurator/shaders` | GLSL fragments/vertex patches for garment print material      |
| `providers` | `@configurator/providers`| Bridge scene materials ↔ hook-driven uniform updates     |
| `constants` | `@configurator/constants`| Atlas dimensions, UV bounds, slot counts, gizmo chrome   |
| `types`     | `@configurator/types`   | Configurator, shader, and gizmo types                         |

### R3F component tree (simplified)

```
ConfiguratorCanvas
└── CanvasControl          ← useCartPreviewCapture, ViewControls
└── SceneModel
    └── GarmentModel       ← GLTF + PbrMapsProvider + GltfSceneProvider
        ├── GarmentMeshes  ← GarmentPartMesh | StaticGltfMesh | PreserveGltfMesh
        └── GarmentRuntime ← useGarmentAppearance, useGarment*Textures
            └── PrintGizmoLayer ← gizmo hit-test / drag (renders null; shader-drawn UI)
                └── PrintGizmoInstance × N
```

### Configurator types (`@configurator/types`)

Types that belong to the 3D module — **not** general UI or catalog entities:

| Type                            | Purpose                                      |
| ------------------------------- | -------------------------------------------- |
| `configuratorStepValueType`     | Wizard step identifiers                      |
| `configuratorProductHydrationType` | Product payload from route / Shopify      |
| `garmentGltfSceneType`          | Typed GLTF nodes/meshes index                |
| `PrintPlacementInstance`        | UV placement for name/number/logo/testo      |
| `*PropsType` (scene components) | R3F component props (part mesh, gizmo, …)   |

Shared domain types (`garmentConfigType`, cart, checkout) remain in `@types/entities` and `@types/garment`. Shader pipeline, gizmo, and in-canvas provider types (`pbrMapsType`, `garmentPrintStateType`, `garmentMaterialRegistryValueType`, `printGizmoElementType`, …) live in `@configurator/types`.

---

## UI layer (Atomic Design)

All UI lives under `src/ui/` and follows Atomic Design tiers.

| Layer         | Path                                  | Alias        | Responsibility                                                              |
| ------------- | ------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| **Atoms**     | `src/ui/components/atomic/atoms/`     | `@atoms`     | Smallest blocks: `Button`, `AtomInput`, `ColorPicker`, `AtomSkeleton`       |
| **Molecules** | `src/ui/components/atomic/molecules/` | `@molecules` | Step panels: `ConfigurationDesign`, `LogoUpload`, `ConfiguratorStepTabs`    |
| **Organisms** | `src/ui/components/atomic/organisms/` | `@organisms` | `AsideConfiguration`, `ConfiguratorView`, `Configurator` (thin 3D mount)      |
| **Templates** | `src/ui/components/atomic/templates/` | `@templates` | Page layouts without data coupling (`ConfiguratorLayoutTemplate`) |
| **Pages**     | `src/ui/components/atomic/pages/`     | `@pages`     | `ConfiguratorPage`, `HomePage`, `CheckoutPage`                              |
| **Shared**    | `src/ui/components/shared/`           | `@shared`    | shadcn/Radix primitives (`Dialog`, `Accordion`, …)                          |
| **Skeletons** | `src/ui/components/skeletons/`        | `@skeletons` | Loading skeletons mirroring configurator/checkout layouts                   |

### Configurator UI vs 3D module

| Concern              | Location                                      |
| -------------------- | --------------------------------------------- |
| HTML sidebar / steps | `@molecules` / `@organisms` (`AsideConfiguration`, …) |
| 3D canvas mount      | `@organisms/Configurator` → `@configurator`   |
| Page layout          | `ConfiguratorView`, `ConfiguratorPage`        |
| Route hydration      | `ConfiguratorRouteShell` in `ConfiguratorLayoutTemplate` |

```tsx
// organisms/Configurator/Configurator.tsx — intentional thin shell
export { ConfiguratorCanvas as Configurator } from '@configurator';
```

### UI conventions

1. **`app/` routes** only import from `@pages` — no business logic in route files.
2. **Atoms** are presentational: props only; no store, API, or 3D dependencies (e.g. `Logo` receives `href` from `Header`).
3. **Molecules** may read stores and use hooks from `@hooks`.
4. **Organisms** compose molecules/atoms; the 3D organism does **not** embed scene code.
5. **Skeletons** match target layouts; visibility via `useShowConfigurationSkeleton`.
6. **HTML component prop types** live in `src/types/ui/`.
7. **Every component** uses folder + `index.ts` barrel: `ComponentName/ComponentName.tsx` + `index.ts`.

---

## Non-UI layers

### `src/hooks/` (`@hooks`)

App-level React hooks (navigation, checkout, cart sync, skeletons, logo upload, catalog preload).  
3D hooks live in `@configurator/hooks` only.

| Category        | Examples                                                                 |
| --------------- | ------------------------------------------------------------------------ |
| Configurator UX | `useConfiguratorProductHydration`, `useConfiguratorInitialSceneLoad`, `useGarmentCatalogPreload`, `resolveProductStepsConfiguration` |
| Store wrappers  | `useConfigurationCartSync`, `useProductStepsConfiguration` (merges step meta + `@molecules` content) |
| UI state        | `useSlidingIndicator`, `useShowConfigurationSkeleton`                    |
| Checkout        | `useCheckoutInit`, `useNavigateToCheckout`                                 |

> Zustand stores in `src/store/` are named `use*` but are **not** React hooks.

### `src/store/` (`@store`)

Domain-scoped Zustand stores:

| Store                                                    | Responsibility              |
| -------------------------------------------------------- | --------------------------- |
| `useConfiguratorProduct`                                 | Active catalog product      |
| `useConfigurationControl`                                | Wizard steps and navigation |
| `useConfigurationCart`                                   | Session configuration cart  |
| `useGarmentColor` / `Design` / `Name` / `Number` / `Logo` / `Testo` | Garment configuration |
| `useConfiguratorSceneLoad`                               | 3D scene loading state      |
| `useCheckout`                                            | Checkout rows and pricing   |

Each store is a folder: `use*.ts` + thin `map*.ts` re-exports (print/gradient mappers live in `@configurator/mappers`).

### `src/types/` (`@types`)

Shared types not owned by the configurator module:

```
src/types/
├── cart/           # Cart items, configuration snapshots
├── checkout/       # Checkout table, summary
├── entities/       # Types derived from JSON catalogs (source of truth)
├── garment/        # Runtime garment types composed from entities
├── ui/             # HTML component props, variant unions
└── index.ts
```

Configurator types: prefer `@configurator/types` (also exported from `@configurator`).

### `src/utils/` (`@utils`)

App-wide pure utilities: catalog, logo file conversion, checkout dates, design SVG tinting.  
3D/print utilities live in `@configurator/utils` only.

### `src/configurator/gizmo/` (`@configurator/gizmo`)

Framework-agnostic gizmo logic: hit-testing, drag resolution, printable mesh construction, button hover/reveal state.  
Used by `@configurator/runtime` and `@configurator/hooks`. Imports math from `@configurator/utils`.

Structure: `featureName/featureName.ts` + `index.ts`; barrel at `src/configurator/gizmo/index.ts`.

### `src/configurator/shaders/` (`@configurator/shaders`)

GLSL patches for `MeshStandardMaterial`: print layers, logos, names, numbers, testo, gradients, atlas tinting.  
Consumed by `@configurator/utils/createGarmentMaterial`.

### `src/shopify/` (`@shopify`)

Shopify Storefront GraphQL, product/collection resolution, `configuratorProductHydrationType` mapping.

### `src/constants/` (`@constants`)

Single barrel file `index.ts` — catalog, UI copy, checkout labels, palette, logo-upload UI.  
3D print pipeline values (atlas size, slot counts, gizmo chrome, garment fonts) live in `@configurator/constants`.  
Wizard step metadata: `CONFIGURATOR_STEP_META`. React step wiring: `STEPS_CONFIGURATION` (exported from `@molecules`).

### `src/providers/` (`@providers`)

App-level React context: embedded mode, shared `getStrictContext` helper for UI primitives.

### `src/configurator/constants/` (`@configurator/constants`)

Immutable values for the 3D print pipeline: `PRINT_ATLAS_*`, `FULL_UV_BOUNDS`, name/logo slot counts, gizmo chrome, `FONT_FAMILY_BY_NAME`, reference font sizes.  
Imported only from `@configurator/**` and `@store` mappers — never from `@constants`.

### `src/configurator/providers/` (`@configurator/providers`)

3D-only providers used inside `<Canvas>` / garment scene: `PbrMapsProvider`, `GarmentMaterialRegistryProvider`.

### `src/data/` (`@data`)

JSON product catalogs and modal info content. Catalog accessors (`getModel`, `MODELS`, …) live in `@utils/garmentCatalog`.

### `src/fonts/` (`@fonts`)

UI fonts (`inter`) and sport fonts for garment text rendering.

---

## Next.js routing

```
app/
├── layout.tsx                          # Root layout (<html>, fonts, global styles)
├── (shop)/                             # Scrollable shop shell — URL: /, /checkout
│   ├── layout.tsx                      # <body> + Header + main
│   ├── (default)/
│   │   ├── layout.tsx                  # Footer wrapper
│   │   └── page.tsx                    # / → HomePageLoader (async RSC)
│   └── checkout/
│       └── page.tsx                    # /checkout → CheckoutPage
└── [slug]/                             # Product configurator — URL: /:slug
    ├── layout.tsx                      # ConfiguratorLayoutTemplate + Shopify product resolve
    └── page.tsx                        # ConfiguratorPage
```

| URL         | Page component     | Notes                                      |
| ----------- | ------------------ | ------------------------------------------ |
| `/`         | `HomePageLoader` → `HomePage` | Product gallery (async catalog load)       |
| `/checkout` | `CheckoutPage`     | Static route; wins over `[slug]`           |
| `/:slug`    | `ConfiguratorPage` | Layout resolves product; page mounts UI + 3D |

Routes stay **thin**: import from `@pages` only.

---

## Technology stack

| Library                                                           | Role                                   |
| ----------------------------------------------------------------- | -------------------------------------- |
| **Next.js 16**                                                    | SSR/SSG, App Router, routing           |
| **React 19**                                                      | UI runtime                             |
| **TypeScript 5**                                                  | Static typing                          |
| **Tailwind CSS 4**                                                | Styling                                |
| **Zustand**                                                       | Global client state                    |
| **React Three Fiber + drei**                                      | 3D canvas, GLTF loading, controls      |
| **Three.js**                                                      | Rendering, textures, custom shaders    |
| **Radix UI / Base UI**                                            | Accessible primitives (shadcn)         |
| **Motion**                                                        | UI animations                          |
| **pdfjs-dist, ghostpdl-wasm, imagemagick-wasm**                   | In-browser PDF/EPS logo conversion     |
| **Playwright** (dev)                                              | End-to-end tests                       |
| **ESLint + Prettier + Husky**                                     | Linting, formatting, pre-commit hooks  |

---

## Scripts & tooling

| Script                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `dev` / `build` / `start` | Next.js development and production            |
| `lint` / `lint:fix`    | ESLint over `src/` and `scripts/`                |
| `format` / `format:check` | Prettier                                      |
| `validate`             | format + lint + `verify:architecture` + `verify:design-assets` |
| `verify:architecture`  | Legacy paths + import boundaries + 3D constants outside configurator (`scripts/verify-architecture.mjs`) |
| `verify:design-assets` | Design files and thumbnails per catalog JSON     |
| `convert:design-assets` | SVG designs → WebP runtime assets             |
| `test:e2e`             | Playwright                                       |

Node scripts in `scripts/`: logo WASM copy, design verification/conversion, thumbnail generation.

---

## Path aliases

Defined in `tsconfig.json`:

| Alias                      | Path                              |
| -------------------------- | --------------------------------- |
| `@atoms` … `@pages`        | `src/ui/components/atomic/*`      |
| `@shared`                  | `src/ui/components/shared`        |
| `@skeletons`               | `src/ui/components/skeletons`       |
| `@styles`                  | `src/ui/styles/globals.css`       |
| `@hooks`                   | `src/hooks`                       |
| `@store`                   | `src/store`                       |
| `@types`                   | `src/types`                       |
| `@utils`                   | `src/utils`                       |
| `@data`                    | `src/data`                        |
| `@constants`               | `src/constants`                   |
| `@providers`               | `src/providers`                   |
| `@fonts`                   | `src/fonts`                       |
| `@shopify`                 | `src/shopify`                     |
| **`@configurator`**        | `src/configurator`                |
| **`@configurator/gizmo`**  | `src/configurator/gizmo`          |
| **`@configurator/shaders`**| `src/configurator/shaders`        |
| **`@configurator/mappers`**| `src/configurator/mappers`        |
| **`@configurator/providers`**| `src/configurator/providers`      |
| **`@configurator/canvas`**   | `src/configurator/canvas`           |
| **`@configurator/scene`**  | `src/configurator/scene`            |
| **`@configurator/runtime`**| `src/configurator/runtime`          |
| **`@configurator/hooks`**  | `src/configurator/hooks`            |
| **`@configurator/utils`**  | `src/configurator/utils`            |
| **`@configurator/types`**  | `src/configurator/types`            |
| **`@configurator/constants`**| `src/configurator/constants`        |

---

## Conventions

### Import rules (configurator)

| From                         | Import via                                      |
| ---------------------------- | ----------------------------------------------- |
| R3F components / runtime     | `@configurator`, `@configurator/scene`, …       |
| 3D hooks                     | `@configurator/hooks`                           |
| Print / material utils       | `@configurator/utils`                           |
| Configurator types           | `@configurator/types`                           |
| Gizmo math                   | `@configurator/gizmo`                           |
| GLSL shader patches          | `@configurator/shaders`                         |
| Product → print state maps   | `@configurator/mappers` (re-exported via `@store`) |
| Preload / preview / image cache (app + store) | `@configurator` bootstrap facade (`preloadGarment*`, `captureConfiguratorPreviewSnapshot`, `loadCachedImage`) |
| In-canvas React context      | `@configurator/providers`                       |
| 3D pipeline constants        | `@configurator/constants`                       |
| Product catalog (`getModel`) | `@utils` (`garmentCatalog`)                     |
| User configuration           | `@store`                                        |

**No subpath imports:** tsconfig defines barrel aliases only (e.g. `@molecules`, `@configurator/hooks`) — never `@alias/*` wildcards and never `@alias/FeatureName/...`. UI: `@atoms`, `@molecules`, `@organisms`, …; configurator: `@configurator` or layer barrels. Sibling files inside one module use relative imports.

ESLint `no-restricted-imports` enforces the same rules for `@hooks/*`, `@utils/*`, `@configurator/hooks/*`, and `@configurator/utils/*`.

**Store → configurator:** `@store` may import `@configurator/mappers`, `@configurator/constants`, and the **bootstrap facade** from `@configurator` (preload, preview capture, image cache). It must not import `@configurator/utils`, `@configurator/scene`, `runtime`, or `canvas` directly.

**App hooks → configurator:** preload hooks import the same bootstrap facade from `@configurator`, not layer subpaths. Step availability logic lives in `@hooks/resolveProductStepsConfiguration` (meta only); UI step panels merge content from `@molecules`.

Cross-hook imports inside `@configurator/hooks` use relative paths between sibling folders (never `@alias/*` subpaths).

Within the same module (`canvas/`, `scene/`, `utils/`, `hooks/`), relative imports between siblings are allowed.

### Module folder pattern

Every exportable unit follows Atomic-style folders:

```
FeatureName/
├── FeatureName.ts(x)
└── index.ts          # export { FeatureName } from './FeatureName'
```

Applies to: UI components, configurator components, hooks, gizmo modules, utils.

### Deprecation policy

Import 3D code only from `@configurator/*`. Configurator, shader, and gizmo types from `@configurator/types`.
