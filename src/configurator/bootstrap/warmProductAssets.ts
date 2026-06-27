import type { garmentConfigType } from '@types';
import { resolveModelUrl, warmDefaultDesignTextures, warmGltfModelCache, warmProductModelFile } from '@configurator/utils';


/** Background warm-up of model file, GLTF cache, and default design textures. */
const warmProductAssets = (product: garmentConfigType) => {
  warmProductModelFile(product);
  warmDefaultDesignTextures(product);
  warmGltfModelCache(resolveModelUrl(product));
};

export { warmProductAssets };
