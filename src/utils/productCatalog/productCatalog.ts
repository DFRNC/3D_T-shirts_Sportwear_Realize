import type { catalogProductEntryType, catalogProductRefType, productCollectionIdType } from '@types';
import { CATALOG_PRODUCT_ENTRIES, PRODUCT_COLLECTIONS } from '@constants';

import { getProduct, resolveProductPreviewSrc } from '../garmentCatalog/garmentCatalog';
import { resolveProductCatalogPreviewSrc } from '../resolveProductCatalogPreviewSrc/resolveProductCatalogPreviewSrc';

const getCatalogProductEntry = (collection: productCollectionIdType, slug: string): catalogProductEntryType | undefined =>
  CATALOG_PRODUCT_ENTRIES.find((entry) => entry.collection === collection && entry.slug === slug);

const toCatalogProductRef = (entry: catalogProductEntryType): catalogProductRefType | undefined => {
  if (!entry.styleId || entry.productIndex === undefined) return undefined;

  const product = getProduct(entry.styleId, entry.productIndex);
  if (!product) return undefined;

  const garmentPreviewSrc = resolveProductPreviewSrc(product);

  return {
    collection: entry.collection,
    slug: entry.slug,
    name: entry.name,
    styleId: entry.styleId,
    productIndex: entry.productIndex,
    configurable: entry.configurable,
    previewSrc: resolveProductCatalogPreviewSrc(entry, garmentPreviewSrc),
    product,
  };
};

const createCatalogProductRefPlaceholder = (entry: catalogProductEntryType): catalogProductRefType => ({
  collection: entry.collection,
  slug: entry.slug,
  name: entry.name,
  styleId: 'crewneck',
  productIndex: 1,
  configurable: entry.configurable,
  previewSrc: resolveProductCatalogPreviewSrc(entry),
  product: getProduct('crewneck', 1)!,
});

const listCatalogProductsByCollection = (collection: productCollectionIdType): catalogProductRefType[] =>
  CATALOG_PRODUCT_ENTRIES.filter((entry) => entry.collection === collection).map(
    (entry) => toCatalogProductRef(entry) ?? createCatalogProductRefPlaceholder(entry),
  );

const listOtherProductCollections = (currentCollection: productCollectionIdType) =>
  PRODUCT_COLLECTIONS.filter((collection) => collection.id !== currentCollection);

const listCatalogProducts = (): catalogProductRefType[] =>
  CATALOG_PRODUCT_ENTRIES.map((entry) => toCatalogProductRef(entry) ?? createCatalogProductRefPlaceholder(entry));

export { getCatalogProductEntry, listCatalogProducts, listCatalogProductsByCollection, listOtherProductCollections, toCatalogProductRef };
