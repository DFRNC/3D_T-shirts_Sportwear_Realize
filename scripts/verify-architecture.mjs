import { existsSync } from 'node:fs';
import { exit } from 'node:process';

const forbiddenPaths = [
  'src/gizmo',
  'src/shaders',
  'src/features/garment-scene',
  'src/hooks/useGarmentAppearance',
  'src/hooks/useGarmentLogoTextures',
  'src/hooks/useGarmentNameTextures',
  'src/utils/resolveProductStepsConfiguration',
  'src/ui/components/atomic/organisms/Configurator/GarmentModel',
  'src/ui/components/atomic/organisms/Configurator/PrintGizmoLayer',
];

const violations = forbiddenPaths.filter((path) => existsSync(path));

if (violations.length > 0) {
  console.error('Architecture guard failed. Remove duplicate legacy paths:');
  violations.forEach((path) => console.error(`  - ${path}`));
  exit(1);
}

console.log('Architecture guard passed.');
