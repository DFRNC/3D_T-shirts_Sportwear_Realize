import { getShopifyAdminClientSecret, setOrderMetafields, verifyShopifyWebhookSignature } from '@shopify';
import type { orderMetafieldInputType } from '@shopify';
import { formatCheckoutOrderDate } from '@utils/buildCheckoutOrderExport';

import { generateOrderPdfs } from './generateOrderPdfs';
import type { orderPdfContextType } from './generateOrderPdfs';

export const dynamic = 'force-dynamic';

const ORDER_WEBHOOK_MAX_CONCURRENCY = 3;
const ORDER_WEBHOOK_MAX_QUEUE_SIZE = 200;
const ORDER_WEBHOOK_COMPLETED_TTL_MS = 6 * 60 * 60 * 1000;

type orderWebhookQueueItemType = {
  key: string;
  run: () => Promise<void>;
};

type orderWebhookQueueStateType = {
  pending: orderWebhookQueueItemType[];
  activeCount: number;
  inFlight: Set<string>;
  completedAtByKey: Map<string, number>;
};

const queueStateKey = '__orderCreateWebhookQueueState__';
const globalQueueState = globalThis as typeof globalThis & {
  [queueStateKey]?: orderWebhookQueueStateType;
};

const orderWebhookQueueState: orderWebhookQueueStateType = globalQueueState[queueStateKey] ?? {
  pending: [],
  activeCount: 0,
  inFlight: new Set<string>(),
  completedAtByKey: new Map<string, number>(),
};
globalQueueState[queueStateKey] = orderWebhookQueueState;

type shopifyOrderNoteAttributeType = {
  name: string;
  value: string;
};

type shopifyAddressType = {
  name?: string | null;
  address1?: string | null;
  address2?: string | null;
  zip?: string | null;
  city?: string | null;
  province?: string | null;
  country?: string | null;
  phone?: string | null;
};

type shopifyOrderPayloadType = {
  id: number | string;
  name?: string;
  created_at?: string;
  contact_email?: string | null;
  email?: string | null;
  phone?: string | null;
  subtotal_price?: string | null;
  total_discounts?: string | null;
  total_shipping_price_set?: { shop_money?: { amount?: string | null } | null } | null;
  total_price?: string | null;
  customer?: { first_name?: string | null; last_name?: string | null; email?: string | null } | null;
  shipping_address?: shopifyAddressType | null;
  billing_address?: shopifyAddressType | null;
  note_attributes?: shopifyOrderNoteAttributeType[];
};

const NOTE_ATTRIBUTE_KEYS = {
  uvImageUrls: '_uv_image_urls',
  configUrl: '_config_url',
} as const;

const readNoteAttribute = (attributes: shopifyOrderNoteAttributeType[], name: string): string | undefined =>
  attributes.find((attribute) => attribute.name === name)?.value;

const toNumber = (value: string | null | undefined): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const clearExpiredCompletedWebhookKeys = (): void => {
  const now = Date.now();
  orderWebhookQueueState.completedAtByKey.forEach((completedAt, key) => {
    if (now - completedAt > ORDER_WEBHOOK_COMPLETED_TTL_MS) {
      orderWebhookQueueState.completedAtByKey.delete(key);
    }
  });
};

const isWebhookAlreadyCompleted = (key: string): boolean => {
  clearExpiredCompletedWebhookKeys();
  return orderWebhookQueueState.completedAtByKey.has(key);
};

const isWebhookInFlight = (key: string): boolean => orderWebhookQueueState.inFlight.has(key);

const markWebhookCompleted = (key: string): void => {
  orderWebhookQueueState.inFlight.delete(key);
  orderWebhookQueueState.completedAtByKey.set(key, Date.now());
};

const markWebhookFailed = (key: string): void => {
  orderWebhookQueueState.inFlight.delete(key);
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const runWebhookJobWithRetry = async (job: () => Promise<void>, maxAttempts = 3): Promise<void> => {
  let lastError: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await job();
      return;
    } catch (error) {
      lastError = error;
      if (attempt < maxAttempts) {
        await sleep(750 * attempt);
      }
    }
  }
  throw lastError;
};

const drainOrderWebhookQueue = (): void => {
  while (orderWebhookQueueState.activeCount < ORDER_WEBHOOK_MAX_CONCURRENCY && orderWebhookQueueState.pending.length > 0) {
    const item = orderWebhookQueueState.pending.shift();
    if (!item) break;

    orderWebhookQueueState.activeCount += 1;
    void runWebhookJobWithRetry(item.run)
      .then(() => markWebhookCompleted(item.key))
      .catch((error) => {
        markWebhookFailed(item.key);
        console.error(`[shopify webhook] Background processing failed for order ${item.key}:`, error);
      })
      .finally(() => {
        orderWebhookQueueState.activeCount -= 1;
        drainOrderWebhookQueue();
      });
  }
};

const enqueueOrderWebhook = (item: orderWebhookQueueItemType): boolean => {
  if (orderWebhookQueueState.pending.length >= ORDER_WEBHOOK_MAX_QUEUE_SIZE) {
    return false;
  }

  orderWebhookQueueState.pending.push(item);
  orderWebhookQueueState.inFlight.add(item.key);
  drainOrderWebhookQueue();
  return true;
};

const buildRecipient = (order: shopifyOrderPayloadType): orderPdfContextType['recipient'] => {
  const shipping = order.shipping_address;
  const name = [order.customer?.first_name, order.customer?.last_name].filter(Boolean).join(' ') || shipping?.name?.trim() || '';
  return {
    name,
    email: order.contact_email ?? order.customer?.email ?? order.email ?? '',
    phone: order.phone ?? shipping?.phone ?? '',
  };
};

const buildShippingAddress = (order: shopifyOrderPayloadType): orderPdfContextType['shippingAddress'] => {
  const shipping = order.shipping_address;
  const street = [shipping?.address1, shipping?.address2].filter(Boolean).join(', ');
  return {
    street,
    postalCode: shipping?.zip ?? '',
    city: [shipping?.city, shipping?.province].filter(Boolean).join(' '),
    country: shipping?.country ?? '',
  };
};

const processOrderWebhook = async (order: shopifyOrderPayloadType, configUrl: string, uvImageUrls: string | undefined, appOrigin: string): Promise<void> => {
  const fields: orderMetafieldInputType[] = [];
  fields.push({ key: 'config_url', type: 'url', value: configUrl });
  if (uvImageUrls) fields.push({ key: 'uv_image_urls', type: 'json', value: uvImageUrls });

  const { orderPdfUrl, cuttingPdfUrl } = await generateOrderPdfs({
    configUrl,
    appOrigin,
    orderNumber: order.name ?? `#${order.id}`,
    orderDate: formatCheckoutOrderDate(order.created_at ? new Date(order.created_at) : new Date()),
    recipient: buildRecipient(order),
    shippingAddress: buildShippingAddress(order),
    billingNote: "Corrisponde all'indirizzo di spedizione",
    money: {
      subtotal: toNumber(order.subtotal_price),
      discountAmount: toNumber(order.total_discounts),
      shippingCost: toNumber(order.total_shipping_price_set?.shop_money?.amount),
      grandTotal: toNumber(order.total_price),
    },
  });

  fields.push({ key: 'order_pdf_url', type: 'url', value: orderPdfUrl });
  fields.push({ key: 'cutting_pdf_url', type: 'url', value: cuttingPdfUrl });
  await setOrderMetafields(`gid://shopify/Order/${order.id}`, fields);
};

export async function POST(request: Request): Promise<Response> {
  const secret = getShopifyAdminClientSecret();
  if (!secret) {
    console.error('[shopify webhook] SHOPIFY_ADMIN_CLIENT_SECRET is not configured.');
    return Response.json({ error: 'Webhook not configured.' }, { status: 500 });
  }

  const rawBody = await request.text();
  const receivedHmac = request.headers.get('X-Shopify-Hmac-Sha256');

  if (!verifyShopifyWebhookSignature(rawBody, receivedHmac, secret)) {
    return Response.json({ error: 'Invalid webhook signature.' }, { status: 401 });
  }

  let order: shopifyOrderPayloadType;

  try {
    order = JSON.parse(rawBody) as shopifyOrderPayloadType;
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const attributes = order.note_attributes ?? [];
  const configUrl = readNoteAttribute(attributes, NOTE_ATTRIBUTE_KEYS.configUrl);
  const uvImageUrls = readNoteAttribute(attributes, NOTE_ATTRIBUTE_KEYS.uvImageUrls);

  if (!configUrl) {
    return Response.json({ skipped: true });
  }

  const orderKey = String(order.id);
  if (isWebhookAlreadyCompleted(orderKey) || isWebhookInFlight(orderKey)) {
    return Response.json({ ok: true, deduplicated: true });
  }

  const enqueued = enqueueOrderWebhook({
    key: orderKey,
    run: async () => {
      try {
        await processOrderWebhook(order, configUrl, uvImageUrls, new URL(request.url).origin);
      } catch (error) {
        console.error(`[shopify webhook] Failed to process order ${order.id} in background:`, error);
        throw error;
      }
    },
  });

  if (!enqueued) {
    console.error(`[shopify webhook] Queue is full. Unable to enqueue order ${order.id}.`);
    return Response.json({ error: 'Webhook queue is busy. Retry later.' }, { status: 503 });
  }

  return Response.json({
    accepted: true,
    queued: true,
    queueSize: orderWebhookQueueState.pending.length,
    activeWorkers: orderWebhookQueueState.activeCount,
  });
}
