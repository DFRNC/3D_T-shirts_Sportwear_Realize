
import { Link, useLocation, useSearchParams } from 'react-router';

import { AtomImage, Flex } from '@atoms';
import { useConfigurationCart } from '@store';
import { buildAppPath } from '../../../../../hooks/useAppNavigate';

const Logo = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const activeSlug = useConfigurationCart((state) => state.items.find((item) => item.id === state.activeItemId)?.slug ?? state.items[0]?.slug);

  const isOnConfigurator = pathname.startsWith('/app/configurator');
  const target = isOnConfigurator || !activeSlug ? '/app' : `/app/configurator/${activeSlug}`;
  const href = buildAppPath(target, searchParams);

  return (
    <Flex className="w-full">
      <Link to={href}>
        <AtomImage src="/svg/logo_full.svg" alt="Logo" variant="logo_full" priority />
      </Link>
    </Flex>
  );
};

export { Logo };
