'use client';

import { CONFIGURATOR_DEFAULT_MINIMUM_COUNT } from '@constants';
import type { checkoutProductType } from '@types';

const getProductRowQuantity = (product: checkoutProductType) => product.rows.reduce((sum, row) => sum + row.quantity, 0);

const getCheckoutTotalQuantity = (products: checkoutProductType[]) => products.reduce((sum, product) => sum + getProductRowQuantity(product), 0);

const getCheckoutMinimumQuantity = (products: checkoutProductType[]) =>
  products.reduce((minimum, product) => Math.max(minimum, product.business.minimumCount || 0), CONFIGURATOR_DEFAULT_MINIMUM_COUNT);

const isCheckoutMinimumQuantityMet = (products: checkoutProductType[]) => getCheckoutTotalQuantity(products) >= getCheckoutMinimumQuantity(products);

const getCheckoutDiscountPercent = (totalQuantity: number): number => {
  if (totalQuantity >= 110) return 10;
  if (totalQuantity >= 81) return 7;
  if (totalQuantity >= 51) return 5;
  if (totalQuantity >= 26) return 3;
  return 0;
};

const getProductUnitPrice = (product: checkoutProductType) => product.business.price;

const getProductsSubtotal = (products: checkoutProductType[]) =>
  products.reduce((sum, product) => {
    const unitPrice = getProductUnitPrice(product);
    const quantity = getProductRowQuantity(product);
    return sum + unitPrice * quantity;
  }, 0);

export {
  getCheckoutDiscountPercent,
  getCheckoutMinimumQuantity,
  getCheckoutTotalQuantity,
  getProductRowQuantity,
  getProductUnitPrice,
  getProductsSubtotal,
  isCheckoutMinimumQuantityMet,
};
