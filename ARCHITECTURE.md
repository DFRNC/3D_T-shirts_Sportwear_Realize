# Architecture

A browser-based **3D garment configurator** embedded as a **Shopify app**, built with **React Router 7**, **React Three Fiber** for real-time 3D rendering, and **Zustand** for global state.

The codebase separates concerns into three axes:

- **UI** — Atomic Design (`src/ui/`)
- **Domain & state** — Zustand stores, hooks, types (`src/store/`, `src/hooks/`, `src/types/`)
- **3D & assets** — shaders, gizmo logic, print pipelines (`src/shaders/`, `src/gizmo/`, `src/utils/`)

---

## Table of contents

1. [Repository layout](#repository-layout)
2. [UI layer (Atomic Design)](#ui-layer-atomic-design)
3. [Non-UI layers](#non-ui-layers)
4. [React Router routing](#react-router-routing)
5. [Technology stack](#technology-stack)
6. [Scripts & tooling](#scripts--tooling)
7. [Path aliases](#path-aliases)

---

## Repository layout

```
realize-test/
├── app/                    # React Router routes, Shopify auth, server loaders
│   ├── routes/             # Route modules (thin — delegate to @pages)
│   ├── shopify/            # Shopify Admin API helpers
│   ├── root.tsx            # Root layout (<html>, fonts, global styles)
│   └── routes.ts           # Route manifest
├── prisma/                 # Session storage for Shopify app auth
├── public/                 # Static assets: GLTF models, textures, WASM, logos
├── scripts/                # Node asset-pipeline scripts (see Scripts & tooling)
├── src/                    # Application source
│   ├── constants/          # Immutable configuration values
│   ├── data/               # Product JSON catalogs and accessors
│   ├── fonts/              # UI and garment-print fonts
│   ├── gizmo/              # 3D gizmo: hit-test, drag, mesh construction
│   ├── hooks/              # React custom hooks
│   ├── providers/          # React Context providers (+ co-located consumer hooks)
│   ├── shaders/            # GLSL shaders for Three.js
│   ├── store/              # Zustand stores (global state)
│   ├── types/              # Centralized TypeScript types
│   ├── ui/                 # UI components (Atomic Design)
│   └── utils/              # Pure functions: atlases, uniforms, file converters
└── ARCHITECTURE.md         # This document
```

## UI layer (Atomic Design)

All UI lives under `src/ui/` and follows Atomic Design tiers.

| Layer         | Path                                  | Alias        | Responsibility                                                              |
| ------------- | ------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| **Atoms**     | `src/ui/components/atomic/atoms/`     | `@atoms`     | Smallest blocks: `Button`, `AtomInput`, `ColorPicker`, `AtomSkeleton`       |
| **Molecules** | `src/ui/components/atomic/molecules/` | `@molecules` | Atom compositions: configurator steps, `LogoUpload`, `AtomTabsSlidingList`  |
| **Organisms** | `src/ui/components/atomic/organisms/` | `@organisms` | Large sections: `Header`, `AsideConfiguration`, `Configurator` (3D canvas)  |
| **Templates** | `src/ui/components/atomic/templates/` | `@templates` | Page layouts without data coupling (`DefaultPagesTemplate`)                 |
| **Pages**     | `src/ui/components/atomic/pages/`     | `@pages`     | Page compositions: `ConfiguratorPage`, `HomePage`, `CheckoutPage`           |
| **Shared**    | `src/ui/components/shared/`           | `@shared`    | shadcn/Radix primitives (`Dialog`, `Accordion`, `ClientOnly`)               |
| **Skeletons** | `src/ui/components/skeletons/`        | `@skeletons` | Loading skeletons mirroring real component layouts                          |

### UI conventions

1. **`app/routes/`** import page components from `@pages`. Loaders and Shopify auth stay in route modules; no UI composition in routes.
2. **Atoms** are presentational: props only; no store, API, or 3D dependencies. Hooks that drive UI behaviour (e.g. sliding tabs) belong in **molecules** (`AtomTabsSlidingList`, `ConfiguratorStepTabs`).
3. **Molecules** may read stores and use hooks from `@hooks`.
4. **Organisms** compose molecules/atoms into cohesive blocks (sidebar, canvas, footer).
5. **Templates** wrap page content with shared chrome (e.g. `DefaultPagesTemplate` adds `Footer`).
6. **Skeletons** match the dimensions of their target molecules/organisms; visibility is controlled via `useShowConfigurationSkeleton`.
7. **Component prop types** for domain/molecule props live in `src/types/ui/`. Low-level `@shared` primitives and CVA variant wrappers may keep inline prop types.

---

## Non-UI layers

### `src/hooks/` (`@hooks`)

React custom hooks for application logic:

| Category       | Examples                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Store wrappers | `useConfigurationCartSync`, `useConfiguratorInitialSceneLoad`                                                                |
| 3D / textures  | `useGarmentTextures`, `useGarmentPbrMaps`, `useSceneTransitionTrigger`                                                         |
| Gizmo          | `useGizmoSelection`, `usePrintGizmoDrag`, `useGizmoIconAtlas`                                                                  |
| UI state       | `useSlidingIndicator`, `useControlledState`, `useShowConfigurationSkeleton`, `useConfigurationPositionPicker`                  |
| Domain actions | `useLogoFileHandler`, `useStepLogo`, `useNavigateToCheckout`, `useAppNavigate`                                                 |
| Checkout       | `useCheckoutInit`, `useCheckoutSummary`, `useCheckoutConfigurationTable`, `useNavigateToConfigurator`                          |

> Zustand stores in `src/store/` are named `use*` but are **not** React hooks — they are global state containers. Hooks that combine multiple stores or use `useMemo` / `useCallback` belong in `src/hooks/`.

> Context consumer hooks (`usePbrMaps`, `useGarmentMaterialRegistry`, …) are co-located with their provider in `@providers` and re-exported from `src/providers/index.ts`.

### `src/store/` (`@store`)

Domain-scoped Zustand stores:

| Store                                                    | Responsibility              |
| -------------------------------------------------------- | --------------------------- |
| `useConfiguratorProduct`                                 | Active catalog product      |
| `useConfigurationControl`                                | Wizard steps and navigation |
| `useConfigurationCart`                                   | Session configuration cart  |
| `useGarmentColor`                                        | Part colors and gradients   |
| `useGarmentDesign`                                       | Design patterns             |
| `useGarmentName` / `useGarmentNumber` / `useGarmentLogo` / `useGarmentTesto` | Garment text, logos, testo |
| `useConfiguratorSceneLoad`                               | 3D scene loading state      |
| `useInfoDialog` / `useTutorialDialog`                    | Modal state                 |
| `useCheckout`                                            | Checkout rows and pricing   |

Each store is a folder with `use*.ts` (state + actions) and helper `map*.ts` files (mapping from entity data).

### `src/types/` (`@types`)

All project types are centralized here:

```
src/types/
├── cart/           # Cart item types, configuration snapshots
├── checkout/       # Checkout row and pricing types
├── configurator/   # Configurator step types
├── entities/       # Types derived from JSON catalogs (source of truth)
├── garment/        # Runtime garment types composed from entities
├── gizmo/          # Gizmo and drag-state types
├── providers/      # Provider context value types
├── ui/             # Component props, variant unions, UI helpers
├── utils/          # PbrMaps, GarmentPrintState, PatternMaskPair, etc.
└── index.ts        # Barrel export
```

### `src/data/` (`@data`)

JSON product catalogs (e.g. `crewneck/crewneck.json`), modal info content (`modalInfo/*.json`), and accessors. No UI logic.

Modal info follows the same pattern as garment catalogs:

- **JSON** in `src/data/modalInfo/` — one file per tab (`faqContent.json`, `measureContent.json`, …)
- **Types** in `src/types/entities/modalInfo/` — `modalInfoTabType`, `modalInfoPartType`, …
- **Tab registry** in `ModalInfo/modalInfoTabs.tsx` — maps tab `value`, label, icon, and content
- **Renderer** in `ModalInfo/Content/ModalInfoTabContent/` — shared `text`, `list`, `image`, `table` parts

### `src/utils/` (`@utils`)

Pure, React-free utilities:

- Print atlas composition (`composePrintAtlas`, `composeNameAtlas`)
- Uniform builders and print application (`garmentPrint/`)
- Logo file conversion (`logoFile/`)
- PBR material creation (`createGarmentMaterial/`)
- Scene preload (`preloadConfiguratorScene`)

Does **not** re-export `@constants` — consumers import `LOGO_SLOT_COUNT`, `FULL_UV_BOUNDS`, etc. directly from `@constants`.

Module-local helper types that are not domain entities may live next to their module; domain types belong in `src/types/`.

### `src/shaders/` (`@shaders`)

GLSL vertex and fragment shaders:

| Module                   | Purpose                                                            |
| ------------------------ | ------------------------------------------------------------------ |
| `garmentShaders`         | UV, normal, roughness, gizmo lights (MeshStandardMaterial patches) |
| `garmentPrintShaders`    | Print layer shaders                                                |
| `garmentLogoShaders`     | Logo layer shaders                                                 |
| `garmentNameShaders`     | Name text shaders                                                  |
| `garmentNumberShaders`   | Number text shaders                                                |
| `garmentTestoShaders`    | Testo text shaders                                                 |
| `garmentGradientShaders` | Part gradient shaders                                              |
| `printAtlasTintShaders`  | FBO atlas tinting                                                  |

Structure: `moduleName/moduleName.ts` + `index.ts`; barrel export at `src/shaders/index.ts`.

### `src/gizmo/` (`@gizmo`)

Framework-agnostic 3D gizmo logic: hit-testing, drag handling, mesh element construction. React-facing gizmo hooks live in `@hooks`.

### `src/constants/` (`@constants`)

Configuration constants: wizard steps, color palette, print-atlas dimensions, fonts, checkout limits (`CHECKOUT/`), table column sizing (`CHECKOUT_CONFIGURATION_TABLE/`), configurator copy and labels (`CONFIGURATOR/`).

### `src/providers/` (`@providers`)

React Context providers: `GarmentMaterialRegistryProvider`, `PbrMapsProvider`, plus co-located consumer hooks.

### `src/fonts/` (`@fonts`)

Font loading for UI (`inter`) and sport fonts used for garment printing.

---

## React Router routing

```
app/
├── root.tsx                            # <html>, global CSS, font variables
└── routes/
    ├── _index/route.tsx                # Redirect → /app
    ├── auth.login/                     # Shopify login
    ├── auth.$.tsx                      # Shopify OAuth callback
    ├── webhooks/app/                   # scopes_update, uninstalled
    └── app/
        ├── route.tsx                   # AppProvider shell, Shopify auth loader
        ├── _shop/layout.tsx            # Header + DefaultPagesTemplate (Footer via route handle)
        ├── page.tsx                    # loader → HomePage @pages
        ├── checkout/
        │   ├── route.tsx               # auth loader, handle.noFooter
        │   └── page.tsx                # → CheckoutPage @pages
        └── configurator/
            ├── route.tsx               # auth loader
            ├── layout.tsx              # h-dvh viewport-locked shell + Header
            └── page.tsx                # → ConfiguratorPage @pages
```

Routes remain **thin**: UI composition lives in `@pages`, `@templates`, and `@organisms`. Route modules may define `loader`, `action`, `ErrorBoundary`, and Shopify `authenticate` calls only.

Example:

```tsx
// app/routes/app/configurator/page.tsx
import { ConfiguratorPage } from "@pages";

export default function AppConfiguratorPage() {
  return <ConfiguratorPage />;
}
```

---

## Technology stack

| Library                                                           | Role                                   |
| ----------------------------------------------------------------- | -------------------------------------- |
| **React Router 7**                                                | SSR, routing, loaders                  |
| **Shopify App (React Router)**                                    | Embedded admin app, OAuth, webhooks    |
| **Vite**                                                          | Dev server and production bundling     |
| **React 19**                                                      | UI runtime                             |
| **TypeScript 5**                                                  | Static typing                          |
| **Tailwind CSS 4**                                                | Styling                                |
| **Zustand**                                                       | Global client state                    |
| **React Three Fiber + drei**                                      | 3D canvas, GLTF loading, controls      |
| **Three.js**                                                      | Rendering, textures, custom shaders    |
| **Prisma**                                                        | Shopify session persistence            |
| **Radix UI / Base UI**                                            | Accessible primitives (shadcn)         |
| **Motion**                                                        | UI animations                          |
| **@uiw/react-color**                                              | Color picker                           |
| **pdfjs-dist, @okathira/ghostpdl-wasm, @imagemagick/magick-wasm** | In-browser PDF/EPS logo conversion     |
| **sharp** (dev)                                                   | Image processing in Node asset scripts |
| **ESLint + Prettier**                                             | Linting and formatting                 |

---

## Scripts & tooling

### `package.json` scripts

| Script                   | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| `dev`                    | Shopify app dev server (local tunnel / localhost)        |
| `build`                  | React Router production build                            |
| `start`                  | Run production server                                    |
| `typecheck`              | `react-router typegen` + `tsc --noEmit`                  |
| `lint`                   | ESLint                                                   |
| `verify:design-assets`   | Ensures design files and thumbnails exist per JSON       |
| `convert:design-assets`  | Converts heavy SVG designs to 4096px WebP for runtime    |
| `postinstall`            | Prisma generate + `copy:logo-assets`                     |

### Node scripts (`scripts/`)

| File                             | Description                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------- |
| `copy-logo-assets.mjs`           | Copies `magick.wasm`, `pdf.worker`, `gs.js/wasm`, and PNG logos to `public/`    |
| `verify-design-assets.mjs`       | Validates every `path_name` in JSON has a design file and thumbnail             |
| `convert-design-assets.mjs`      | Rasterizes design SVG → WebP (4096px) via sharp; preserves originals for export |
| `generate-design-thumbnails.mjs` | Creates `designs/thumbs/*.webp` from full-size WebP assets                      |

---

## Path aliases

Defined in `tsconfig.json`:

| Alias        | Path                                 |
| ------------ | ------------------------------------ |
| `@styles`    | `src/ui/styles/globals.css`          |
| `@atoms`     | `src/ui/components/atomic/atoms`     |
| `@molecules` | `src/ui/components/atomic/molecules` |
| `@organisms` | `src/ui/components/atomic/organisms` |
| `@templates` | `src/ui/components/atomic/templates` |
| `@pages`     | `src/ui/components/atomic/pages`     |
| `@shared`    | `src/ui/components/shared`           |
| `@skeletons` | `src/ui/components/skeletons`        |
| `@hooks`     | `src/hooks`                          |
| `@store`     | `src/store`                          |
| `@types`     | `src/types`                          |
| `@utils`     | `src/utils`                          |
| `@data`      | `src/data`                           |
| `@constants` | `src/constants`                      |
| `@gizmo`     | `src/gizmo`                          |
| `@providers` | `src/providers`                      |
| `@fonts`     | `src/fonts`                          |
| `@shaders`   | `src/shaders`                        |
