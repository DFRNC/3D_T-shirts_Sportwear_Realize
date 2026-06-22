const SHOPIFY_EMBEDDED_QUERY_KEYS = [
  'shop',
  'host',
  'embedded',
  'locale',
  'session',
  'id_token',
  'timestamp',
  'hmac',
] as const;

const buildAppPath = (pathname: string, searchParams: URLSearchParams): string => {
  const next = new URLSearchParams();

  for (const key of SHOPIFY_EMBEDDED_QUERY_KEYS) {
    const value = searchParams.get(key);

    if (value) {
      next.set(key, value);
    }
  }

  const query = next.toString();

  return query ? `${pathname}?${query}` : pathname;
};

export { buildAppPath, SHOPIFY_EMBEDDED_QUERY_KEYS };
