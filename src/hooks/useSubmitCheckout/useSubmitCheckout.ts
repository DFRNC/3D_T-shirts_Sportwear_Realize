'use client';

import { useCallback, useState } from 'react';

import { buildMinimumQuantityLabel, CHECKOUT_CONFIG_EXPORT_FILENAME } from '@constants';
import { useCheckout, useConfigurationCart } from '@store';
import {
  buildCheckoutConfigExport,
  buildOrderCuttingExport,
  buildOrderPreset,
  collectOrderCuttingExportUvBlobs,
  formatCheckoutOrderDate,
  uploadCheckoutAssetsDirect,
  withTimeout,
} from '@utils';
import type { checkoutAssetUploadItemType } from '@utils';
import { redirectToShopifyCheckout } from '@utils/embeddedUrlSync';
import type { checkoutLineAttributeType, createCheckoutPayloadType, createCheckoutResultType } from '@shopify';

const CHECKOUT_ENDPOINT = '/api/checkout';
const CHECKOUT_ASSET_COLLECTION_TIMEOUT_MS = 600_000;
const CHECKOUT_ASSET_FAILURE_MESSAGE =
  "Non è stato possibile preparare i file della tua configurazione. L'ordine non è stato creato: riprova tra qualche istante.";

const createCheckoutOrderNumber = () => `#${Math.floor(1_000_000_000 + Math.random() * 9_000_000_000)}`;

const dataUrlToBlob = async (dataUrl: string): Promise<Blob | null> => {
  if (!dataUrl.startsWith('data:')) return null;
  try {
    return await (await fetch(dataUrl)).blob();
  } catch {
    return null;
  }
};

const uploadProductPreviews = async (previews: Record<string, string>): Promise<Record<string, string>> => {
  const items: checkoutAssetUploadItemType[] = [];

  for (const [cartItemId, dataUrl] of Object.entries(previews)) {
    const blob = await dataUrlToBlob(dataUrl);
    if (blob) {
      items.push({ id: `preview:${cartItemId}`, blob, filename: `preview-${cartItemId}.png`, mimeType: blob.type || 'image/png' });
    }
  }

  if (!items.length) return {};

  const urlById = await uploadCheckoutAssetsDirect(items);
  const previewUrls: Record<string, string> = {};
  for (const [cartItemId] of Object.entries(previews)) {
    const url = urlById.get(`preview:${cartItemId}`);
    if (url) previewUrls[cartItemId] = url;
  }
  return previewUrls;
};

const collectCheckoutAssetAttributes = async (): Promise<checkoutLineAttributeType[]> => {
  try {
    const checkoutStore = useCheckout.getState();
    const cartStore = useConfigurationCart.getState();
    const { products } = checkoutStore;
    const { configurations } = cartStore;

    const orderMeta = window.__checkoutE2e?.orderMeta ?? {
      orderNumber: createCheckoutOrderNumber(),
      orderDate: formatCheckoutOrderDate(),
    };

    const cuttingExportData = buildOrderCuttingExport({
      products,
      configurations,
      orderNumber: orderMeta.orderNumber,
      orderDate: orderMeta.orderDate,
    });

    const uvBlobs = await collectOrderCuttingExportUvBlobs(cuttingExportData);

    const uvUrlById = await uploadCheckoutAssetsDirect(
      uvBlobs.map((uv) => ({
        id: `uv:${uv.cartItemId}:${uv.label}`,
        blob: uv.blob,
        filename: uv.fileName,
        mimeType: uv.blob.type || 'image/png',
      })),
    );

    const uvImages = uvBlobs.flatMap((uv) => {
      const url = uvUrlById.get(`uv:${uv.cartItemId}:${uv.label}`);
      return url ? [{ cartItemId: uv.cartItemId, label: uv.label, url }] : [];
    });

    const previewUrls = await uploadProductPreviews(cartStore.previews);

    const configExport = buildCheckoutConfigExport({
      products,
      configurations,
      uvImages,
      previewUrls,
      orderNumber: orderMeta.orderNumber,
      orderDate: orderMeta.orderDate,
    });

    const configUrlById = await uploadCheckoutAssetsDirect([
      {
        id: 'config-json',
        blob: new Blob([JSON.stringify(configExport)], { type: 'application/json' }),
        filename: CHECKOUT_CONFIG_EXPORT_FILENAME,
        mimeType: 'application/json',
      },
    ]);

    const configUrl = configUrlById.get('config-json');

    if (!configUrl) {
      throw new Error('Checkout asset upload did not return a config.json URL.');
    }

    const attributes: checkoutLineAttributeType[] = [];
    if (uvImages.length) attributes.push({ key: '_uv_image_urls', value: JSON.stringify(uvImages) });
    attributes.push({ key: '_config_url', value: configUrl });

    return attributes;
  } catch (error) {
    console.error('Checkout asset upload failed', error);
    throw error;
  }
};

const useSubmitCheckout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null as string | null);

  const submitCheckout = useCallback(async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const checkoutStore = useCheckout.getState();
      if (!checkoutStore.canMeetMinimumQuantity()) {
        throw new Error(buildMinimumQuantityLabel(checkoutStore.getRequiredMinimumQuantity()));
      }

      const { products } = checkoutStore;
      const payload: createCheckoutPayloadType = buildOrderPreset(products);

      if (!payload.lines.length) {
        throw new Error('Nessun prodotto da ordinare.');
      }

      try {
        payload.attributes = await withTimeout(collectCheckoutAssetAttributes(), CHECKOUT_ASSET_COLLECTION_TIMEOUT_MS, 'Checkout asset collection');
      } catch (assetError: unknown) {
        console.error('Checkout asset collection failed', assetError);
        throw new Error(CHECKOUT_ASSET_FAILURE_MESSAGE);
      }

      const response = await fetch(CHECKOUT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as createCheckoutResultType & { error?: string };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error ?? 'Impossibile creare il checkout.');
      }

      redirectToShopifyCheckout(data.checkoutUrl);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Errore sconosciuto.');
      setIsSubmitting(false);
    }
  }, []);

  return { submitCheckout, isSubmitting, error };
};

export { useSubmitCheckout };
