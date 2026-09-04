import { LOGO_SHADER_SLOT_COUNT, LOGO_SLOT_CAPACITY_STEPS, LOGO_SLOT_COUNT } from '@configurator/constants';

const resolveLogoSlotCapacity = (instanceCount: number): number => {
  const required = Math.max(instanceCount, LOGO_SLOT_COUNT);
  const step = LOGO_SLOT_CAPACITY_STEPS.find((capacity) => capacity >= required);
  if (step) return step;

  const largestStep = LOGO_SLOT_CAPACITY_STEPS[LOGO_SLOT_CAPACITY_STEPS.length - 1];
  return Math.ceil(required / largestStep) * largestStep;
};

const resolveLogoStampGrid = (capacity: number): number => Math.max(1, Math.ceil(Math.sqrt(capacity)));

// Size the garment shader's logo arrays to the logos actually in use (rounded
// up to an atlas-grid step), capped at LOGO_SHADER_SLOT_COUNT. Previously this
// was always the max (16), inflating fragment uniform usage past the mobile
// limit even on garments with no logos.
const resolveLogoShaderSlotCount = (instanceCount: number): number =>
  Math.min(LOGO_SHADER_SLOT_COUNT, resolveLogoSlotCapacity(instanceCount));

const resolveLogoStampAtlasGrid = (instanceCount: number): number => resolveLogoStampGrid(resolveLogoShaderSlotCount(instanceCount));

export { resolveLogoShaderSlotCount, resolveLogoSlotCapacity, resolveLogoStampAtlasGrid, resolveLogoStampGrid };
