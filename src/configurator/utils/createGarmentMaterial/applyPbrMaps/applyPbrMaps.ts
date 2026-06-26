import {
  DataTexture,
  FrontSide,
  MeshStandardMaterial,
  RGBAFormat,
  TangentSpaceNormalMap,
  Vector2,
} from 'three';

import type { pbrMapsType } from '@configurator/types';

const createDummyNormal = () => {
  const tex = new DataTexture(new Uint8Array([128, 128, 255, 255]), 1, 1, RGBAFormat);
  tex.needsUpdate = true;
  return tex;
};

const applyGarmentPrintBase = (material: MeshStandardMaterial) => {
  material.color.set('#ffffff');
  material.metalness = 0;
  material.roughness = material.roughness > 0 ? material.roughness : 0.92;
  material.envMapIntensity = 0.48;
  material.normalMap = material.normalMap ?? createDummyNormal();
  material.normalMapType = TangentSpaceNormalMap;
  material.normalScale = material.normalScale ?? new Vector2(0.5, 0.5);
  material.side = FrontSide;
};

const applyPbrMaps = (material: MeshStandardMaterial, maps: pbrMapsType, pbrUvChannel: 0 | 1 = 1) => {
  material.map = null;
  material.color.set('#ffffff');
  material.emissive.set('#000000');
  material.metalnessMap = null;
  material.lightMap = null;
  material.emissiveMap = null;
  material.displacementMap = null;
  material.alphaMap = null;
  material.aoMap = maps.bakeAoRoughness;
  material.aoMapIntensity = 0.42;
  material.roughnessMap = null;
  material.roughness = 0.92;
  material.metalness = 0;
  material.envMapIntensity = 0.48;
  material.normalMap = maps.bakeNormal;
  material.normalMapType = TangentSpaceNormalMap;
  material.normalScale = new Vector2(0.5, 0.5);
  material.userData.pbrUvChannel = pbrUvChannel;
  material.side = FrontSide;
};

export { applyGarmentPrintBase, applyPbrMaps, createDummyNormal };
