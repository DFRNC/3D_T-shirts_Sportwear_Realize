'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useCheckout, useConfigurationCart } from '@store';

const useNavigateToCheckout = () => {
  const router = useRouter();
  const persistActiveItemSnapshot = useConfigurationCart((state) => state.persistActiveItemSnapshot);
  const initializeFromCart = useCheckout((state) => state.initializeFromCart);

  const navigateToCheckout = useCallback(() => {
    persistActiveItemSnapshot();
    initializeFromCart();
    router.push('/checkout');
  }, [initializeFromCart, persistActiveItemSnapshot, router]);

  return { navigateToCheckout };
};

export { useNavigateToCheckout };
