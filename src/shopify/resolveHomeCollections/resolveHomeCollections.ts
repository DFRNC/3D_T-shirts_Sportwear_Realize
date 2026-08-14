import { isShopifyEnabled } from '@shopify/config';
import { fetchConfiguratorCollections } from '@shopify/fetchConfiguratorCollections';
import type { homePageCollectionType } from '@types';

let resolveHomeCollectionsCache: Promise<homePageCollectionType[]> | null = null;

const resolveHomeCollections = async (): Promise<homePageCollectionType[]> => {
  if (resolveHomeCollectionsCache) return resolveHomeCollectionsCache;

  const resolver = (async (): Promise<homePageCollectionType[]> => {
    if (!isShopifyEnabled()) {
      console.warn('[shopify] Shopify is disabled; no home collections available.');
      return [];
    }

    try {
      const collections = await fetchConfiguratorCollections();

      if (collections.length > 0) {
        return collections;
      }

      console.warn('[shopify] No configurator collections returned.');
    } catch (error) {
      console.warn('[shopify] Failed to fetch collections.', error);
    }

    return [];
  })();

  resolveHomeCollectionsCache = resolver;

  const collections = await resolver;
  if (collections.length === 0) {
    resolveHomeCollectionsCache = null;
  }

  return collections;
};

export { resolveHomeCollections };
