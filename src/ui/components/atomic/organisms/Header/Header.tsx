'use client';

import { usePathname } from 'next/navigation';

import { IoIosSearch } from 'react-icons/io';

import { CartIcon } from '@molecules/UserBar/CartIcon';
import { UserIcon } from '@molecules/UserBar/UserIcon';
import { LangSwitcher, Search, UserBar } from '@molecules';
import { AtomImage, AtomSelect, Box, Button, Container, Flex, Grid, Logo } from '@atoms';
import { useAppNavigate } from '@hooks';
import { useEmbedded } from '@providers';
import { useConfigurationCart } from '@store';
import { postEmbeddedHeaderAction } from '@utils/embeddedUrlSync';
import { buildConfiguratorPath, isConfiguratorPath } from '@utils';

const LANG_OPTIONS = [
  { label: 'Italiano', value: 'it' },
  { label: 'English', value: 'en' },
];

// Same markup / variants as the standalone header below (Box "header", Grid
// "header", Flex "utility_bar"/"user_bar", Logo, Button "outline"/"icon"), so the
// sizing and paddings are identical. Only the behaviour differs: inside the
// storefront iframe every control is forwarded to the host store via postMessage
// (the real Shopify header is hidden there — a header element over the iframe is
// what triggers the iOS cold-load viewport shift).
const EmbeddedHeader = () => {
  return (
    <Box variant="header" asChild>
      <header>
        <Container>
          <Grid variant="header">
            <Flex variant="utility_bar">
              <button
                type="button"
                aria-label="Open search"
                onClick={() => postEmbeddedHeaderAction('search')}
                className="flex items-center justify-center"
              >
                <IoIosSearch aria-hidden="true" className="size-5 text-primary-10" />
              </button>
              <AtomSelect options={LANG_OPTIONS} value={LANG_OPTIONS[0]} onChange={() => postEmbeddedHeaderAction('menu')} variant="leng_switcher" />
            </Flex>

            <button type="button" aria-label="Home" className="flex items-center justify-center" onClick={() => postEmbeddedHeaderAction('home')}>
              <AtomImage src="/svg/logo_full.svg" alt="Realize" variant="logo_full" priority />
            </button>

            <Flex variant="user_bar">
              <Button variant="outline" size="icon" aria-label="Account" onClick={() => postEmbeddedHeaderAction('account')}>
                <UserIcon />
              </Button>
              <Button variant="outline" size="icon" aria-label="Cart" onClick={() => postEmbeddedHeaderAction('cart')}>
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
