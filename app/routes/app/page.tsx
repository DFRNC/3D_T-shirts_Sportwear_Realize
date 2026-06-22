import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

import { HomePage } from "@pages";

import { fetchConfiguratorCollections } from "../../shopify/fetchConfiguratorCollections.server";
import { authenticate } from "../../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { admin } = await authenticate.admin(request);
  const collections = await fetchConfiguratorCollections(admin);

  return { collections };
};

export default function AppHomePage() {
  const { collections } = useLoaderData<typeof loader>();

  return <HomePage collections={collections} />;
}
