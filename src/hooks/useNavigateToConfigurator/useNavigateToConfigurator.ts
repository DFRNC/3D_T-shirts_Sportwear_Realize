
import { useCallback } from 'react';

import { useAppNavigate } from '../useAppNavigate';

const useNavigateToConfigurator = () => {
  const { navigateToAppPath } = useAppNavigate();

  const navigateToConfigurator = useCallback(
    (slug: string) => {
      navigateToAppPath(`/app/configurator/${slug}`);
    },
    [navigateToAppPath],
  );

  return { navigateToConfigurator };
};

export { useNavigateToConfigurator };
