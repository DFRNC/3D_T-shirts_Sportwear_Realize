import type { cartItemType } from '@types';

import { getProduct, resolveProductPreviewSrc } from '../garmentCatalog/garmentCatalog';
import { resolveProductCatalogPreviewSrc } from '../resolveProductCatalogPreviewSrc/resolveProductCatalogPreviewSrc';
import { getCatalogProductEntry } from './productCatalog';

const resolveCartItemPreviewSrc = (item: Pick<cartItemType, 'collection' | 'slug' | 'styleId' | 'productIndex'>) => {
  const entry = getCatalogProductEntry(item.collection, item.slug);
  const product = getProduct(item.styleId, item.productIndex);
  const garmentPreviewSrc = product ? resolveProductPreviewSrc(product) : undefined;

  if (entry) return resolveProductCatalogPreviewSrc(entry, garmentPreviewSrc);

  return garmentPreviewSrc ?? '';
};

export { resolveCartItemPreviewSrc };
