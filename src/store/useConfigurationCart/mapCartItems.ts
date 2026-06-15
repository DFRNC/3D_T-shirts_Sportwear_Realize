import type { cartItemType, productCollectionIdType, styleIdType } from '@types';
import { DEFAULT_CATALOG_PRODUCT } from '@constants';

const DEFAULT_STYLE_ID: styleIdType = DEFAULT_CATALOG_PRODUCT.styleId ?? 'crewneck';
const DEFAULT_PRODUCT_INDEX = DEFAULT_CATALOG_PRODUCT.productIndex ?? 1;
const DEFAULT_COLLECTION: productCollectionIdType = DEFAULT_CATALOG_PRODUCT.collection;
const DEFAULT_SLUG = DEFAULT_CATALOG_PRODUCT.slug;

const createCartItem = (params: { collection: productCollectionIdType; slug: string; styleId: styleIdType; productIndex: number }): cartItemType => ({
  id: `cart-${params.collection}-${params.slug}-${crypto.randomUUID()}`,
  collection: params.collection,
  slug: params.slug,
  styleId: params.styleId,
  productIndex: params.productIndex,
});

const createDefaultCartItem = () =>
  createCartItem({
    collection: DEFAULT_COLLECTION,
    slug: DEFAULT_SLUG,
    styleId: DEFAULT_STYLE_ID,
    productIndex: DEFAULT_PRODUCT_INDEX,
  });

export { createCartItem, createDefaultCartItem, DEFAULT_COLLECTION, DEFAULT_PRODUCT_INDEX, DEFAULT_SLUG, DEFAULT_STYLE_ID };
