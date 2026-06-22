'use client';

import { useCallback } from 'react';

import { useAppNavigate } from '../useAppNavigate';

const useNavigateToConfigurator = () => {
  const { navigateToAppPath } = useAppNavigate();

  const navigateToConfigurator = useCallback(() => {
    navigateToAppPath('/app/configurator');
  }, [navigateToAppPath]);

  return { navigateToConfigurator };
};

export { useNavigateToConfigurator };
