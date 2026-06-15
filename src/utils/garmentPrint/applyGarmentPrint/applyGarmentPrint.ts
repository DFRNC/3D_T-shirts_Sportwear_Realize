import { Color, type MeshStandardMaterial, type Texture } from 'three';

import type { garmentPrintStateType, patternColorPairType, patternMaskPairType } from '@types';

import { getEmptyPrintTexture } from '../emptyPrintTexture';

const emptyMaskPair = (): patternMaskPairType => {
  const empty = getEmptyPrintTexture();
  return [empty, empty];
};

const applyGarmentPrint = (material: MeshStandardMaterial, state: garmentPrintStateType) => {
  material.userData.garmentPrintState = state;

  const logosUniform = material.userData.uDefaultLogosUniform as { value: Texture } | undefined;
  if (logosUniform) logosUniform.value = state.defaultLogos;

  const maskUniform = material.userData.uPatternMaskUniform as { value: Texture } | undefined;
  if (maskUniform) maskUniform.value = state.patternMask;

  applyGarmentPatternTints(material, state.patternColors, state.patternOpacity);
};

const applyGarmentPatternTints = (material: MeshStandardMaterial, patternColors: patternColorPairType, patternOpacity: number) => {
  const state = material.userData.garmentPrintState as garmentPrintStateType | undefined;
  if (state) {
    material.userData.garmentPrintState = { ...state, patternColors, patternOpacity };
  }

  const color0Uniform = material.userData.uPatternColor0Uniform as { value: Color } | undefined;
  if (color0Uniform) color0Uniform.value.set(patternColors[0]);

  const color1Uniform = material.userData.uPatternColor1Uniform as { value: Color } | undefined;
  if (color1Uniform) color1Uniform.value.set(patternColors[1]);

  const opacityUniform = material.userData.uPatternOpacityUniform as { value: number } | undefined;
  if (opacityUniform) opacityUniform.value = patternOpacity;
};

export { applyGarmentPatternTints, applyGarmentPrint, emptyMaskPair };
