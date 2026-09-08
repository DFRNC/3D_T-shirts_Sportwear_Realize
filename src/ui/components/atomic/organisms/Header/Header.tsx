'use client';

import { usePathname } from 'next/navigation';

import { AccountGlyph, CartGlyph, HamburgerGlyph, SearchGlyph } from '@organisms/Header/HeaderIcons';
import { LocalizationDropdown } from '@organisms/Header/LocalizationDropdown';
import { AtomImage, Container, Flex, Grid } from '@atoms';
import { useAppNavigate, useMagnet } from '@hooks';
import { useEmbedded } from '@providers';
import { useConfigurationCart, useEmbeddedStoreHeader } from '@store';
import { postEmbeddedHeaderAction } from '@utils/embeddedUrlSync';
import { buildConfiguratorPath, isConfiguratorPath } from '@utils';

const STORE_ORIGIN = 'https://realizesport.com';

const LANGUAGES = [
  { label: 'Italiano', value: 'it' },
  { label: 'English', value: 'en' },
];

const MagnetButton = ({ label, onClick, children, className }: { label: string; onClick: () => void; children: React.ReactNode; className?: string }) => {
  const ref = useMagnet<HTMLButtonElement>(10);
  return (
    <button ref={ref} type="button" aria-label={label} onClick={onClick} className={`flex items-center justify-center ${className ?? ''}`}>
      {children}
    </button>
  );
};

// One header, one markup, one look — standalone and embedded. Sizing is 1:1 with
// the Shopify header (theme: section--padding 14px block, icon.liquid 24px icons,
// header--center grid). Only the behaviour differs: inside the storefront iframe
// the real Shopify header is hidden (a header element over the iframe triggers the
// iOS cold-load viewport shift), so every control is forwarded to the host store
// via postMessage.
const Header = () => {
  const { embedded } = useEmbedded();
  const { toAppPath } = useAppNavigate();
  const pathname = usePathname();
  const activeItem = useConfigurationCart((state) => state.items.find((item) => item.id === state.activeItemId) ?? state.items[0]);
  const storeHeader = useEmbeddedStoreHeader((state) => state.data);

  const logoRef = useMagnet<HTMLButtonElement>(6);

  const language = storeHeader?.language ?? 'Italiano';

  const isOnConfigurator = isConfiguratorPath(pathname);
  const logoHref = toAppPath(isOnConfigurator || !activeItem?.collectionHandle ? '/' : buildConfiguratorPath(activeItem.collectionHandle, activeItem.slug));

  const go = (url: string) => {
    if (typeof window !== 'undefined') window.location.assign(url);
  };

  const action = {
    home: () => (embedded ? postEmbeddedHeaderAction('home') : go(logoHref)),
    search: () => (embedded ? postEmbeddedHeaderAction('search') : go(`${STORE_ORIGIN}/search`)),
    menu: () => (embedded ? postEmbeddedHeaderAction('menu') : undefined),
    account: () => (embedded ? postEmbeddedHeaderAction('account') : go(`${STORE_ORIGIN}/account`)),
    cart: () => (embedded ? postEmbeddedHeaderAction('cart') : go(`${STORE_ORIGIN}/cart`)),
    language: () => (embedded ? postEmbeddedHeaderAction('menu') : undefined),
  };

  return (
    <header className="w-full bg-white py-3.5">
      <Container>
        <Grid variant="header">
          <Flex variant="utility_bar">
            <MagnetButton label="Menu" onClick={action.menu} className="lg:hidden">
              <HamburgerGlyph />
            </MagnetButton>
            <MagnetButton label="Open search" onClick={action.search} className="max-lg:hidden">
              <SearchGlyph />
            </MagnetButton>
            <div className="max-lg:hidden">
              <LocalizationDropdown languages={LANGUAGES} current={language} onSelect={action.language} />
            </div>
          </Flex>

          <button ref={logoRef} type="button" aria-label="Home" className="flex items-center justify-center" onClick={action.home}>
            <AtomImage src="/svg/logo_full.svg" alt="Realize" variant="logo_full" priority />
          </button>

          <Flex variant="user_bar">
            <MagnetButton label="Open search" onClick={action.search} className="lg:hidden">
              <SearchGlyph />
            </MagnetButton>
            <MagnetButton label="Account" onClick={action.account}>
              <AccountGlyph />
            </MagnetButton>
            <MagnetButton label="Cart" onClick={action.cart}>
              <CartGlyph />
            </MagnetButton>
          </Flex>
        </Grid>
      </Container>
    </header>
  );
};

export { Header };
