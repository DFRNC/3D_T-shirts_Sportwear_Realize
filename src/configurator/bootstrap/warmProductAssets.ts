import type { garmentConfigType } from '@types';

import { warmGltfModelCache } from '../utils/loading/gltfModelCache';
import { resolveModelUrl } from '../utils/resolveModelUrl';
import { warmDefaultDesignTextures } from '../utils/loading/warmDefaultDesignTextures';
import { warmProductModelFile } from '../utils/loading/warmProductModelFile';

/** Background warm-up of model file, GLTF cache, and default design textures. */
const warmProductAssets = (product: garmentConfigType) => {
  warmProductModelFile(product);
  warmDefaultDesignTextures(product);
  warmGltfModelCache(resolveModelUrl(product));
};

export { warmProductAssets };
