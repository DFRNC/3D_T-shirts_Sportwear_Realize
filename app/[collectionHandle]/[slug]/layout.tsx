import { notFound } from 'next/navigation';

import type { childrenType } from '@types';
import { ConfiguratorLayoutTemplate } from '@templates';
import { ConfiguratorCatalogShell } from '@providers/configuratorCatalogProvider/ConfiguratorCatalogShell';
import { resolveConfiguratorProduct } from '@shopify';

type configuratorLayoutPropsType = childrenType & {
  params: Promise<{ collectionHandle: string; slug: string }>;
};

const ConfiguratorLayout = async ({ children, params }: configuratorLayoutPropsType) => {
  const { collectionHandle, slug } = await params;
  const product = await resolveConfiguratorProduct(slug, collectionHandle);

  // Without this an unknown slug rendered a 200 page around the default garment, so typos and stale
  // links looked like a working product instead of a missing one.
  if (!product) {
    notFound();
  }

  return (
    <ConfiguratorCatalogShell>
      <ConfiguratorLayoutTemplate collectionHandle={collectionHandle} slug={slug} product={product}>
        {children}
      </ConfiguratorLayoutTemplate>
    </ConfiguratorCatalogShell>
  );
};

export default ConfiguratorLayout;
