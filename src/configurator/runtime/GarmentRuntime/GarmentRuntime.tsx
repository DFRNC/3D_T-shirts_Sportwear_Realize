'use client';

import { memo } from 'react';

import { useGarmentLogoTextures, useGarmentNameTextures, useSyncGarmentMaterials } from '@configurator/hooks';

import { PrintGizmoLayer } from '../PrintGizmoLayer';

/** R3F side-effect runtime: appearance, text/logo textures, print gizmo interaction. */
const GarmentRuntime = memo(() => {
  useSyncGarmentMaterials();
  useGarmentNameTextures();
  useGarmentLogoTextures();

  return <PrintGizmoLayer />;
});

GarmentRuntime.displayName = 'GarmentRuntime';

export { GarmentRuntime };
