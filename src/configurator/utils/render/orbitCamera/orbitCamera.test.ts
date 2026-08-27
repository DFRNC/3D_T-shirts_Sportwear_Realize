import {
  applyCardinalHorizonDirection,
  applyFrontOrBackHorizonDirection,
  resolveGarmentPartHorizonFacing,
  resolveOrbitFocusPose,
} from '@configurator/utils';
import { BoxGeometry, Group, Mesh, Vector3 } from 'three';
import { describe, expect, it } from 'vitest';

const createGarmentScene = () => {
  const scene = new Group();
  const mesh = new Mesh(new BoxGeometry(1, 1, 1));
  mesh.userData.configuratorGarment = true;
  scene.add(mesh);
  return scene;
};

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

describe('resolveGarmentPartHorizonFacing', () => {
  it('classifies front parts', () => {
    expect(resolveGarmentPartHorizonFacing({ id: 'front', label: 'Davanti' })).toBe('front');
    expect(resolveGarmentPartHorizonFacing({ id: 'torso_front', label: '' })).toBe('front');
  });

  it('classifies back parts', () => {
    expect(resolveGarmentPartHorizonFacing({ id: 'back', label: 'Retro' })).toBe('back');
    expect(resolveGarmentPartHorizonFacing({ id: 'torso_back', label: '' })).toBe('back');
  });

  it('ignores sleeves and other parts', () => {
    expect(resolveGarmentPartHorizonFacing({ id: 'sleeve_left', label: 'Manica' })).toBeNull();
  });

  it('gives shorts legs no fixed horizon so the camera follows the surface normal', () => {
    expect(resolveGarmentPartHorizonFacing({ id: 'cruijff_calcio_back', label: 'Gamba Destra' })).toBeNull();
    expect(resolveGarmentPartHorizonFacing({ id: 'cruijff_calcio_front', label: 'Gamba Sinistra' })).toBeNull();
    expect(resolveGarmentPartHorizonFacing({ id: 'cruijff_calcio_laces', label: 'Lacci' })).toBeNull();
  });

  it('gives every part of a shorts-typed product no fixed horizon', () => {
    expect(resolveGarmentPartHorizonFacing({ id: 'panel_back', label: 'Retro' }, { type: 'shorts' })).toBeNull();
  });

  it('still classifies shirt parts of a combined product', () => {
    expect(resolveGarmentPartHorizonFacing({ id: 'cruijff_completo_back', label: 'Retro' }, { type: 'completo' })).toBe('back');
  });
});

describe('applyFrontOrBackHorizonDirection', () => {
  it('locks a front part onto +Z even when the offset is toward the side', () => {
    const direction = applyFrontOrBackHorizonDirection(new Vector3(0.9, 0.2, 0.05), 'front');
    expect(direction).toEqual(new Vector3(0, 0, 1));
  });

  it('locks a back part onto -Z', () => {
    const direction = applyFrontOrBackHorizonDirection(new Vector3(-0.9, 0.1, 0.2), 'back');
    expect(direction).toEqual(new Vector3(0, 0, -1));
  });

  it('snaps only to front/back when facing is unknown', () => {
    const direction = applyFrontOrBackHorizonDirection(new Vector3(0.9, 0.2, 0.05));
    expect(direction).toEqual(new Vector3(0, 0, 1));
  });
});

describe('resolveOrbitFocusPose', () => {
  it('keeps a front-part logo near the side seam on the front camera', () => {
    const target = new Vector3();
    const cameraPosition = new Vector3();
    const resolved = resolveOrbitFocusPose(
      {
        scene: createGarmentScene(),
        focusPoint: new Vector3(0.85, 0.1, 0.08),
        surfaceNormal: new Vector3(1, 0, 0.05),
        currentCamera: new Vector3(0, 0, 0.6),
        currentTarget: new Vector3(0, 0, 0),
        minDistance: 0.05,
        maxDistance: 0.9,
        viewMode: 'part',
        partFacing: 'front',
      },
      target,
      cameraPosition,
    );

    expect(resolved).toBe(true);
    const direction = cameraPosition.clone().sub(target);
    expect(Math.abs(direction.x)).toBeLessThan(0.05);
    expect(direction.z).toBeGreaterThan(0.05);
  });

  it('aims a shorts right-leg print along its own surface normal', () => {
    const target = new Vector3();
    const cameraPosition = new Vector3();
    const resolved = resolveOrbitFocusPose(
      {
        scene: createGarmentScene(),
        focusPoint: new Vector3(0.45, 0.05, 0.1),
        surfaceNormal: new Vector3(1, 0, 0),
        currentCamera: new Vector3(0, 0, 0.6),
        currentTarget: new Vector3(0, 0, 0),
        minDistance: 0.05,
        maxDistance: 0.9,
        viewMode: 'surface',
      },
      target,
      cameraPosition,
    );

    expect(resolved).toBe(true);
    const direction = cameraPosition.clone().sub(target);
    expect(direction.x).toBeGreaterThan(Math.abs(direction.z));
  });
});
