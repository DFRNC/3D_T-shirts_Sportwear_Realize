import { notFound } from 'next/navigation';

import { OrderCuttingExportPreviewPage } from '@pages';
import { areDevRoutesEnabled } from '@utils/devRoutes';

// Dynamic so the guard is evaluated per request rather than frozen at build time.
export const dynamic = 'force-dynamic';

const OrderCuttingExportPreview = () => {
  if (!areDevRoutesEnabled()) {
    notFound();
  }

  return <OrderCuttingExportPreviewPage />;
};

export default OrderCuttingExportPreview;
