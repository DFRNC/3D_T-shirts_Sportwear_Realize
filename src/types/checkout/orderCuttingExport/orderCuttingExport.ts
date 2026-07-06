import type { configuratorStepValueType } from '@configurator/types';
import type { cartItemConfigurationType, checkoutProductType, modelIdType, uvBoundsType } from '@types';

type orderCuttingExportComposeKindType = 'design-layer' | 'design-mix' | 'color-atlas';

/** @deprecated Use orderCuttingExportComposeKindType */
type orderCuttingExportDesignComposeKindType = orderCuttingExportComposeKindType;

interface orderCuttingExportDesignLayerSpecType {
  maskSrc: string;
  color: string;
}

interface orderCuttingExportColorPartSpecType {
  label: string;
  color: string;
  meshNames: string[];
}

interface orderCuttingExportDownloadFileType {
  key: string;
  label: string;
  fileName: string;
  downloadUrl: string;
  previewSrc?: string;
  composeKind?: orderCuttingExportComposeKindType;
  maskSrc?: string;
  color?: string;
  opacity?: number;
  layers?: orderCuttingExportDesignLayerSpecType[];
  uvBounds?: uvBoundsType;
  colorParts?: orderCuttingExportColorPartSpecType[];
  atlasWidth?: number;
  atlasHeight?: number;
  modelSrc?: string;
}

interface orderCuttingExportStepDetailType {
  label: string;
  value: string;
}

interface orderCuttingExportConfigurationStepType {
  step: number;
  key: configuratorStepValueType;
  title: string;
  isConfigured: boolean;
  emptyMessage: string;
  details: orderCuttingExportStepDetailType[];
  downloadFiles: orderCuttingExportDownloadFileType[];
}

interface orderCuttingExportArticleType {
  modelLabel: string;
  size: string;
  quantity: number;
  jerseyName: string;
  number: string;
}

interface orderCuttingExportPrintAtlasType {
  width: number;
  height: number;
}

interface orderCuttingExportProductType {
  cartItemId: string;
  productTitle: string;
  modelId: modelIdType;
  modelLabel: string;
  printAtlas: orderCuttingExportPrintAtlasType;
  articles: orderCuttingExportArticleType[];
  steps: orderCuttingExportConfigurationStepType[];
}

interface orderCuttingExportCustomerType {
  company: string;
  vatOrTaxCode: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  email: string;
  pec: string;
}

interface orderCuttingExportType {
  orderNumber: string;
  orderDate: string;
  customer: orderCuttingExportCustomerType;
  products: orderCuttingExportProductType[];
}

interface buildOrderCuttingExportParamsType {
  products: checkoutProductType[];
  configurations: Record<string, cartItemConfigurationType>;
  orderNumber?: string;
  orderDate?: string;
  customer?: Partial<orderCuttingExportCustomerType>;
}

interface buildOrderCuttingExportPreviewParamsType {
  modelId?: modelIdType;
  patternIndex?: number;
}

export type {
  buildOrderCuttingExportParamsType,
  buildOrderCuttingExportPreviewParamsType,
  orderCuttingExportArticleType,
  orderCuttingExportColorPartSpecType,
  orderCuttingExportComposeKindType,
  orderCuttingExportConfigurationStepType,
  orderCuttingExportCustomerType,
  orderCuttingExportDesignComposeKindType,
  orderCuttingExportDesignLayerSpecType,
  orderCuttingExportDownloadFileType,
  orderCuttingExportPrintAtlasType,
  orderCuttingExportProductType,
  orderCuttingExportStepDetailType,
  orderCuttingExportType,
};
