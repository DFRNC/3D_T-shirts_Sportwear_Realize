
import { Container } from '@atoms';
import { ProductGalleryBlock } from '@molecules';
import type { homePagePropsType } from '@types';

const HomePage = ({ collections }: homePagePropsType) => {
  return (
    <Container className="flex flex-col gap-25 py-12">
      {collections.map((collection) => (
        <ProductGalleryBlock
          key={collection.id}
          title={collection.title}
          items={collection.products.map((product) => ({
            collection: collection.handle,
            slug: product.handle,
            alt: product.title,
            previewSrc: product.previewSrc,
            activePreviewSrc: product.activePreviewSrc,
          }))}
        />
      ))}
    </Container>
  );
};

export { HomePage };
