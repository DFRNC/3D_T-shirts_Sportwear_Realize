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

interface checkoutQuantityStepperPropsType {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

interface checkoutSizePopoverPropsType {
  value: string;
  onChange: (size: string) => void;
}

export type {
  checkoutConfigurationTableColumnHandlersType,
  checkoutConfigurationTablePropsType,
  checkoutProductCardPropsType,
  checkoutQuantityStepperPropsType,
  checkoutSizePopoverPropsType,
};
