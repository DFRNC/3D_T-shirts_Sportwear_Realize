import type { AdminApiContext } from "@shopify/shopify-app-react-router/server";
import type { homePageCollectionType } from "@types";

const CONFIGURATOR_COLLECTION_TYPE = "configurator";

const FILE_REFERENCE_FIELDS = `
  reference {
    ... on MediaImage {
      image {
        url
      }
    }
    ... on GenericFile {
      url
    }
  }
`;

const COLLECTION_LIST_QUERY = `#graphql
  query ConfiguratorCollectionList {
    collections(first: 15) {
      nodes {
        id
        title
        handle
        typeMetafield: metafield(namespace: "custom", key: "type") {
          value
        }
      }
    }
  }
`;

const COLLECTION_PRODUCTS_QUERY = `#graphql
  query ConfiguratorCollectionProducts($id: ID!) {
    collection(id: $id) {
      products(first: 25) {
        nodes {
          id
          title
          handle
          status
          priceRangeV2 {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          modelMetafield: metafield(namespace: "custom", key: "id") {
            value
          }
          featuredImage {
            url
          }
          viewImage: metafield(namespace: "custom", key: "view_image") {
            ${FILE_REFERENCE_FIELDS}
          }
          activeViewImage: metafield(namespace: "custom", key: "active_view_image") {
            ${FILE_REFERENCE_FIELDS}
          }
        }
      }
    }
  }
`;

type productMetafieldReferenceType = {
  reference?: {
    image?: { url?: string | null } | null;
    url?: string | null;
  } | null;
};

type shopifyProductNodeType = {
  id: string;
  title: string;
  handle: string;
  status: string;
  priceRangeV2?: {
    minVariantPrice?: { amount?: string | null; currencyCode?: string | null } | null;
  } | null;
  modelMetafield?: { value: string } | null;
  featuredImage: { url: string } | null;
  viewImage: productMetafieldReferenceType | null;
  activeViewImage: productMetafieldReferenceType | null;
};

type shopifyCollectionListNodeType = {
  id: string;
  title: string;
  handle: string;
  typeMetafield?: { value: string } | null;
};

const resolveMetafieldFileUrl = (metafield?: productMetafieldReferenceType | null) => {
  const reference = metafield?.reference;
  if (!reference) return null;

  return reference.image?.url ?? reference.url ?? null;
};

const mapShopifyProduct = (product: shopifyProductNodeType) => {
  const viewImageSrc = resolveMetafieldFileUrl(product.viewImage);
  const activeViewImageSrc = resolveMetafieldFileUrl(product.activeViewImage);
  const featuredImageSrc = product.featuredImage?.url ?? null;

  const priceAmount = product.priceRangeV2?.minVariantPrice?.amount;

  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    status: product.status,
    modelId: product.modelMetafield?.value?.trim() || null,
    price: priceAmount != null ? Number(priceAmount) : null,
    currencyCode: product.priceRangeV2?.minVariantPrice?.currencyCode ?? null,
    previewSrc: viewImageSrc ?? featuredImageSrc,
    activePreviewSrc: activeViewImageSrc ?? viewImageSrc ?? featuredImageSrc,
  };
};

const fetchCollectionProducts = async (admin: AdminApiContext, collectionId: string) => {
  const response = await admin.graphql(COLLECTION_PRODUCTS_QUERY, {
    variables: { id: collectionId },
  });

  const payload = (await response.json()) as {
    data?: {
      collection?: {
        products?: {
          nodes?: shopifyProductNodeType[];
        };
      } | null;
    };
  };

  return payload.data?.collection?.products?.nodes?.map(mapShopifyProduct) ?? [];
};

const fetchConfiguratorCollections = async (admin: AdminApiContext): Promise<homePageCollectionType[]> => {
  const listResponse = await admin.graphql(COLLECTION_LIST_QUERY);
  const listPayload = (await listResponse.json()) as {
    data?: {
      collections?: {
        nodes?: shopifyCollectionListNodeType[];
      };
    };
  };

  const configuratorCollections =
    listPayload.data?.collections?.nodes?.filter(
      (collection) => collection.typeMetafield?.value === CONFIGURATOR_COLLECTION_TYPE,
    ) ?? [];

  return Promise.all(
    configuratorCollections.map(async (collection) => ({
      id: collection.id,
      title: collection.title,
      handle: collection.handle,
      products: await fetchCollectionProducts(admin, collection.id),
    })),
  );
};

export { fetchConfiguratorCollections };
