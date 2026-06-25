import { resolveHomeCollections } from '@shopify';

import { HomePage } from './HomePage';

const HomePageLoader = async () => {
  const collections = await resolveHomeCollections();

  return <HomePage collections={collections} />;
};

export { HomePageLoader };
