import type { garmentConfigType } from '@types';

type garmentPrintFeatureFlagsType = {
  useName: boolean;
  useNumber: boolean;
  useLogo: boolean;
  useTesto: boolean;
  logoSlotCount: number;
};

// logoSlotCount is the number of user logo slots the shader must carry. It
// starts at 0 (no products define logoPositions — logos are added by the user
// at runtime), which drops the whole ~190-uniform-vector logo block from the
// fragment shader. Adding a logo bumps this and recompiles the program with
// exactly the slots needed, keeping garments under MAX_FRAGMENT_UNIFORM_VECTORS
// on mobile GPUs (256) while still allowing the full logo count.
const resolveGarmentPrintFeatureFlags = (product: garmentConfigType, logoSlotCount = 0): garmentPrintFeatureFlagsType => ({
  useName: (product.namePositions?.length ?? 0) > 0,
  useNumber: (product.numberPositions?.length ?? 0) > 0,
  useLogo: logoSlotCount > 0,
  useTesto: (product.testoPositions?.length ?? 0) > 0,
  logoSlotCount,
});

export { resolveGarmentPrintFeatureFlags };
export type { garmentPrintFeatureFlagsType };
