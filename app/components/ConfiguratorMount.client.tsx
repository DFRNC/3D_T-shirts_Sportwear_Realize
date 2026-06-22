import { lazy, Suspense } from "react";

import { MainLoader, MainLoaderBackground } from "../../src/ui/components/atomic/molecules/Loaders/MainLoader";

const ConfiguratorExperience = lazy(
  () => import("./ConfiguratorExperience.client"),
);

function ConfiguratorRouteFallback() {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-linear-to-t from-[#E8E8E8] to-white">
      <MainLoaderBackground />
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <MainLoader />
      </div>
    </div>
  );
}

export default function ConfiguratorMount() {
  return (
    <Suspense fallback={<ConfiguratorRouteFallback />}>
      <ConfiguratorExperience />
    </Suspense>
  );
}
