import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

import { Footer } from "@organisms";
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

  return (
    <>
      <div className="flex-1">
        <HomePage collections={collections} />
      </div>
      <Footer />
    </>
  );
}
