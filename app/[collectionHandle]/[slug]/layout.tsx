import { headers } from 'next/headers';

import type { childrenType } from '@types';
import { ConfiguratorLayoutTemplate } from '@templates';
import { ConfiguratorCatalogShell } from '@providers/configuratorCatalogProvider/ConfiguratorCatalogShell';
import { resolveConfiguratorProduct } from '@shopify';

export const dynamic = 'force-dynamic';

type configuratorLayoutPropsType = childrenType & {
  params: Promise<{ collectionHandle: string; slug: string }>;
};

const ConfiguratorLayout = async ({ children, params }: configuratorLayoutPropsType) => {
  const { collectionHandle, slug } = await params;
  const product = await resolveConfiguratorProduct(slug, collectionHandle);

  // The browser sends Sec-Fetch-Dest: iframe for a cross-origin embed. Deciding here,
  // on the server, keeps the standalone header out of the SSR HTML when embedded, so
  // there is no first-paint flash of it before hydration removes it in the iframe.
  const embedded = (await headers()).get('sec-fetch-dest') === 'iframe';

  return (
    <ConfiguratorCatalogShell>
      <ConfiguratorLayoutTemplate collectionHandle={collectionHandle} slug={slug} product={product} embedded={embedded}>
        {children}
      </ConfiguratorLayoutTemplate>
    </ConfiguratorCatalogShell>
  );
};

export default ConfiguratorLayout;
