import { after } from 'next/server';

import { getShopifyAdminClientSecret, ORDER_METAFIELD_NAMESPACE, setOrderMetafields, verifyShopifyWebhookSignature } from '@shopify';
import type { orderMetafieldInputType } from '@shopify';
import { formatCheckoutOrderDate } from '@utils/buildCheckoutOrderExport';
import { markWebhookHandled } from '@utils/webhookDeduplication';

import { generateOrderPdfs } from './generateOrderPdfs';
import type { orderPdfContextType } from './generateOrderPdfs';

export const dynamic = 'force-dynamic';

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

  // Claimed only after the signature check, so an unauthenticated caller cannot burn the id and
  // suppress the genuine delivery that follows.
  if (!markWebhookHandled(request.headers.get('X-Shopify-Webhook-Id'))) {
    return Response.json({ ok: true, duplicate: true });
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
    // No configuration snapshot — nothing to generate (e.g. an order placed outside the configurator).
    return Response.json({ skipped: true });
  }

  const appOrigin = resolveAppOrigin(request);

  // Shopify aborts a webhook that has not responded within ~5s and counts it as a failed delivery.
  // Rendering two PDFs (fetch the config, download and rasterize every UV image, upload both
  // documents) does not fit in that budget, so the previous inline `await` guaranteed a timeout:
  // Shopify retried while the first attempt was still running, producing duplicate uploads, and
  // after 19 failures it removes the subscription outright.
  //
  // We acknowledge immediately and run the work in `after()`, which Next keeps alive past the
  // response. The trade-off is that Shopify will not retry what fails here — hence the explicit
  // retry and the loud logging in `processOrderExports`.
  after(async () => {
    await processOrderExports(order, configUrl, uvImageUrls, appOrigin);
  });

  return Response.json({ ok: true, queued: true });
}

/**
 * The public origin used to build the download links embedded in the generated PDFs.
 *
 * Behind nginx/Coolify `request.url` is the internal upstream address (http://0.0.0.0:3000), which
 * would bake unreachable links into every order PDF — so an explicitly configured public origin
 * wins, and forwarded headers are the fallback.
 */
const resolveAppOrigin = (request: Request): string => {
  const configured = process.env.APP_PUBLIC_ORIGIN?.trim();
  if (configured) {
    return configured.replace(/\/$/, '');
  }

  const forwardedHost = request.headers.get('X-Forwarded-Host');
  if (forwardedHost) {
    const protocol = request.headers.get('X-Forwarded-Proto') ?? 'https';
    return `${protocol}://${forwardedHost}`;
  }

  return new URL(request.url).origin;
};

const PDF_GENERATION_ATTEMPTS = 3;
const PDF_RETRY_BASE_DELAY_MS = 2_000;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const processOrderExports = async (order: shopifyOrderPayloadType, configUrl: string, uvImageUrls: string | undefined, appOrigin: string): Promise<void> => {
  const fields: orderMetafieldInputType[] = [];
  fields.push({ key: 'config_url', type: 'url', value: configUrl });
  if (uvImageUrls) fields.push({ key: 'uv_image_urls', type: 'json', value: uvImageUrls });

  for (let attempt = 1; attempt <= PDF_GENERATION_ATTEMPTS; attempt += 1) {
    try {
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
      break;
    } catch (error) {
      console.error(`[shopify webhook] PDF generation attempt ${attempt}/${PDF_GENERATION_ATTEMPTS} failed for order ${order.id}:`, error);

      if (attempt === PDF_GENERATION_ATTEMPTS) {
        // Shopify already got its 200, so nothing will redeliver this. Persist what we have — the
        // config URL alone still lets an operator regenerate the documents from /dev or by hand.
        console.error(`[shopify webhook] Giving up on PDFs for order ${order.id}; persisting config_url only.`);
        break;
      }

      await delay(PDF_RETRY_BASE_DELAY_MS * attempt);
    }
  }

  try {
    await setOrderMetafields(`gid://shopify/Order/${order.id}`, fields);
  } catch (error) {
    console.error(`[shopify webhook] Failed to set ${ORDER_METAFIELD_NAMESPACE} metafields for order ${order.id}:`, error);
  }
};
