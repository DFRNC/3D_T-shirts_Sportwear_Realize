import type { logoInstanceType, nameInstanceType, numberInstanceType, partGradientType, productCollectionIdType, styleIdType, testoInstanceType } from '@types';

interface cartItemType {
  id: string;
  collection: productCollectionIdType;
  slug: string;
  styleId: styleIdType;
  productIndex: number;
}

interface garmentColorSnapshotType {
  byPart: Record<string, string>;
  gradientsByPart: Record<string, partGradientType>;
}

interface garmentDesignSnapshotType {
  activePatternKey: string | null;
  patternColors: Record<string, string>;
  designLayerColors: Record<number, string>;
  activeOpacity: number;
  designOpacity: number;
}

interface garmentNameSnapshotType {
  instances: nameInstanceType[];
  selectedInstanceId: string | null;
}

interface garmentNumberSnapshotType {
  instances: numberInstanceType[];
  selectedInstanceId: string | null;
}

interface garmentTestoSnapshotType {
  instances: testoInstanceType[];
  selectedInstanceId: string | null;
}

interface garmentLogoSnapshotType {
  instances: logoInstanceType[];
  selectedInstanceId: string | null;
}

interface cartItemConfigurationType {
  color: garmentColorSnapshotType;
  design: garmentDesignSnapshotType;
  name: garmentNameSnapshotType;
  number: garmentNumberSnapshotType;
  testo: garmentTestoSnapshotType;
  logo: garmentLogoSnapshotType;
}

export type {
  cartItemType,
  cartItemConfigurationType,
  garmentColorSnapshotType,
  garmentDesignSnapshotType,
  garmentLogoSnapshotType,
  garmentNameSnapshotType,
  garmentNumberSnapshotType,
  garmentTestoSnapshotType,
};
