'use client';

import { useGarmentTextGizmoUniforms } from './useGarmentTextGizmoUniforms';
import { useGarmentNameTextPrintTextures, useGarmentNumberTextPrintTextures, useGarmentTestoTextPrintTextures } from './useGarmentTextPrintTextures';

/** Syncs name, number, and testo print textures onto garment materials (R3F side-effect hook). */
const useGarmentNameTextures = () => {
  useGarmentNameTextPrintTextures();
  useGarmentNumberTextPrintTextures();
  useGarmentTestoTextPrintTextures();
  useGarmentTextGizmoUniforms();
};

export { useGarmentNameTextures };
