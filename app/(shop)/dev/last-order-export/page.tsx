import { notFound } from 'next/navigation';

import { LastOrderExportPage } from '@pages';
import { areDevRoutesEnabled } from '@utils/devRoutes';

export const dynamic = 'force-dynamic';

const LastOrderExport = () => {
  if (!areDevRoutesEnabled()) {
    notFound();
  }

  return <LastOrderExportPage />;
};

export default LastOrderExport;
