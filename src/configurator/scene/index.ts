'use client';

import { GarmentMeshes } from './GarmentMeshes';
import { GarmentModel } from './GarmentModel';
import { GltfSceneProvider, useGltfScene } from './GltfSceneProvider';
import { GarmentPartMesh } from './GarmentPartMesh';
import { PreserveGltfMesh } from './PreserveGltfMesh';
import { StaticGltfMesh } from './StaticGltfMesh';
import { preloadGarmentScene } from './preloadGarmentScene';
import { resolveGltfPbrMaps } from './resolveGltfPbrMaps';
import { extractGltfPbrMaps } from './extractGltfPbrMaps';
import { resolvePreserveMeshes } from './resolvePreserveMeshes';

export { enrichGltfScene } from './indexGltfSceneNodes';
export {
  extractGltfPbrMaps,
  GarmentMeshes,
  GarmentModel,
  GarmentPartMesh,
  GltfSceneProvider,
  preloadGarmentScene,
  PreserveGltfMesh,
  resolveGltfPbrMaps,
  resolvePreserveMeshes,
  StaticGltfMesh,
  useGltfScene,
};
