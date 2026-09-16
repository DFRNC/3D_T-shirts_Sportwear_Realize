'use client';

import { createSingletonStore } from '@store/createSingletonStore';

interface ProductCatalogRequestState {
  isRequested: boolean;
  request: () => void;
  consume: () => void;
}

const useProductCatalogRequest = createSingletonStore<ProductCatalogRequestState>('useProductCatalogRequest', (set) => ({
  isRequested: false,
  request: () => set({ isRequested: true }),
  consume: () => set({ isRequested: false }),
}));

export { useProductCatalogRequest };
