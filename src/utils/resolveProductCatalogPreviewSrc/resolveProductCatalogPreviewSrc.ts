import type { catalogProductEntryType } from '@types';
import { resolveProductFlipCardSrc } from '@utils/resolveProductFlipCardSrc/resolveProductFlipCardSrc';
const resolveProductCatalogPreviewSrc = (entry: Pick<catalogProductEntryType, 'collection' | 'slug' | 'useGarmentPreview'>, garmentPreviewSrc?: string) => {
  if (entry.useGarmentPreview && garmentPreviewSrc) return garmentPreviewSrc;

  return resolveProductFlipCardSrc(entry.collection, entry.slug, 'front');
};

export { resolveProductCatalogPreviewSrc };
