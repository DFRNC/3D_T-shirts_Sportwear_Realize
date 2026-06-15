import type { garmentConfigType, logoInstanceType, nameInstanceType, numberInstanceType } from '@types';

interface buildLogoGizmoElementsInputType {
  product: garmentConfigType;
  instances: logoInstanceType[];
}

interface buildNameGizmoElementsInputType {
  product: garmentConfigType;
  instances: nameInstanceType[];
  fontSizeMin: number;
  fontSizeMax: number;
}

interface buildNumberGizmoElementsInputType {
  product: garmentConfigType;
  instances: numberInstanceType[];
  fontSizeMin: number;
  fontSizeMax: number;
}

export type { buildLogoGizmoElementsInputType, buildNameGizmoElementsInputType, buildNumberGizmoElementsInputType };
