import { describe, expect, it } from 'vitest';
import { type MeshStandardMaterial, type Texture, Vector2, Vector4 } from 'three';

import { hydrateGarmentLogoUniforms } from '@configurator/utils';

const createStyleState = (scale: number[]) => ({
  stampCellSize: { width: 849, height: 477 },
  anchorUv: scale.map(() => ({ x: 0.4, y: 0.45 })),
  rotation: scale.map(() => 0),
  uploadRotation: scale.map(() => Math.PI / 2),
  partRotation: scale.map(() => 0),
  scale,
  stampSlot: scale.map((_, index) => index),
  slotActive: scale.map((value) => (value < 1 ? 1 : 0)),
  partBounds: scale.map(() => ({ minX: 0, minY: 0, maxX: 1, maxY: 1 })),
});

describe('hydrateGarmentLogoUniforms', () => {
  it('writes style into the new program arrays instead of the previous shader uniforms', () => {
    const previousScale = [1, 1, 1, 1];
    const nextScale = Array.from({ length: 9 }, () => 1);
    const material = {
      userData: {
        uLogoScaleUniform: { value: previousScale },
        garmentLogoStyleState: createStyleState([0.22, 0.22, 0.22, 0.22, 0.22, 1, 1, 1, 1]),
        garmentLogoStampState: {
          stamp: {} as Texture,
          cellSize: { width: 849, height: 477 },
          grid: 2,
        },
      },
    } as unknown as MeshStandardMaterial;

    const uniforms = {
      uLogoStamp: { value: {} as Texture },
      uLogoStampCellSize: { value: new Vector2(1, 1) },
      uLogoStampGrid: { value: 3 },
      uLogoAnchorUv: { value: Array.from({ length: 9 }, () => new Vector2()) },
      uLogoRotation: { value: Array.from({ length: 9 }, () => 0) },
      uLogoUploadRotation: { value: Array.from({ length: 9 }, () => 0) },
      uLogoPartRotation: { value: Array.from({ length: 9 }, () => 0) },
      uLogoScale: { value: nextScale },
      uLogoStampSlot: { value: Array.from({ length: 9 }, () => 0) },
      uLogoSlotActive: { value: Array.from({ length: 9 }, () => 0) },
      uLogoPartBounds: { value: Array.from({ length: 9 }, () => new Vector4()) },
      uLogoGizmoEnabled: { value: 0 },
      uLogoGizmoHalf: { value: Array.from({ length: 9 }, () => new Vector2()) },
    };

    hydrateGarmentLogoUniforms(material, uniforms);

    expect(nextScale[0]).toBeCloseTo(0.22);
    expect(nextScale[4]).toBeCloseTo(0.22);
    expect(previousScale[0]).toBe(1);
    expect(uniforms.uLogoStampGrid.value).toBe(2);
    expect(uniforms.uLogoStampCellSize.value.x).toBe(849);
  });
});
