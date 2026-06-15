import type { styleIdType } from '@types';

interface checkoutLineRowType {
  id: string;
  size: string;
  name: string;
  number: string;
  testoTexts: string[];
  quantity: number;
}

interface checkoutRowPresetType {
  size: string;
  name: string;
  number: string;
  testoTexts: string[];
}

interface checkoutProductType {
  cartItemId: string;
  styleId: styleIdType;
  productIndex: number;
  rowPreset: checkoutRowPresetType;
  rows: checkoutLineRowType[];
}

type checkoutLineRowPatchType = Partial<Pick<checkoutLineRowType, 'size' | 'name' | 'number' | 'quantity'>> & {
  testoTextIndex?: number;
  testoText?: string;
};

interface checkoutPrintAvailabilityType {
  hasName: boolean;
  hasNumber: boolean;
  hasTesto: boolean;
}

export type { checkoutLineRowPatchType, checkoutLineRowType, checkoutPrintAvailabilityType, checkoutProductType, checkoutRowPresetType };
