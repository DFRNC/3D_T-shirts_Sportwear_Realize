import { applyCardinalHorizonDirection } from '@configurator/utils';
import { Vector3 } from 'three';
import { describe, expect, it } from 'vitest';

describe('applyCardinalHorizonDirection', () => {
  it('flattens a tilted front normal onto +Z', () => {
    const direction = applyCardinalHorizonDirection(new Vector3(0.08, 0.6, 0.9));
    expect(direction.x).toBe(0);
    expect(direction.y).toBe(0);
    expect(direction.z).toBe(1);
  });

  it('snaps a back-facing point onto -Z', () => {
    const direction = applyCardinalHorizonDirection(new Vector3(-0.04, -0.3, -0.7));
    expect(direction).toEqual(new Vector3(0, 0, -1));
  });

  it('keeps a sleeve-facing direction on ±X', () => {
    const direction = applyCardinalHorizonDirection(new Vector3(0.8, 0.4, 0.1));
    expect(direction).toEqual(new Vector3(1, 0, 0));
  });

  it('falls back to +Z when the vector is empty', () => {
    const direction = applyCardinalHorizonDirection(new Vector3(0, 0, 0));
    expect(direction).toEqual(new Vector3(0, 0, 1));
  });
});
