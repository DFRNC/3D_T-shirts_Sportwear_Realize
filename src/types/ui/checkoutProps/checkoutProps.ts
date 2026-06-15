import type { ReactNode } from 'react';

import type { checkoutLineRowPatchType, checkoutLineRowType, checkoutProductType } from '../../checkout';

interface checkoutProductCardPropsType {
  product: checkoutProductType;
}

interface checkoutConfigurationTablePropsType {
  cartItemId: string;
  rows: checkoutProductType['rows'];
}

interface checkoutConfigurationTableColumnHandlersType {
  onPatchRow: (rowId: string, patch: checkoutLineRowPatchType) => void;
  onRemoveRow: (rowId: string) => void;
}

interface checkoutConfigurationTableCellContextType {
  row: checkoutLineRowType;
  index: number;
}

interface checkoutConfigurationTableColumnType {
  id: string;
  header: string;
  size: number;
  minSize: number;
  maxSize?: number;
  meta?: {
    cellClassName?: string;
    grow?: boolean;
  };
  cell: (context: checkoutConfigurationTableCellContextType) => ReactNode;
}

interface checkoutQuantityStepperPropsType {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

interface checkoutSizePopoverPropsType {
  value: string;
  onChange: (size: string) => void;
}

interface checkoutTableEditableCellPropsType {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  formatValue?: (value: string) => string;
  inputMode?: 'text' | 'numeric';
  maxLength?: number;
}

export type {
  checkoutConfigurationTableCellContextType,
  checkoutConfigurationTableColumnHandlersType,
  checkoutConfigurationTableColumnType,
  checkoutConfigurationTablePropsType,
  checkoutProductCardPropsType,
  checkoutQuantityStepperPropsType,
  checkoutSizePopoverPropsType,
  checkoutTableEditableCellPropsType,
};
