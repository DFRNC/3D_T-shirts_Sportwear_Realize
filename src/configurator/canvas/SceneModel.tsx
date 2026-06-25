'use client';

import { Center } from '@react-three/drei';

import { GarmentModel } from '@configurator/scene';
import { GarmentRuntime } from '@configurator/runtime';

const SceneModel = () => {
  return (
    <Center>
      <GarmentModel>
        <GarmentRuntime />
      </GarmentModel>
    </Center>
  );
};

export { SceneModel };
