import { getModel, resolveProductPreviewSrc } from '@utils/garmentCatalog/garmentCatalog';
import { resolveProductCatalogPreviewSrc } from '@utils/resolveProductCatalogPreviewSrc/resolveProductCatalogPreviewSrc';
import { getCatalogProductEntry } from '@utils/productCatalog/productCatalog';
import type { cartItemType } from '@types';
const resolveCartItemPreviewSrc = (item: Pick<cartItemType, 'collection' | 'slug' | 'modelId'>) => {
  const entry = getCatalogProductEntry(item.collection, item.slug);
  const product = getModel(item.modelId);
  const garmentPreviewSrc = product ? resolveProductPreviewSrc(product) : undefined;

  if (entry) return resolveProductCatalogPreviewSrc(entry, garmentPreviewSrc);

  return garmentPreviewSrc ?? '';
};

export { resolveCartItemPreviewSrc };
