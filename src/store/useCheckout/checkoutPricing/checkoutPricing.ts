'use client';

import { CONFIGURATOR_DEFAULT_MINIMUM_COUNT } from '@constants';
import type { checkoutProductType } from '@types';

const getProductRowQuantity = (product: checkoutProductType) => product.rows.reduce((sum, row) => sum + row.quantity, 0);

const getCheckoutTotalQuantity = (products: checkoutProductType[]) => products.reduce((sum, product) => sum + getProductRowQuantity(product), 0);

const getProductMinimumQuantity = (product: checkoutProductType) => product.business.minimumCount || CONFIGURATOR_DEFAULT_MINIMUM_COUNT;

const isProductMinimumQuantityMet = (product: checkoutProductType) => getProductRowQuantity(product) >= getProductMinimumQuantity(product);

// Reported to the UI as the minimum still to be met: the first product that is short,
// falling back to the largest configured minimum once every product qualifies.
const getCheckoutMinimumQuantity = (products: checkoutProductType[]) => {
  const shortProduct = products.find((product) => !isProductMinimumQuantityMet(product));
  if (shortProduct) return getProductMinimumQuantity(shortProduct);

  return products.reduce((minimum, product) => Math.max(minimum, getProductMinimumQuantity(product)), CONFIGURATOR_DEFAULT_MINIMUM_COUNT);
};

// Every product must reach its own minimum on its own — a large order of one product
// does not cover a second product that is still short.
const isCheckoutMinimumQuantityMet = (products: checkoutProductType[]) => products.length > 0 && products.every(isProductMinimumQuantityMet);

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
  getProductMinimumQuantity,
  getProductRowQuantity,
  getProductUnitPrice,
  getProductsSubtotal,
  isCheckoutMinimumQuantityMet,
  isProductMinimumQuantityMet,
};
