import { isShopifyEnabled } from '@shopify/config';
import { fetchCollectionByHandle } from '@shopify/fetchConfiguratorCollections';
import type { homePageCollectionType } from '@types';

const resolveHomeCollectionByHandleCache = new Map<string, Promise<homePageCollectionType | null>>();

const resolveHomeCollectionByHandle = async (handle: string): Promise<homePageCollectionType | null> => {
  const cached = resolveHomeCollectionByHandleCache.get(handle);
  if (cached) return cached;

  const resolver = (async (): Promise<homePageCollectionType | null> => {
    if (!isShopifyEnabled()) {
      console.warn('[shopify] Shopify is disabled; collection unavailable.');
      return null;
    }

    try {
      return await fetchCollectionByHandle(handle);
    } catch (error) {
      console.warn(`[shopify] Failed to fetch collection "${handle}".`, error);
      return null;
    }
  })();

  resolveHomeCollectionByHandleCache.set(handle, resolver);

  const collection = await resolver;
  if (!collection) {
    resolveHomeCollectionByHandleCache.delete(handle);
  }

  return collection;
};

export { resolveHomeCollectionByHandle };
