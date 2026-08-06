import { cache } from 'react';

import { CONFIGURATOR_DEFAULT_MINIMUM_COUNT, resolveShopifyCollectionVolumeDiscount } from '@constants';
import { isShopifyEnabled } from '@shopify/config';
import { fetchConfiguratorProductByHandle } from '@shopify/fetchConfiguratorProductByHandle';
import type { configuratorProductHydrationType } from '@configurator/types';
import type { garmentBusinessType } from '@types';
import { resolveConfiguratorProductBySlug } from '@utils';

const mergeCollectionVolumeTerms = (business: garmentBusinessType, collectionHandle: string): garmentBusinessType => {
  const terms = resolveShopifyCollectionVolumeDiscount(collectionHandle);
  if (!terms) return business;

  return {
    ...business,
    minimumCount: business.minimumCount > 0 ? business.minimumCount : terms.minimumOrderCount,
    bonusCount: business.bonusCount > 0 ? business.bonusCount : terms.bonusCount,
    bonusDiscount: business.bonusDiscount > 0 ? business.bonusDiscount : terms.bonusDiscount,
  };
};

const withDefaultMinimumOrder = (product: configuratorProductHydrationType): configuratorProductHydrationType => {
  if (product.business.minimumCount > 0) return product;

  return {
    ...product,
    business: {
      ...product.business,
      minimumCount: CONFIGURATOR_DEFAULT_MINIMUM_COUNT,
    },
  };
};

/**
 * Applies the business rules every resolved product must carry, whatever the source.
 *
 * These used to run only on the Shopify branch, so the local-catalog fallback silently shipped
 * different minimum-order counts and no volume discounts — meaning a Shopify outage quietly changed
 * the terms shown to the customer instead of just the product copy.
 */
const applyBusinessRules = (product: configuratorProductHydrationType, collectionHandle?: string): configuratorProductHydrationType => {
  const withVolumeTerms = collectionHandle?.trim() ? { ...product, business: mergeCollectionVolumeTerms(product.business, collectionHandle) } : product;

  return withDefaultMinimumOrder(withVolumeTerms);
};

const resolveConfiguratorProduct = cache(async (slug: string, collectionHandle?: string): Promise<configuratorProductHydrationType | null> => {
  const localProduct = resolveConfiguratorProductBySlug(slug);
  const localFallback = localProduct ? applyBusinessRules(localProduct, collectionHandle) : null;

  if (!isShopifyEnabled()) {
    return localFallback;
  }

  try {
    const shopifyProduct = await fetchConfiguratorProductByHandle(slug);

    if (!shopifyProduct) {
      console.warn(`[shopify] Product "${slug}" not found by handle or custom.id; falling back to local catalog.`);
      return localFallback;
    }

    return applyBusinessRules(shopifyProduct, collectionHandle);
  } catch (error) {
    console.warn(`[shopify] Failed to fetch product "${slug}"; falling back to local catalog.`, error);
  }

  return localFallback;
});

export { resolveConfiguratorProduct };
