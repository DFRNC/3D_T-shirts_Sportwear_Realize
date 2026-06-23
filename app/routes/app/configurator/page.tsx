import { useRouteLoaderData } from "react-router";

import { ConfiguratorPage } from "@pages";
import { useConfiguratorProductHydration } from "@hooks";

import type { loader } from "./route";

export default function AppConfiguratorPage() {
  // The loader lives on the parent route (`route.tsx`); this is its index child,
  // so read the parent's data by route id rather than `useLoaderData`.
  const data = useRouteLoaderData<typeof loader>("routes/app/configurator/route");

  useConfiguratorProductHydration(data?.slug ?? "", data?.product ?? null);

  return <ConfiguratorPage />;
}
