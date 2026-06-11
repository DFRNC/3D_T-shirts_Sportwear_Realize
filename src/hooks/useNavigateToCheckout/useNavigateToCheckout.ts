'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { captureGarmentConfiguration, useCheckout, useConfigurationCart } from '@store';

const useNavigateToCheckout = () => {
  const router = useRouter();
  const activeItemId = useConfigurationCart((state) => state.activeItemId);
  const saveConfiguration = useConfigurationCart((state) => state.saveConfiguration);
  const initializeFromCart = useCheckout((state) => state.initializeFromCart);

  const navigateToCheckout = useCallback(() => {
    saveConfiguration(activeItemId, captureGarmentConfiguration());
    initializeFromCart();
    router.push('/checkout');
  }, [activeItemId, initializeFromCart, router, saveConfiguration]);

  return { navigateToCheckout };
};

export { useNavigateToCheckout };
