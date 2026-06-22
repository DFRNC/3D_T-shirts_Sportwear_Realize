
import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { buildAppPath } from './buildAppPath';

const useAppNavigate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const toAppPath = useCallback((pathname: string) => buildAppPath(pathname, searchParams), [searchParams]);

  const navigateToAppPath = useCallback(
    (pathname: string) => {
      navigate(toAppPath(pathname));
    },
    [navigate, toAppPath],
  );

  return { navigateToAppPath, toAppPath };
};

export { useAppNavigate };
