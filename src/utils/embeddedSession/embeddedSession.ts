const EMBEDDED_STORAGE_KEY = 'realize:embedded';
const SHOP_STORAGE_KEY = 'realize:shop';
const HOST_STORAGE_KEY = 'realize:host';
const SHOP_ORIGIN_STORAGE_KEY = 'realize:shopOrigin';

type embeddedSessionType = {
  embedded: boolean;
  shop: string | null;
  host: string | null;
  shopOrigin: string | null;
};

const normalizeShopOrigin = (value: string | null): string | null => {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      return null;
    }

    return url.origin;
  } catch {
    return null;
  }
};

const readEmbeddedSession = (): embeddedSessionType => {
  if (typeof window === 'undefined') {
    return { embedded: false, shop: null, host: null, shopOrigin: null };
  }

  return {
    embedded: sessionStorage.getItem(EMBEDDED_STORAGE_KEY) === '1',
    shop: sessionStorage.getItem(SHOP_STORAGE_KEY),
    host: sessionStorage.getItem(HOST_STORAGE_KEY),
    shopOrigin: normalizeShopOrigin(sessionStorage.getItem(SHOP_ORIGIN_STORAGE_KEY)),
  };
};

const persistEmbeddedSession = (embedded: boolean, shop: string | null, host: string | null, shopOrigin: string | null = null): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!embedded) {
    return;
  }

  sessionStorage.setItem(EMBEDDED_STORAGE_KEY, '1');

  if (shop) {
    sessionStorage.setItem(SHOP_STORAGE_KEY, shop);
  } else {
    sessionStorage.removeItem(SHOP_STORAGE_KEY);
  }

  if (host) {
    sessionStorage.setItem(HOST_STORAGE_KEY, host);
  } else {
    sessionStorage.removeItem(HOST_STORAGE_KEY);
  }

  const normalizedShopOrigin = normalizeShopOrigin(shopOrigin);

  if (normalizedShopOrigin) {
    sessionStorage.setItem(SHOP_ORIGIN_STORAGE_KEY, normalizedShopOrigin);
  }
};

const resolveEmbeddedContext = (): embeddedSessionType => {
  if (typeof window === 'undefined') {
    return { embedded: false, shop: null, host: null, shopOrigin: null };
  }

  const params = new URLSearchParams(window.location.search);
  const urlEmbedded = params.get('embedded') === '1';
  const urlShop = params.get('shop');
  const urlHost = params.get('host');
  const urlShopOrigin = normalizeShopOrigin(params.get('shop_origin'));

  if (urlEmbedded) {
    persistEmbeddedSession(true, urlShop, urlHost, urlShopOrigin);
  }

  const session = readEmbeddedSession();

  return {
    embedded: urlEmbedded || session.embedded,
    shop: urlShop ?? session.shop,
    host: urlHost ?? session.host,
    shopOrigin: urlShopOrigin ?? session.shopOrigin,
  };
};

const isEmbeddedSession = (): boolean => resolveEmbeddedContext().embedded;

const buildEmbeddedSearchParams = (): URLSearchParams | null => {
  const { embedded, shop, host } = resolveEmbeddedContext();

  if (!embedded) {
    return null;
  }

  const params = new URLSearchParams({ embedded: '1' });

  if (shop) {
    params.set('shop', shop);
  }

  if (host) {
    params.set('host', host);
  }

  return params;
};

const buildAppPath = (pathname: string): string => {
  const params = buildEmbeddedSearchParams();

  if (!params) {
    return pathname;
  }

  return `${pathname}?${params.toString()}`;
};

export { buildAppPath, isEmbeddedSession, normalizeShopOrigin, persistEmbeddedSession, readEmbeddedSession, resolveEmbeddedContext };
