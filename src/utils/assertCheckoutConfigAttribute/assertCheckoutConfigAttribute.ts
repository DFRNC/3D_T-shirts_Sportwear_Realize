const CONFIG_URL_ATTRIBUTE_KEY = '_config_url';

type checkoutAttributeLikeType = { key: string; value?: string | null };

const hasCheckoutConfigAttribute = (attributes: checkoutAttributeLikeType[] | undefined | null): boolean =>
  Boolean(attributes?.some((attribute) => attribute.key === CONFIG_URL_ATTRIBUTE_KEY && Boolean(attribute.value?.trim())));

export { CONFIG_URL_ATTRIBUTE_KEY, hasCheckoutConfigAttribute };
export type { checkoutAttributeLikeType };
