const SHOPIFY_THEME_EDITOR_ORIGIN = 'https://admin.shopify.com';
const SHOPIFY_THEME_PREVIEW_ORIGIN = 'https://online-store-web.shopifyapps.com';
const SHOPIFY_DOMAIN_PATTERN = /^[a-z0-9][a-z0-9-]*\.myshopify\.com$/;

const readEnv = (key: string): string | undefined => {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
};

const normalizeShopDomain = (shop: string | null | undefined): string | null => {
  if (!shop) {
    return null;
  }

  const trimmed = shop.trim().toLowerCase();
  return SHOPIFY_DOMAIN_PATTERN.test(trimmed) ? trimmed : null;
};

/**
 * Frame ancestors are a security boundary, so an entry only counts if it parses as a bare https
 * origin: no wildcards, no path, no port-less scheme guessing. Anything else is dropped rather than
 * coerced — a malformed entry must not silently widen who may frame the app.
 */
const normalizeFrameAncestor = (origin: string): string | null => {
  const trimmed = origin.trim();

  if (!trimmed || trimmed.includes('*')) {
    return null;
  }

  const candidate = trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(candidate);

    if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash) {
      return null;
    }

    return url.origin;
  } catch {
    return null;
  }
};

/**
 * Built exclusively from server-side configuration.
 *
 * Earlier revisions folded the request's own `shop`/`host` query parameters into this list, which
 * let any visitor append their own origin (`?host=evil.example`) and authorise themselves to frame
 * the app — defeating the clickjacking protection the header exists to provide. The storefront that
 * may embed the configurator is a deployment fact, so it belongs in the environment: set
 * SHOPIFY_FRAME_ANCESTORS to the storefront's custom domain (comma-separated for several).
 */
const buildShopifyFrameAncestors = (): string[] => {
  const origins = new Set<string>(["'self'", SHOPIFY_THEME_EDITOR_ORIGIN, SHOPIFY_THEME_PREVIEW_ORIGIN]);

  const storeDomain = normalizeShopDomain(readEnv('SHOPIFY_STORE_DOMAIN'));
  if (storeDomain) {
    origins.add(`https://${storeDomain}`);
  }

  const raw = readEnv('SHOPIFY_FRAME_ANCESTORS');
  if (raw) {
    for (const entry of raw.split(',')) {
      const normalized = normalizeFrameAncestor(entry);
      if (normalized) {
        origins.add(normalized);
      }
    }
  }

  return [...origins];
};

const buildShopifyFrameAncestorsHeader = (): string => {
  return `frame-ancestors ${buildShopifyFrameAncestors().join(' ')};`;
};

export {
  buildShopifyFrameAncestors,
  buildShopifyFrameAncestorsHeader,
  normalizeFrameAncestor,
  normalizeShopDomain,
  SHOPIFY_THEME_EDITOR_ORIGIN,
  SHOPIFY_THEME_PREVIEW_ORIGIN,
};
