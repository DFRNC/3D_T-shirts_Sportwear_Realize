import type { cartItemConfigurationType, styleIdType } from "@types";
import { preloadGarmentProduct, getProduct } from "@utils";

import { useConfigurationControl } from "../useConfigurationControl";
import { useConfiguratorProduct } from "../useConfiguratorProduct";
import {
  applyGarmentConfiguration,
  captureGarmentConfiguration,
} from "./cartItemConfiguration";
import { persistCartItemSnapshot } from "./persistCartItemSnapshot";

interface ActivateCartItemGetState {
  items: Array<{ id: string; styleId: styleIdType; productIndex: number }>;
  saveConfiguration: (
    itemId: string,
    configuration: cartItemConfigurationType,
  ) => void;
  getConfiguration: (itemId: string) => cartItemConfigurationType | undefined;
  savePreview: (itemId: string, previewSrc: string) => void;
}

const activateCartItem = (
  get: () => ActivateCartItemGetState,
  itemId: string,
  options?: { savePreviousId?: string | null },
) => {
  const { items, saveConfiguration, getConfiguration } = get();
  const activeIndex = items.findIndex((item) => item.id === itemId);
  const activeItem = items[activeIndex];
  if (!activeItem) return;

  const savePreviousId = options?.savePreviousId;
  if (
    savePreviousId &&
    savePreviousId !== itemId &&
    items.some((item) => item.id === savePreviousId)
  ) {
    persistCartItemSnapshot(get, savePreviousId);
  }

  const product = getProduct(activeItem.styleId, activeItem.productIndex);
  if (!product) return;

  preloadGarmentProduct(activeItem.styleId, activeItem.productIndex);
  useConfiguratorProduct
    .getState()
    .setProduct(activeItem.styleId, activeItem.productIndex);
  useConfigurationControl.getState().setNumberProduct(activeIndex + 1);

  const configuration = getConfiguration(itemId);
  applyGarmentConfiguration(product, configuration);

  if (!configuration) {
    saveConfiguration(itemId, captureGarmentConfiguration());
  }
};

export { activateCartItem };
