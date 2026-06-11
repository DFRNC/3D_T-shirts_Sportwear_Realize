'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useNavigateToConfigurator = () => {
  const router = useRouter();

  const navigateToConfigurator = useCallback(() => {
    router.push('/configurator');
  }, [router]);

  return { navigateToConfigurator };
};

export { useNavigateToConfigurator };
