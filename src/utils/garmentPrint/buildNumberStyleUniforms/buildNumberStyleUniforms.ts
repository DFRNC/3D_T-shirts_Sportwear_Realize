import type { garmentPartConfigType, nameSlotFloat4Type, nameStyleUniformsType, numberInstanceType, stampPixelSizeType } from '@types';
import { NAME_SLOT_COUNT } from '@constants';

import { buildNameStyleUniforms } from '../buildNameStyleUniforms';

const buildNumberStyleUniforms = (
  instances: numberInstanceType[],
  parts: garmentPartConfigType[],
  stampSize: stampPixelSizeType,
  meshPartId: string,
): nameStyleUniformsType => {
  const base = buildNameStyleUniforms(instances, parts, stampSize, meshPartId);
  const lineHeight: nameSlotFloat4Type = [1, 1, 1, 1];

  instances.slice(0, NAME_SLOT_COUNT).forEach((instance, index) => {
    if (instance.partId !== meshPartId) return;
    lineHeight[index] = instance.lineHeight ?? 1.5;
  });

  return { ...base, lineHeight };
};

export { buildNumberStyleUniforms };
