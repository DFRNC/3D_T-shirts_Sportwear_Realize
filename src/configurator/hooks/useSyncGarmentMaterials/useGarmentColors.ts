'use client';

import { useCallback, useMemo } from 'react';

import { useGarmentMaterialRegistry } from '@configurator/providers';
import type { garmentPrintStateType } from '@configurator/types';
import { useConfiguratorProduct, useGarmentColor, useGarmentDesign } from '@store';
import { emptyMaskPair } from '@configurator/utils';

import { applyPartColors, applyPatternTints, applyPrintState } from './syncGarmentMaterialState';
import { buildPatternColors } from './buildPatternColors';
import type { useSyncGarmentMaterialsRefs } from './useSyncGarmentMaterialsRefs';

type syncGarmentMaterialsRefsReturnType = ReturnType<typeof useSyncGarmentMaterialsRefs>;

type useGarmentColorsOptionsType = {
  refs: Pick<syncGarmentMaterialsRefsReturnType, 'logosTextureRef' | 'maskTexturesRef' | 'pendingFrameReapplyRef'>;
  invalidate: () => void;
};

const useGarmentColors = ({ refs: { logosTextureRef, maskTexturesRef, pendingFrameReapplyRef }, invalidate }: useGarmentColorsOptionsType) => {
  const product = useConfiguratorProduct((state) => state.product);
  const partIds = useMemo(() => product.parts.map((part) => part.id), [product.parts]);
  const byPart = useGarmentColor((state) => state.byPart);
  const gradientsByPart = useGarmentColor((state) => state.gradientsByPart);
  const productPath = useGarmentDesign((state) => state.productPath);
  const activePattern = useGarmentDesign((state) => state.activePattern);
  const patternColors = useGarmentDesign((state) => state.patternColors);
  const designLayerColors = useGarmentDesign((state) => state.designLayerColors);
  const activeOpacity = useGarmentDesign((state) => state.activeOpacity);
  const { getMaterials, hasMaterialsForParts } = useGarmentMaterialRegistry();

  const applyContext = useMemo(
    () => ({ product, byPart, gradientsByPart, getMaterials, invalidate }),
    [byPart, getMaterials, gradientsByPart, invalidate, product],
  );

  const buildPrintState = useCallback((): garmentPrintStateType => {
    return {
      defaultLogos: logosTextureRef.current ?? emptyMaskPair()[0],
      patternMasks: maskTexturesRef.current,
      patternColors: buildPatternColors(activePattern, patternColors, designLayerColors),
      patternOpacity: activeOpacity,
    };
  }, [activeOpacity, activePattern, designLayerColors, logosTextureRef, maskTexturesRef, patternColors]);

  const buildEmptyPrintState = useCallback((): garmentPrintStateType => {
    const emptyMasks = emptyMaskPair();
    return {
      defaultLogos: emptyMasks[0],
      patternMasks: emptyMasks,
      patternColors: buildPatternColors(null, {}, designLayerColors),
      patternOpacity: 0,
    };
  }, [designLayerColors]);

  const reapplyAppearanceCore = useCallback(() => {
    if (!hasMaterialsForParts(partIds)) {
      pendingFrameReapplyRef.current = true;
      return;
    }

    pendingFrameReapplyRef.current = false;
    applyPartColors(applyContext);

    if (productPath !== product.path) return;

    applyPatternTints(applyContext, buildPatternColors(activePattern, patternColors, designLayerColors), activeOpacity);
    applyPrintState(applyContext, buildPrintState(), buildEmptyPrintState());
  }, [
    activeOpacity,
    activePattern,
    applyContext,
    buildEmptyPrintState,
    buildPrintState,
    designLayerColors,
    hasMaterialsForParts,
    partIds,
    patternColors,
    pendingFrameReapplyRef,
    product.path,
    productPath,
  ]);

  return {
    product,
    partIds,
    productPath,
    activePattern,
    activePatternKey: activePattern?.key ?? null,
    activeOpacity,
    byPart,
    gradientsByPart,
    patternColors,
    reapplyAppearanceCore,
  };
};

export { useGarmentColors };
