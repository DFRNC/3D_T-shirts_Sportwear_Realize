import type { Texture } from 'three';

import { canvasToMaskTexture } from '../canvasToMaskTexture';
import { getEmptyPrintTexture } from '../emptyPrintTexture';

const readMaskAlpha = (data: Uint8ClampedArray, index: number) => Math.max(data[index], data[index + 1], data[index + 2], data[index + 3]);

const resolveMaskImage = (texture: Texture): { image: CanvasImageSource; width: number; height: number } | null => {
  const image = texture.image as CanvasImageSource | undefined;
  if (!image) return null;

  const width = 'naturalWidth' in image && image.naturalWidth ? image.naturalWidth : 'width' in image ? Number(image.width) : 0;
  const height = 'naturalHeight' in image && image.naturalHeight ? image.naturalHeight : 'height' in image ? Number(image.height) : 0;

  if (!width || !height) return null;

  return { image, width, height };
};

const packPatternMaskChannels = (mask0: Texture, mask1: Texture, targetCanvas?: HTMLCanvasElement, targetTexture?: Texture | null): Texture => {
  const source0 = resolveMaskImage(mask0);
  const source1 = resolveMaskImage(mask1);

  if (!source0 || !source1) {
    return getEmptyPrintTexture();
  }

  const { width, height } = source0;
  const scratch0 = document.createElement('canvas');
  const scratch1 = document.createElement('canvas');
  scratch0.width = width;
  scratch0.height = height;
  scratch1.width = width;
  scratch1.height = height;

  const ctx0 = scratch0.getContext('2d', { willReadFrequently: true });
  const ctx1 = scratch1.getContext('2d', { willReadFrequently: true });
  if (!ctx0 || !ctx1) return getEmptyPrintTexture();

  ctx0.clearRect(0, 0, width, height);
  ctx1.clearRect(0, 0, width, height);
  ctx0.drawImage(source0.image, 0, 0, width, height);
  ctx1.drawImage(source1.image, 0, 0, width, height);

  const data0 = ctx0.getImageData(0, 0, width, height);
  const data1 = ctx1.getImageData(0, 0, width, height);
  const canvas = targetCanvas ?? document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const outCtx = canvas.getContext('2d', { willReadFrequently: true });
  if (!outCtx) return getEmptyPrintTexture();

  const packed = outCtx.createImageData(width, height);

  for (let index = 0; index < data0.data.length; index += 4) {
    packed.data[index] = readMaskAlpha(data0.data, index);
    packed.data[index + 1] = readMaskAlpha(data1.data, index);
    packed.data[index + 2] = 0;
    packed.data[index + 3] = 255;
  }

  outCtx.putImageData(packed, 0, 0);

  if (targetTexture) {
    targetTexture.image = canvas;
    targetTexture.needsUpdate = true;
    return targetTexture;
  }

  return canvasToMaskTexture(canvas);
};

export { packPatternMaskChannels };
