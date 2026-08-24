import type { garmentConfigType, garmentPartConfigType, uvBoundsType } from '@types';
import { createDynamicUserLogoPosition, resolveNextUserLogoUv } from '@configurator/mappers';
import { describe, expect, it } from 'vitest';

const frontBounds: uvBoundsType = { minX: 0, minY: 0, maxX: 0.5, maxY: 1 };

const frontPart = {
  id: 'shirt_front',
  name: 'front',
  label: 'Front',
  meshNames: ['front_mesh'],
  uvBounds: frontBounds,
} as garmentPartConfigType;

const product = {
  path: 'test-shirt',
  parts: [frontPart],
  patterns: [],
} as garmentConfigType;

describe('resolveNextUserLogoUv', () => {
  it('offsets a little to the top-right of the origin', () => {
    const next = resolveNextUserLogoUv({ x: 0.2, y: 0.5 }, frontBounds);

    expect(next.x).toBeCloseTo(0.23);
    expect(next.y).toBeCloseTo(0.47);
  });

  it('keeps the next logo inside the front part instead of walking off the mesh', () => {
    const next = resolveNextUserLogoUv({ x: 0.49, y: 0.02 }, frontBounds);

    expect(next.x).toBeLessThanOrEqual(frontBounds.maxX - 0.04);
    expect(next.y).toBeGreaterThanOrEqual(frontBounds.minY + 0.04);
  });
});

describe('createDynamicUserLogoPosition', () => {
  it('places the first free logo on the default front anchor', () => {
    const position = createDynamicUserLogoPosition(product, 0);

    expect(position.partId).toBe('shirt_front');
    expect(position.uv.x).toBeCloseTo(0.25);
    expect(position.uv.y).toBeCloseTo(0.5);
  });

  it('stacks from the last active logo instead of an absolute index offset', () => {
    const first = createDynamicUserLogoPosition(product, 0, { partId: 'shirt_front', uv: { x: 0.25, y: 0.5 } });
    const farIndex = createDynamicUserLogoPosition(product, 12, { partId: 'shirt_front', uv: { x: 0.25, y: 0.5 } });

    expect(first.uv.x).toBeCloseTo(0.28);
    expect(first.uv.y).toBeCloseTo(0.47);
    expect(farIndex.uv).toEqual(first.uv);
  });
});
