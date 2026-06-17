'use client';

import type { cartItemConfigurationType, cartItemType, catalogProductRefType } from '@types';
import { getProduct } from '@utils';

import { create } from 'zustand';

import { activateCartItem } from './activateCartItem';
import { captureGarmentConfiguration, cloneCartItemConfiguration, createDefaultCartItemConfiguration } from './cartItemConfiguration';
import { inheritCartItemConfiguration } from './inheritCartItemConfiguration';
import { createCartItem, createDefaultCartItem } from './mapCartItems';
import { persistCartItemSnapshot } from './persistCartItemSnapshot';

interface ConfigurationCartState {
  items: cartItemType[];
  activeItemId: string;
  configurations: Record<string, cartItemConfigurationType>;
  previews: Record<string, string>;
  addItem: (product: Pick<catalogProductRefType, 'collection' | 'slug' | 'styleId' | 'productIndex'>) => void;
  duplicateActiveItem: () => void;
  selectItem: (id: string) => void;
  removeItem: (id: string) => void;
  getActiveItemIndex: () => number;
  saveConfiguration: (itemId: string, configuration: cartItemConfigurationType) => void;
  getConfiguration: (itemId: string) => cartItemConfigurationType | undefined;
  savePreview: (itemId: string, previewSrc: string) => void;
  getPreview: (itemId: string) => string | undefined;
  persistActiveItemSnapshot: () => void;
}

const initialItem = createDefaultCartItem();

const useConfigurationCart = create<ConfigurationCartState>((set, get) => ({
  items: [initialItem],
  activeItemId: initialItem.id,
  configurations: {},
  previews: {},

  addItem: (productRef) => {
    const { items, activeItemId, configurations } = get();
    const item = createCartItem(productRef);
    const newProduct = getProduct(productRef.styleId, productRef.productIndex);
    if (!newProduct) return;

    persistCartItemSnapshot(get, activeItemId);

    const nextConfigurations: Record<string, cartItemConfigurationType> = {
      ...configurations,
      [activeItemId]: get().getConfiguration(activeItemId) ?? captureGarmentConfiguration(),
    };

    const firstItem = items[0];
    const firstProduct = getProduct(firstItem.styleId, firstItem.productIndex);
    const referenceConfiguration =
      nextConfigurations[firstItem.id] ?? (firstProduct ? createDefaultCartItemConfiguration(firstProduct) : createDefaultCartItemConfiguration(newProduct));

    const inheritedConfiguration = firstProduct
      ? inheritCartItemConfiguration(referenceConfiguration, firstProduct, newProduct)
      : createDefaultCartItemConfiguration(newProduct);

    set({
      items: [...items, item],
      activeItemId: item.id,
      configurations: {
        ...nextConfigurations,
        [item.id]: inheritedConfiguration,
      },
      previews: get().previews,
    });

    activateCartItem(get, item.id);
  },

  duplicateActiveItem: () => {
    const { items, activeItemId, configurations } = get();
    const activeItem = items.find((item) => item.id === activeItemId);
    if (!activeItem) return;

    persistCartItemSnapshot(get, activeItemId);

    const currentConfiguration = get().getConfiguration(activeItemId) ?? captureGarmentConfiguration();
    const activePreview = get().getPreview(activeItemId);

    const duplicatedItem = createCartItem({
      collection: activeItem.collection,
      slug: activeItem.slug,
      styleId: activeItem.styleId,
      productIndex: activeItem.productIndex,
    });

    set({
      items: [...items, duplicatedItem],
      activeItemId: duplicatedItem.id,
      configurations: {
        ...configurations,
        [activeItemId]: currentConfiguration,
        [duplicatedItem.id]: cloneCartItemConfiguration(currentConfiguration),
      },
      previews: activePreview ? { ...get().previews, [duplicatedItem.id]: activePreview } : get().previews,
    });

    activateCartItem(get, duplicatedItem.id);
  },

  selectItem: (id) => {
    const { items, activeItemId } = get();
    if (!items.some((item) => item.id === id) || activeItemId === id) return;

    activateCartItem(get, id, { savePreviousId: activeItemId });
    set({ activeItemId: id });
  },

  removeItem: (id) => {
    const { items, activeItemId, configurations, previews } = get();
    if (items.length <= 1) return;

    const nextItems = items.filter((item) => item.id !== id);
    const nextActiveId = activeItemId === id ? nextItems[0].id : activeItemId;
    const nextConfigurations = Object.fromEntries(Object.entries(configurations).filter(([itemId]) => itemId !== id));
    const nextPreviews = Object.fromEntries(Object.entries(previews).filter(([itemId]) => itemId !== id));
    const wasActive = activeItemId === id;

    set({
      items: nextItems,
      activeItemId: nextActiveId,
      configurations: nextConfigurations,
      previews: nextPreviews,
    });

    if (wasActive) {
      activateCartItem(get, nextActiveId);
    }
  },

  getActiveItemIndex: () => {
    const { items, activeItemId } = get();
    return items.findIndex((item) => item.id === activeItemId);
  },

  saveConfiguration: (itemId, configuration) => {
    set((state) => ({
      configurations: {
        ...state.configurations,
        [itemId]: cloneCartItemConfiguration(configuration),
      },
    }));
  },

  getConfiguration: (itemId) => get().configurations[itemId],

  savePreview: (itemId, previewSrc) => {
    set((state) => ({
      previews: {
        ...state.previews,
        [itemId]: previewSrc,
      },
    }));
  },

  getPreview: (itemId) => get().previews[itemId],

  persistActiveItemSnapshot: () => {
    const { activeItemId } = get();
    persistCartItemSnapshot(get, activeItemId);
  },
}));

export { useConfigurationCart };
