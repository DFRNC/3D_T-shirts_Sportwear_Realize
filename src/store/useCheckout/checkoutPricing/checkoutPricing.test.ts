import { describe, expect, it } from 'vitest';

import { getCheckoutMinimumQuantity, isCheckoutMinimumQuantityMet } from '@store/useCheckout/checkoutPricing';
import type { checkoutProductType } from '@types';

const buildProduct = (cartItemId: string, quantities: number[], minimumCount?: number) =>
  ({
    cartItemId,
    business: { name: cartItemId, price: 10, minimumCount },
    rows: quantities.map((quantity, index) => ({ id: `${cartItemId}-${index}`, quantity })),
  }) as checkoutProductType;

describe('checkout minimum quantity', () => {
  it('blocks a single product below the default minimum', () => {
    expect(isCheckoutMinimumQuantityMet([buildProduct('a', [1])])).toBe(false);
  });

  it('allows a single product that reaches the minimum across its rows', () => {
    expect(isCheckoutMinimumQuantityMet([buildProduct('a', [2, 3])])).toBe(true);
  });

  it('requires each product to reach the minimum on its own', () => {
    const products = [buildProduct('a', [10]), buildProduct('b', [1])];

    // The combined quantity is 11, but product "b" is still short of 5.
    expect(isCheckoutMinimumQuantityMet(products)).toBe(false);
  });

  it('allows the order once every product reaches its own minimum', () => {
    expect(isCheckoutMinimumQuantityMet([buildProduct('a', [10]), buildProduct('b', [5])])).toBe(true);
  });

  it('honours a per-product minimum override', () => {
    expect(isCheckoutMinimumQuantityMet([buildProduct('a', [8], 10)])).toBe(false);
    expect(isCheckoutMinimumQuantityMet([buildProduct('a', [10], 10)])).toBe(true);
  });

  it('reports the minimum of the product that is still short', () => {
    expect(getCheckoutMinimumQuantity([buildProduct('a', [20]), buildProduct('b', [2], 12)])).toBe(12);
  });

  it('blocks an empty cart', () => {
    expect(isCheckoutMinimumQuantityMet([])).toBe(false);
  });
});
