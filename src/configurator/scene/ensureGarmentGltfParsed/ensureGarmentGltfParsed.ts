import { useGLTF } from '@react-three/drei';
import { GLTFLoader, type GLTF } from 'three-stdlib';
import { peek } from 'suspend-react';

import type { garmentConfigType } from '@types';

import { resolveModelUrl } from '../../utils/resolveModelUrl';
import { yieldToMain } from '../../utils/yieldToMain/yieldToMain';

/** Baked GLBs in /public/models do not use Draco or Meshopt — skip decoder init on first parse. */
const GLTF_USE_DRACO = false;
const GLTF_USE_MESHOPT = false;

const GLTF_PARSE_TIMEOUT_MS = 60_000;

const getGltfCacheKeys = (modelUrl: string) => [GLTFLoader, modelUrl] as [typeof GLTFLoader, string];

const readCachedGarmentGltf = (modelUrl: string): GLTF | null => {
  const cached = peek(getGltfCacheKeys(modelUrl)) as GLTF | GLTF[] | undefined;
  if (!cached) return null;
  return Array.isArray(cached) ? (cached[0] ?? null) : cached;
};

const isGarmentGltfParsed = (modelUrl: string): boolean => readCachedGarmentGltf(modelUrl) != null;

const preloadGarmentGltf = (modelUrl: string) => {
  useGLTF.preload(modelUrl, GLTF_USE_DRACO, GLTF_USE_MESHOPT);
};

const ensureGarmentGltfParsed = async (modelUrl: string): Promise<GLTF> => {
  const cached = readCachedGarmentGltf(modelUrl);
  if (cached) return cached;

  preloadGarmentGltf(modelUrl);

  const startedAt = performance.now();

  while (!isGarmentGltfParsed(modelUrl)) {
    if (performance.now() - startedAt > GLTF_PARSE_TIMEOUT_MS) {
      throw new Error(`Timed out while parsing garment GLTF: ${modelUrl}`);
    }

    await yieldToMain();
  }

  const parsed = readCachedGarmentGltf(modelUrl);
  if (!parsed) {
    throw new Error(`Garment GLTF missing from cache after parse: ${modelUrl}`);
  }

  return parsed;
};

const ensureGarmentProductGltfParsed = async (product: garmentConfigType) => ensureGarmentGltfParsed(resolveModelUrl(product));

export {
  GLTF_USE_DRACO,
  GLTF_USE_MESHOPT,
  ensureGarmentGltfParsed,
  ensureGarmentProductGltfParsed,
  isGarmentGltfParsed,
  preloadGarmentGltf,
  readCachedGarmentGltf,
};
