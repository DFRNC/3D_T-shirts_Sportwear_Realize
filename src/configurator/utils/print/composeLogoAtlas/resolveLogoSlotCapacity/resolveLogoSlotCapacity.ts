import { LOGO_SHADER_SLOT_COUNT, LOGO_SLOT_CAPACITY_STEPS, LOGO_SLOT_COUNT } from '@configurator/constants';

const resolveLogoSlotCapacity = (instanceCount: number): number => {
  const required = Math.max(instanceCount, LOGO_SLOT_COUNT);
  const step = LOGO_SLOT_CAPACITY_STEPS.find((capacity) => capacity >= required);
  if (step) return step;

  const largestStep = LOGO_SLOT_CAPACITY_STEPS[LOGO_SLOT_CAPACITY_STEPS.length - 1];
  return Math.ceil(required / largestStep) * largestStep;
};

const resolveLogoStampGrid = (capacity: number): number => Math.max(1, Math.ceil(Math.sqrt(capacity)));

// Number of logo slots the garment fragment shader compiles. Sized to the logos
// actually in use (rounded up to an atlas-grid step) so garments with few / no
// logos don't blow the mobile MAX_FRAGMENT_UNIFORM_VECTORS budget; it grows
// (and the program recompiles) as more logos are added, capped at the max.
const resolveLogoShaderSlotCount = (instanceCount: number): number =>
  Math.min(LOGO_SHADER_SLOT_COUNT, resolveLogoSlotCapacity(instanceCount));

// The stamp atlas grid must stay fixed regardless of logo count — retiling it
// would move every existing logo's cell. Always the full LOGO_SHADER_SLOT_COUNT
// grid (4x4).
const resolveLogoStampAtlasGrid = (): number => resolveLogoStampGrid(LOGO_SHADER_SLOT_COUNT);

export { resolveLogoShaderSlotCount, resolveLogoSlotCapacity, resolveLogoStampAtlasGrid, resolveLogoStampGrid };
