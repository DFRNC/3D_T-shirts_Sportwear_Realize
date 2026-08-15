import { HomePage } from '@pages';
import { fetchOrderById, resolveHomeCollectionSummaries } from '@shopify';

const logTestOrderById = async () => {
  try {
    const order = await fetchOrderById('7837277028680');
    console.log('[HomePageLoader] Order 7837277028680 data:', JSON.stringify(order, null, 2));
  } catch (error: unknown) {
    console.error('[HomePageLoader] Failed to fetch order 7837277028680.', error);
  }
};

const HomePageLoader = async () => {
  const collections = await resolveHomeCollectionSummaries();
  await logTestOrderById();

  return <HomePage collections={collections} />;
};

export { HomePageLoader };