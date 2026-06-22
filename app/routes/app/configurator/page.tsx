import { lazy, Suspense } from "react";

import { ClientOnly } from "../../../components/ClientOnly";

const ConfiguratorMount = lazy(
  () => import("../../../components/ConfiguratorMount.client"),
);

export default function AppConfiguratorPage() {
  return (
    <ClientOnly>
      <Suspense fallback={null}>
        <ConfiguratorMount />
      </Suspense>
    </ClientOnly>
  );
}
