import { isShopifyEnabled } from '@shopify/config';
import { fetchConfiguratorCollectionSummaries } from '@shopify/fetchConfiguratorCollections';
import type { homePageCollectionSummaryType } from '@types';

let resolveHomeCollectionSummariesCache: Promise<homePageCollectionSummaryType[]> | null = null;

const resolveHomeCollectionSummaries = async (): Promise<homePageCollectionSummaryType[]> => {
  if (resolveHomeCollectionSummariesCache) return resolveHomeCollectionSummariesCache;

  const resolver = (async (): Promise<homePageCollectionSummaryType[]> => {
    if (!isShopifyEnabled()) {
      console.warn('[shopify] Shopify is disabled; no home collections available.');
      return [];
    }

    try {
      const collections = await fetchConfiguratorCollectionSummaries();

      if (collections.length > 0) {
        return collections;
      }

      console.warn('[shopify] No configurator collection summaries returned.');
    } catch (error) {
      console.warn('[shopify] Failed to fetch collection summaries.', error);
    }

    return [];
  })();

  resolveHomeCollectionSummariesCache = resolver;

  const collections = await resolver;
  if (collections.length === 0) {
    resolveHomeCollectionSummariesCache = null;
  }

  return collections;
};

export { resolveHomeCollectionSummaries };
