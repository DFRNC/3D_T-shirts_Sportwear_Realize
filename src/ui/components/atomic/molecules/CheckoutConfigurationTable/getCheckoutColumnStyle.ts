import type { Column } from '@tanstack/react-table';
import type { CSSProperties } from 'react';

import type { checkoutLineRowType } from '@types';

const getCheckoutColumnStyle = (column: Column<checkoutLineRowType, unknown>): CSSProperties => {
  const { minSize, maxSize, meta } = column.columnDef;

  if (meta?.grow) {
    return { minWidth: minSize ?? column.getSize() };
  }

  return {
    width: column.getSize(),
    minWidth: minSize,
    maxWidth: maxSize,
  };
};

export { getCheckoutColumnStyle };
