import type { garmentTextRenderInstanceType, textCanvasDrawOptionsType } from '@types';

import { resolveRotatedGizmoHalf } from '../../composeLogoAtlas/composeLogoPrintAtlas';
import { PRINT_UPLOAD_ROTATION_DEG } from '@constants';

const resolveTextPlacementRotationDeg = (instance: garmentTextRenderInstanceType) =>
  instance.placementRotation !== undefined ? instance.placementRotation : instance.rotation;

const resolveTextContentRotationDeg = (instance: garmentTextRenderInstanceType) => resolveTextPlacementRotationDeg(instance) + PRINT_UPLOAD_ROTATION_DEG;

const resolveTextGizmoMeasureOptions = (instance: garmentTextRenderInstanceType): textCanvasDrawOptionsType & { lineHeight?: number } => ({
  letterSpacing: 'letterSpacing' in instance ? instance.letterSpacing : undefined,
  lineHeight: 'lineHeight' in instance ? instance.lineHeight : undefined,
});

const resolveTextGizmoHalf = (half: { x: number; y: number }, instance: garmentTextRenderInstanceType) =>
  resolveRotatedGizmoHalf(half, resolveTextContentRotationDeg(instance));

export { resolveTextContentRotationDeg, resolveTextGizmoHalf, resolveTextGizmoMeasureOptions };
