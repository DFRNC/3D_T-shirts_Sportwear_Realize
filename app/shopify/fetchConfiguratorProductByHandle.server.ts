import type { AdminApiContext } from "@shopify/shopify-app-react-router/server";
import type { garmentBusinessType } from "@types";

import {
  mapShopifyProductBusiness,
  PRODUCT_BUSINESS_FIELDS,
  resolveProductModelId,
  type shopifyProductBusinessNodeType,
} from "./configuratorProductBusiness";

const PRODUCT_BY_HANDLE_QUERY = `#graphql
  query ConfiguratorProductByHandle($handle: String!) {
    productByIdentifier(identifier: { handle: $handle }) {
      ${PRODUCT_BUSINESS_FIELDS}
    }
  }
`;

type configuratorProductType = {
  modelId: string;
  business: garmentBusinessType;
};

/**
 * Resolves a Shopify product (by handle == URL slug) into the local model id + business data.
 * Returns `null` when the product does not exist or has no `custom.id` metafield —
 * the configurator loader treats that as a 404.
 */
const fetchConfiguratorProductByHandle = async (admin: AdminApiContext, handle: string): Promise<configuratorProductType | null> => {
  const response = await admin.graphql(PRODUCT_BY_HANDLE_QUERY, {
    variables: { handle },
  });

  const payload = (await response.json()) as {
    data?: { productByIdentifier?: shopifyProductBusinessNodeType | null };
  };

  const node = payload.data?.productByIdentifier;
  if (!node) return null;

  const modelId = resolveProductModelId(node);
  if (!modelId) return null;

  return {
    modelId,
    business: mapShopifyProductBusiness(node),
  };
};

export { fetchConfiguratorProductByHandle };
export type { configuratorProductType };
