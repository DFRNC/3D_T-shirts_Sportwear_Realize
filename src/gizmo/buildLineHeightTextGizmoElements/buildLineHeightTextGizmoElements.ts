import type { garmentConfigType, numberInstanceType, printGizmoElementKindType, printGizmoElementType, testoInstanceType } from '@types';
import { NAME_REFERENCE_FONT_SIZE, NAME_SLOT_COUNT } from '@constants';
import { measureNameGizmoHalf, resolvePartPrintRotation, resolveTextGizmoHalf, resolveTextGizmoMeasureOptions } from '@utils';

const measureCanvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
const measureCtx = measureCanvas?.getContext('2d') ?? null;

interface BuildLineHeightTextGizmoElementsInput {
  kind: Extract<printGizmoElementKindType, 'number' | 'testo'>;
  product: garmentConfigType;
  instances: numberInstanceType[] | testoInstanceType[];
  fontSizeMin: number;
  fontSizeMax: number;
}

const buildLineHeightTextGizmoElements = ({
  kind,
  product,
  instances,
  fontSizeMin,
  fontSizeMax,
}: BuildLineHeightTextGizmoElementsInput): printGizmoElementType[] => {
  const partsById = Object.fromEntries(product.parts.map((part) => [part.id, part]));

  return instances.flatMap((instance) => {
    if (!instance.showGizmo || !instance.text.trim()) return [];

    const slotIndex = instances.slice(0, NAME_SLOT_COUNT).findIndex((item) => item.id === instance.id);
    if (slotIndex < 0) return [];

    const part = partsById[instance.partId];
    if (!part) return [];

    const rawHalf = measureCtx ? measureNameGizmoHalf(instance.text, instance.font, measureCtx, resolveTextGizmoMeasureOptions(instance)) : null;
    if (!rawHalf) return [];

    return [
      {
        kind,
        id: instance.id,
        partId: instance.partId,
        slotIndex,
        meshNames: part.meshNames,
        uv: instance.uv,
        rotation: 0,
        partRotation: resolvePartPrintRotation(part),
        half: resolveTextGizmoHalf(rawHalf, instance),
        scale: instance.fontSize / NAME_REFERENCE_FONT_SIZE,
        fontSize: instance.fontSize,
        fontSizeMin,
        fontSizeMax,
      },
    ];
  });
};

export { buildLineHeightTextGizmoElements };
