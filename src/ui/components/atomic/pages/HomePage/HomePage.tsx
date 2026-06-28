'use client';

import { Container } from '@atoms';
import { CATALOG_PRODUCT_ENTRIES } from '@constants';
import type { homePagePropsType } from '@types';
import { ProductGalleryBlock } from '@molecules';

const resolveCatalogProductRef = (modelId: string | null, handle: string) => {
  const entry = modelId ? CATALOG_PRODUCT_ENTRIES.find((catalogEntry) => catalogEntry.modelId === modelId) : undefined;

  return {
    collection: entry?.collection ?? handle,
    slug: entry?.slug ?? modelId ?? handle,
  };
};

const HomePage = ({ collections }: homePagePropsType) => {
  return (
    <Container className="flex flex-col gap-25 py-12">
      {collections.map(({ id, title, handle, products }) => (
        <ProductGalleryBlock
          key={id}
          title={title}
          items={products.map((product) => {
            const { collection, slug } = resolveCatalogProductRef(product.modelId, product.handle);

            return {
              collection,
              slug,
              alt: product.title,
              previewSrc: product.previewSrc,
              activePreviewSrc: product.activePreviewSrc,
            };
          })}
        />
      ))}
    </Container>
  );
};

export { HomePage };
