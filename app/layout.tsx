import '@configurator/bootstrap/clientConsoleSuppression';

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import '@styles';

import { anton, bebasNeue, blackOpsOne, inter, oswald, russoOne } from '@fonts';
import { EmbeddedProvider } from '@providers';
import type { childrenType } from '@types';

import { cn } from '@utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

/**
 * Each entry is a class that declares one `--font-*` custom property (see @fonts/fonts.css).
 *
 * Kept out of `cn()` on purpose: tailwind-merge reads `font-inter`, `font-oswald` and friends as
 * competing font-family utilities and keeps only the last one, so routing them through `cn` left
 * five of the six custom properties undefined on `<html>`.
 */
const fontVariableClassNames = [
  inter.variable,
  geist.variable,
  oswald.variable,
  bebasNeue.variable,
  anton.variable,
  russoOne.variable,
  blackOpsOne.variable,
].join(' ');

export const metadata: Metadata = {
  title: {
    default: 'Realize — Configuratore 3D per abbigliamento sportivo',
    template: '%s | Realize',
  },
  description:
    'Configura il tuo completo sportivo in 3D: colori, design, sfumature, nome, numero e logo. Anteprima in tempo reale e ordine diretto. Made by YOU. Worn your way.',
  applicationName: 'Realize',
  openGraph: {
    type: 'website',
    siteName: 'Realize',
    locale: 'it_IT',
    title: 'Realize — Configuratore 3D per abbigliamento sportivo',
    description: 'Configura il tuo completo sportivo in 3D e ordinalo direttamente. Made by YOU. Worn your way.',
  },
  // The configurator is a storefront tool, not indexable content, and each product URL renders the
  // same shell — keep it out of search results rather than competing with the shop's own pages.
  robots: { index: false, follow: true },
};

const RootLayout = ({ children }: childrenType) => {
  return (
    <html lang="it" className={`${cn('min-h-full', 'antialiased', 'bg-white', 'font-sans')} ${fontVariableClassNames}`}>
      <body className="min-h-full">
        <EmbeddedProvider>{children}</EmbeddedProvider>
      </body>
    </html>
  );
};

export default RootLayout;
