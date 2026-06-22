'use client';

import { Link, useLocation, useSearchParams } from 'react-router';

import { AtomImage, Flex } from '@atoms';
import { buildAppPath } from '../../../../../hooks/useAppNavigate';

const Logo = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const href = buildAppPath(pathname === '/app/configurator' ? '/app' : '/app/configurator', searchParams);

  return (
    <Flex className="w-full">
      <Link to={href}>
        <AtomImage src="/svg/logo_full.svg" alt="Logo" variant="logo_full" priority />
      </Link>
    </Flex>
  );
};

export { Logo };
