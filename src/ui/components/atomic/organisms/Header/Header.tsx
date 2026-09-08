'use client';

import { usePathname } from 'next/navigation';

import { IoIosSearch } from 'react-icons/io';

import { CartIcon } from '@molecules/UserBar/CartIcon';
import { UserIcon } from '@molecules/UserBar/UserIcon';
import { LangSwitcher, Search, UserBar } from '@molecules';
import { AtomImage, Box, Button, Container, Flex, Grid, Logo } from '@atoms';
import { useAppNavigate } from '@hooks';
import { useEmbedded } from '@providers';
import { useConfigurationCart } from '@store';
import { postEmbeddedHeaderAction } from '@utils/embeddedUrlSync';
import { buildConfiguratorPath, isConfiguratorPath } from '@utils';

// When the configurator runs inside the storefront iframe the real Shopify header
// is hidden on the host (a header element over the iframe is what triggers the iOS
// cold-load viewport shift). This renders the same header markup and forwards every
// control back to the host via postMessage, so the store still has a working header.
const EmbeddedHeader = () => {
  return (
    <Box variant="header" asChild>
      <header>
        <Container>
          <Grid variant="header">
            <Flex variant="utility_bar">
              <Button variant="ghost" size="icon" aria-label="Search" onClick={() => postEmbeddedHeaderAction('search')}>
                <IoIosSearch aria-hidden="true" className="size-5 text-primary-10" />
              </Button>
            </Flex>
            <button type="button" aria-label="Home" className="flex items-center justify-center" onClick={() => postEmbeddedHeaderAction('home')}>
              <AtomImage src="/svg/logo_full.svg" alt="Realize" variant="logo_full" priority />
            </button>
            <Flex variant="user_bar">
              <Button variant="ghost" size="icon" aria-label="Menu" onClick={() => postEmbeddedHeaderAction('menu')}>
                <span className="flex flex-col gap-[3px]">
                  <span className="block h-[2px] w-4 bg-primary-10" />
                  <span className="block h-[2px] w-4 bg-primary-10" />
                  <span className="block h-[2px] w-4 bg-primary-10" />
                </span>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Account" onClick={() => postEmbeddedHeaderAction('account')}>
                <UserIcon />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart" onClick={() => postEmbeddedHeaderAction('cart')}>
                <CartIcon />
              </Button>
            </Flex>
          </Grid>
        </Container>
      </header>
    </Box>
  );
};

const Header = () => {
  const { embedded } = useEmbedded();
  const { toAppPath } = useAppNavigate();
  const pathname = usePathname();
  const activeItem = useConfigurationCart((state) => state.items.find((item) => item.id === state.activeItemId) ?? state.items[0]);

  if (embedded) {
    return <EmbeddedHeader />;
  }

  const isOnConfigurator = isConfiguratorPath(pathname);
  const logoHref = toAppPath(isOnConfigurator || !activeItem?.collectionHandle ? '/' : buildConfiguratorPath(activeItem.collectionHandle, activeItem.slug));

  return (
    <Box variant="header" asChild>
      <header>
        <Container>
          <Grid variant="header">
            <Flex variant="utility_bar">
              <Search />
              <LangSwitcher />
            </Flex>
            <Logo href={logoHref} />
            <UserBar />
          </Grid>
        </Container>
      </header>
    </Box>
  );
};

export { Header };
