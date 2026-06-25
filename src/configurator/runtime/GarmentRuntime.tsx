'use client';

import { memo } from 'react';

import {
  useGarmentAppearance,
  useGarmentLogoTextures,
  useGarmentNameTextures,
} from '@configurator/hooks';

import { PrintGizmoLayer } from './PrintGizmoLayer/PrintGizmoLayer';

/** R3F side-effect runtime: appearance, text/logo textures, print gizmo interaction. */
const GarmentRuntime = memo(() => {
  useGarmentAppearance();
  useGarmentNameTextures();
  useGarmentLogoTextures();

  return <PrintGizmoLayer />;
});

GarmentRuntime.displayName = 'GarmentRuntime';

export { GarmentRuntime };
