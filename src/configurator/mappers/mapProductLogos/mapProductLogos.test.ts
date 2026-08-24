import type { garmentConfigType, garmentPartConfigType, uvBoundsType } from '@types';
import { createDynamicUserLogoPosition } from '@configurator/mappers';
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

describe('createDynamicUserLogoPosition', () => {
  it('places the first free logo on the default front anchor', () => {
    const position = createDynamicUserLogoPosition(product, 0);

    expect(position.partId).toBe('shirt_front');
    expect(position.uv.x).toBeCloseTo(0.25);
    expect(position.uv.y).toBeCloseTo(0.5);
  });

  it('places every new logo on the same default front point', () => {
    const first = createDynamicUserLogoPosition(product, 0);
    const later = createDynamicUserLogoPosition(product, 12);

    expect(later.partId).toBe(first.partId);
    expect(later.uv).toEqual(first.uv);
  });
});
