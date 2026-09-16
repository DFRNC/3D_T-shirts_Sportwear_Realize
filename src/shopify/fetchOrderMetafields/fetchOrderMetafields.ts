import { shopifyAdminGraphql } from '@shopify/adminClient';
import { ORDER_METAFIELD_NAMESPACE } from '@shopify/setOrderMetafields';

const ORDER_METAFIELDS_QUERY = `#graphql
  query OrderMetafields($id: ID!) {
    node(id: $id) {
      ... on Order {
        metafields(first: 100, namespace: "${ORDER_METAFIELD_NAMESPACE}") {
          edges {
            node {
              key
              value
            }
          }
        }
      }
    }
  }
`;

type orderMetafieldsResponseType = {
  node?: {
    metafields?: { edges: { node: { key: string; value: string } }[] };
  } | null;
};

const fetchOrderMetafields = async (orderId: string): Promise<Map<string, string>> => {
  const data = await shopifyAdminGraphql<orderMetafieldsResponseType>(ORDER_METAFIELDS_QUERY, { id: orderId });
  const edges = data.node?.metafields?.edges ?? [];

  return new Map(edges.filter((edge) => Boolean(edge.node.value)).map((edge) => [edge.node.key, edge.node.value]));
};

export { fetchOrderMetafields };
