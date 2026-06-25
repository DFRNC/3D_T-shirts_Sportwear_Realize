import type { GLTF } from 'three-stdlib';

import type { pbrMapsType } from '@configurator/types';
import type { garmentPbrUvChannelType } from '@types';

import { createFallbackPbrMaps } from './createFallbackPbrMaps';
import { extractGltfPbrMaps } from './extractGltfPbrMaps';

const resolveGltfPbrMaps = (gltf: GLTF, pbrUvChannel: garmentPbrUvChannelType = 1, modelUrl?: string): pbrMapsType => {
  const maps = extractGltfPbrMaps(gltf, pbrUvChannel);
  if (maps) return maps;

  if (modelUrl) {
    console.warn(`[garment-scene] No baked PBR maps in ${modelUrl}; using fallback textures.`);
  }

  return createFallbackPbrMaps(pbrUvChannel);
};

export { resolveGltfPbrMaps };
