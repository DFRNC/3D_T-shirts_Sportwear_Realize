import type { Camera, Scene, WebGLRenderer } from 'three';
import { Quaternion, Vector3 } from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

import { resolveGarmentCenter } from '../orbitCamera';

const THUMBNAIL_WIDTH = 160;
const THUMBNAIL_HEIGHT = 128;
const PREVIEW_CAMERA_OFFSET = new Vector3(0, 0.05, 0.78);

interface cameraSnapshotType {
  position: Vector3;
  quaternion: Quaternion;
  target: Vector3;
  hadControls: boolean;
}

interface captureConfiguratorPreviewInput {
  gl: WebGLRenderer;
  scene: Scene;
  camera: Camera;
  controls?: OrbitControlsImpl | null;
}

const saveCameraState = (camera: Camera, controls?: OrbitControlsImpl | null): cameraSnapshotType => ({
  position: camera.position.clone(),
  quaternion: camera.quaternion.clone(),
  target: controls ? controls.target.clone() : new Vector3(),
  hadControls: !!controls,
});

const restoreCameraState = (camera: Camera, controls: OrbitControlsImpl | null | undefined, snapshot: cameraSnapshotType) => {
  camera.position.copy(snapshot.position);
  camera.quaternion.copy(snapshot.quaternion);

  if (controls && snapshot.hadControls) {
    controls.target.copy(snapshot.target);
    controls.update();
  }
};

const applyThumbnailCamera = (scene: Scene, camera: Camera, controls?: OrbitControlsImpl | null) => {
  const center = new Vector3();
  if (!resolveGarmentCenter(scene, center)) return false;

  camera.position.copy(center).add(PREVIEW_CAMERA_OFFSET);
  camera.lookAt(center);

  if (controls) {
    controls.target.copy(center);
    controls.update();
  }

  if ('updateProjectionMatrix' in camera && typeof camera.updateProjectionMatrix === 'function') {
    camera.updateProjectionMatrix();
  }

  return true;
};

const canvasToThumbnailDataUrl = (source: HTMLCanvasElement, width: number, height: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  if (!context) return null;

  const targetAspect = width / height;
  const sourceAspect = source.width / source.height;

  let cropWidth = source.width;
  let cropHeight = source.height;
  let sourceX = 0;
  let sourceY = 0;

  if (sourceAspect > targetAspect) {
    cropWidth = source.height * targetAspect;
    sourceX = (source.width - cropWidth) / 2;
  } else {
    cropHeight = source.width / targetAspect;
    sourceY = (source.height - cropHeight) / 2;
  }

  context.drawImage(source, sourceX, sourceY, cropWidth, cropHeight, 0, 0, width, height);

  return canvas.toDataURL('image/webp', 0.85);
};

const captureConfiguratorPreview = ({ gl, scene, camera, controls }: captureConfiguratorPreviewInput) => {
  const snapshot = saveCameraState(camera, controls);

  scene.updateMatrixWorld(true);

  if (!applyThumbnailCamera(scene, camera, controls)) {
    restoreCameraState(camera, controls, snapshot);
    return null;
  }

  gl.render(scene, camera);
  const dataUrl = canvasToThumbnailDataUrl(gl.domElement, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

  restoreCameraState(camera, controls, snapshot);
  gl.render(scene, camera);

  return dataUrl;
};

export { captureConfiguratorPreview };
