import { resolveEmbeddedContext } from '@utils/embeddedSession';

const SHOPIFY_DOMAIN_PATTERN = /^[a-z0-9][a-z0-9-]*\.myshopify\.com$/;

const normalizeOrigin = (value: string): string | null => {
  const trimmed = value.trim();

  if (!trimmed || trimmed.includes('*')) {
    return null;
  }

  try {
    const url = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
    return url.protocol === 'https:' ? url.origin : null;
  } catch {
    return null;
  }
};

/**
 * Storefront origins allowed to exchange `postMessage` traffic with the embedded configurator.
 *
 * Mirrors the server's `SHOPIFY_FRAME_ANCESTORS` on the client, where `process.env` is inlined at
 * build time and so must be read through a literal `NEXT_PUBLIC_*` member access.
 */
const getAllowedParentOrigins = (): string[] => {
  const origins = new Set<string>();

  const configured = process.env.NEXT_PUBLIC_SHOPIFY_PARENT_ORIGINS ?? '';
  for (const entry of configured.split(',')) {
    const normalized = normalizeOrigin(entry);
    if (normalized) {
      origins.add(normalized);
    }
  }

  const storeDomain = (process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? '').trim().toLowerCase();
  if (SHOPIFY_DOMAIN_PATTERN.test(storeDomain)) {
    origins.add(`https://${storeDomain}`);
  }

  return [...origins];
};

const isAllowedParentOrigin = (origin: string): boolean => getAllowedParentOrigins().includes(origin);

/**
 * The single origin outbound messages may target.
 *
 * `postMessage` takes one target, and `'*'` delivers to whatever happens to be framing us — which
 * leaked the Shopify `checkoutUrl` (a bearer credential for the cart) to any embedder. The parent is
 * identified from `document.referrer` and then has to clear the allowlist; when the referrer is
 * suppressed we fall back to the sole configured origin, and post nothing if that is ambiguous.
 */
const resolveEmbeddedParentOrigin = (): string | null => {
  const allowed = getAllowedParentOrigins();

  if (!allowed.length) {
    return null;
  }

  if (typeof document !== 'undefined' && document.referrer) {
    try {
      const referrerOrigin = new URL(document.referrer).origin;
      if (allowed.includes(referrerOrigin)) {
        return referrerOrigin;
      }
    } catch {
      // Malformed referrer — fall through to the configured origin.
    }
  }

  const { shop } = resolveEmbeddedContext();
  const shopDomain = shop?.trim().toLowerCase() ?? '';
  if (SHOPIFY_DOMAIN_PATTERN.test(shopDomain) && allowed.includes(`https://${shopDomain}`)) {
    return `https://${shopDomain}`;
  }

  return allowed.length === 1 ? allowed[0] : null;
};

export { getAllowedParentOrigins, isAllowedParentOrigin, resolveEmbeddedParentOrigin };
