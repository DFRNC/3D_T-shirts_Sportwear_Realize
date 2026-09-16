'use client';

import { createSingletonStore } from '@store/createSingletonStore';
import type { modalInfoTabType } from '@types';

interface InfoDialogState {
  isOpen: boolean;
  sizeChart: modalInfoTabType | null;
  setIsOpen: (isOpen: boolean) => void;
  openWithSizeChart: (sizeChart: modalInfoTabType | null) => void;
}

const useInfoDialog = createSingletonStore<InfoDialogState>('useInfoDialog', (set) => ({
  isOpen: false,
  sizeChart: null,
  setIsOpen: (isOpen: boolean) => set(isOpen ? { isOpen } : { isOpen, sizeChart: null }),
  openWithSizeChart: (sizeChart) => set({ isOpen: true, sizeChart }),
}));

export { useInfoDialog };
