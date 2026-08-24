import type { garmentConfigType } from '@types';
import { LOGO_SHADER_SLOT_COUNT } from '@configurator/constants';

type garmentPrintFeatureFlagsType = {
  useName: boolean;
  useNumber: boolean;
  useLogo: boolean;
  useTesto: boolean;
  logoSlotCount: number;
};

const resolveGarmentPrintFeatureFlags = (product: garmentConfigType, logoSlotCount: number = LOGO_SHADER_SLOT_COUNT): garmentPrintFeatureFlagsType => ({
  useName: (product.namePositions?.length ?? 0) > 0,
  useNumber: (product.numberPositions?.length ?? 0) > 0,
  useLogo: true,
  useTesto: (product.testoPositions?.length ?? 0) > 0,
  logoSlotCount,
});

export { resolveGarmentPrintFeatureFlags };
export type { garmentPrintFeatureFlagsType };
