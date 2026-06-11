'use client';

import { useMemo } from 'react';

import { getProduct } from '@data';
import { useCheckout } from '@store';

const useCheckoutSummary = () => {
  const products = useCheckout((state) => state.products);

  const summary = useMemo(() => {
    const store = useCheckout.getState();

    return {
      lineItems: products.map((product) => {
        const garment = getProduct(product.styleId, product.productIndex);

        return {
          id: product.cartItemId,
          name: garment?.name ?? 'Prodotto',
          quantity: store.getProductQuantity(product.cartItemId),
          amount: store.getProductSubtotal(product.cartItemId),
        };
      }),
      shippingCost: store.getShippingCost(),
      discountPercent: store.getDiscountPercent(),
      discountAmount: store.getDiscountAmount(),
      grandTotal: store.getGrandTotal(),
    };
  }, [products]);

  return summary;
};

export { useCheckoutSummary };
