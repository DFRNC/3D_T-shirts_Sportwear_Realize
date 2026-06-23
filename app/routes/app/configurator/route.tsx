import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { redirect, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";

import { fetchConfiguratorProductByHandle } from "../../../shopify/fetchConfiguratorProductByHandle.server";
import { authenticate } from "../../../shopify.server";

export { default } from "./layout";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const { admin } = await authenticate.admin(request);

  const slug = params.slug;
  if (!slug) {
    // Preserve Shopify embedded params (shop, host, embedded) when bouncing back to the gallery.
    throw redirect(`/app${new URL(request.url).search}`);
  }

  // `null` when the product is missing or has no `custom.id` metafield.
  // The client falls back to the default model so the configurator still opens.
  const product = await fetchConfiguratorProductByHandle(admin, slug);
  if (!product) {
    console.warn(`[configurator] slug "${slug}" has no Shopify "custom.id" mapping; using the default model.`);
  }

  return { slug, product };
};

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
