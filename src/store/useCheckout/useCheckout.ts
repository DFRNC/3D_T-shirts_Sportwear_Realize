'use client';

import type { checkoutLineRowPatchType, checkoutProductType } from '@types';

import { clampCheckoutRowQuantity } from '@constants';
import { create } from 'zustand';

import { captureGarmentConfiguration, useConfigurationCart } from '../useConfigurationCart';
import { sanitizeNumberText } from '../useGarmentNumber';

import { buildCheckoutRows, createCheckoutRowFromPreset, extractCheckoutRowPreset } from './buildCheckoutRows';
import { getCheckoutDiscountPercent, getProductRowQuantity, getProductsSubtotal, getProductUnitPrice } from './checkoutPricing';
import { extractUniqueTestoTexts } from './extractUniqueTestoTexts';
import { resolveCheckoutPrintAvailability } from './resolveCheckoutPrintAvailability';
import { syncCheckoutPresetToCartConfiguration } from './syncCheckoutPresetToCartConfiguration';
import { syncTestoTextInCartConfiguration } from './syncTestoTextInCartConfiguration';

interface CheckoutState {
  products: checkoutProductType[];
  initializeFromCart: () => void;
  addRow: (cartItemId: string) => void;
  removeRow: (cartItemId: string, rowId: string) => void;
  updateRow: (cartItemId: string, rowId: string, patch: checkoutLineRowPatchType) => void;
  getProductQuantity: (cartItemId: string) => number;
  getGrandTotalQuantity: () => number;
  getProductSubtotal: (cartItemId: string) => number;
  getSubtotal: () => number;
  getShippingCost: () => number;
  getDiscountPercent: () => number;
  getDiscountAmount: () => number;
  getGrandTotal: () => number;
}

const toCheckoutRowPreset = (product: checkoutProductType) => {
  const firstRow = product.rows[0];
  if (!firstRow) return product.rowPreset;

  return {
    size: firstRow.size,
    name: firstRow.name,
    number: firstRow.number,
    testoTexts: [...firstRow.testoTexts],
  };
};

const useCheckout = create<CheckoutState>((set, get) => ({
  products: [],

  initializeFromCart: () => {
    const cartState = useConfigurationCart.getState();
    const activeConfiguration = captureGarmentConfiguration();
    const configurations = {
      ...cartState.configurations,
      [cartState.activeItemId]: activeConfiguration,
    };

    const products: checkoutProductType[] = cartState.items.map((item) => {
      const rowPreset = extractCheckoutRowPreset(configurations[item.id]);

      return {
        cartItemId: item.id,
        styleId: item.styleId,
        productIndex: item.productIndex,
        rowPreset,
        rows: buildCheckoutRows(configurations[item.id]),
      };
    });

    set({ products });
  },

  addRow: (cartItemId) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.cartItemId === cartItemId
          ? {
              ...product,
              rows: [...product.rows, createCheckoutRowFromPreset(product.rowPreset)],
            }
          : product,
      ),
    }));
  },

  removeRow: (cartItemId, rowId) => {
    set((state) => ({
      products: state.products.map((product) => {
        if (product.cartItemId !== cartItemId || product.rows.length <= 1) return product;
        return {
          ...product,
          rows: product.rows.filter((row) => row.id !== rowId),
        };
      }),
    }));
  },

  updateRow: (cartItemId, rowId, patch) => {
    const normalizedPatch: checkoutLineRowPatchType = { ...patch };

    if (patch.quantity !== undefined) {
      normalizedPatch.quantity = clampCheckoutRowQuantity(patch.quantity);
    }

    if (patch.number !== undefined) {
      normalizedPatch.number = sanitizeNumberText(patch.number);
    }

    const isTestoTextPatch = patch.testoTextIndex !== undefined && patch.testoText !== undefined;
    const printAvailability = resolveCheckoutPrintAvailability(useConfigurationCart.getState().getConfiguration(cartItemId));

    if (isTestoTextPatch) {
      if (!printAvailability.hasTesto) return;

      set((state) => ({
        products: state.products.map((product) => {
          if (product.cartItemId !== cartItemId) return product;

          const row = product.rows.find((item) => item.id === rowId);
          const previousText = row?.testoTexts[patch.testoTextIndex!];
          if (previousText === undefined) return product;

          syncTestoTextInCartConfiguration(cartItemId, previousText, patch.testoText!);

          const configuration = useConfigurationCart.getState().getConfiguration(cartItemId);
          const nextTestoTexts = extractUniqueTestoTexts(configuration);
          const rows = product.rows.map((item) => ({ ...item, testoTexts: nextTestoTexts }));
          const rowPreset = { ...toCheckoutRowPreset({ ...product, rows }), testoTexts: nextTestoTexts };

          return {
            ...product,
            rows,
            rowPreset,
          };
        }),
      }));
      return;
    }

    if (patch.name !== undefined && !printAvailability.hasName) {
      delete normalizedPatch.name;
    }

    if (patch.number !== undefined && !printAvailability.hasNumber) {
      delete normalizedPatch.number;
    }

    if (Object.keys(normalizedPatch).length === 0) return;

    set((state) => ({
      products: state.products.map((product) => {
        if (product.cartItemId !== cartItemId) return product;

        const rows = product.rows.map((row) => (row.id === rowId ? { ...row, ...normalizedPatch } : row));
        const isFirstRow = product.rows[0]?.id === rowId;
        const nextProduct = { ...product, rows };

        if (!isFirstRow) return nextProduct;

        const rowPreset = toCheckoutRowPreset(nextProduct);
        syncCheckoutPresetToCartConfiguration(cartItemId, rowPreset);

        return {
          ...nextProduct,
          rowPreset,
        };
      }),
    }));
  },

  getProductQuantity: (cartItemId) => {
    const product = get().products.find((item) => item.cartItemId === cartItemId);
    if (!product) return 0;
    return getProductRowQuantity(product);
  },

  getGrandTotalQuantity: () => get().products.reduce((sum, product) => sum + getProductRowQuantity(product), 0),

  getProductSubtotal: (cartItemId) => {
    const product = get().products.find((item) => item.cartItemId === cartItemId);
    if (!product) return 0;
    return getProductUnitPrice(product) * getProductRowQuantity(product);
  },

  getSubtotal: () => getProductsSubtotal(get().products),

  getShippingCost: () => 0,

  getDiscountPercent: () => getCheckoutDiscountPercent(get().getGrandTotalQuantity()),

  getDiscountAmount: () => {
    const subtotal = get().getSubtotal();
    const discountPercent = get().getDiscountPercent();
    return subtotal * (discountPercent / 100);
  },

  getGrandTotal: () => {
    const subtotal = get().getSubtotal();
    const discount = get().getDiscountAmount();
    const shipping = get().getShippingCost();
    return Math.max(subtotal - discount + shipping, 0);
  },
}));

export { useCheckout };
