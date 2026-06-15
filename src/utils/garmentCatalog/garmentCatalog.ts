import type { garmentConfigType, styleConfigType, styleIdType } from '@types';

import crewneckData from '../../data/crewneck/crewneck.json';

const STYLES: Record<styleIdType, styleConfigType> = {
  crewneck: crewneckData as styleConfigType,
};

const getStyle = (id: styleIdType): styleConfigType => STYLES[id];

const getProduct = (styleId: styleIdType, productIndex: number): garmentConfigType | undefined => STYLES[styleId]?.products[productIndex - 1];

const resolveProductPreviewSrc = (product: garmentConfigType) =>
  product.previewImage ? `${product.path}${product.previewImage}` : `${product.path}designs/thumbs/crewneck_design_1.webp`;

export { getProduct, getStyle, resolveProductPreviewSrc, STYLES };
