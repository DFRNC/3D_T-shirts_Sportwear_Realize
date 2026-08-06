# syntax=docker/dockerfile:1

# Debian rather than Alpine on purpose: `sharp` (used to rasterize UV images for the order PDFs)
# ships prebuilt glibc binaries, and on musl it either falls back to a slow build-from-source or
# needs libvips installed by hand.
FROM node:22-bookworm-slim AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

# ─── dependencies ────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# ─── build ───────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* values are inlined into the client bundle at build time, so they must be present
# here — supplying them only at runtime leaves them undefined in the browser, which disables all
# postMessage traffic with the storefront.
ARG NEXT_PUBLIC_SHOPIFY_PARENT_ORIGINS
ARG NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN

# The home page is prerendered, so its collections are fetched during the build. Without these the
# build still succeeds — and bakes an empty catalog into the static HTML.
# Only the Storefront token belongs here: it is a publishable credential. Do not pass Admin secrets
# as build args; they are recoverable from the image history and are only needed at runtime.
ARG SHOPIFY_ENABLED
ARG SHOPIFY_STORE_DOMAIN
ARG SHOPIFY_API_VERSION
ARG SHOPIFY_API_MODE
ARG SHOPIFY_STOREFRONT_ACCESS_TOKEN
ARG SHOPIFY_HOME_COLLECTION_HANDLES

ENV NEXT_TELEMETRY_DISABLED=1
# Peak build RSS measured at ~2.7 GB; this keeps V8 from being the thing that runs out first.
ENV NODE_OPTIONS=--max-old-space-size=3584

RUN pnpm build

# ─── runtime ─────────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# REQUIRED. `output: 'standalone'` traces server code only — it copies a couple of referenced files
# out of public/ and leaves the rest behind. Without this line public/models (498 MB of GLB) and
# public/ghostscript (30 MB of WASM) are absent, and the configurator 404s on every asset while the
# container itself looks perfectly healthy.
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# ISR writes revalidated pages here; mount a volume on it so a redeploy does not start cold.
RUN mkdir -p .next/cache && chown -R nextjs:nodejs .next

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
