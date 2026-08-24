import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { renderToBuffer } from '@react-pdf/renderer';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';

import { shopifyAdminGraphql } from '@shopify/adminClient';
import { buildCheckoutOrderExport } from '@utils/buildCheckoutOrderExport';
import { CheckoutOrderExportPdfDocument } from '@utils/buildCheckoutOrderExportPdf/CheckoutOrderExportPdfDocument';
import { buildOrderCuttingExport } from '@utils/buildOrderCuttingExport';
import { buildDownloadPreviewKey, OrderCuttingExportPdfDocument } from '@utils/buildOrderCuttingExportPdf/OrderCuttingExportPdfDocument';
import { buildPublicAssetDownloadUrl } from '@utils/resolvePublicAppOrigin';

const ORDER_QUERY = `#graphql
  query OrderForPdfRegen($query: String!) {
    orders(first: 1, query: $query) {
      edges {
        node {
          id
          name
          createdAt
          email
          phone
          subtotalPriceSet { shopMoney { amount } }
          totalDiscountsSet { shopMoney { amount } }
          totalShippingPriceSet { shopMoney { amount } }
          totalPriceSet { shopMoney { amount } }
          customer { firstName lastName email }
          shippingAddress { name company address1 address2 zip city province country phone }
          billingAddress { name company address1 address2 zip city province country phone }
          customAttributes { key value }
          metafields(first: 100) { edges { node { namespace key value } } }
        }
      }
    }
  }
`;

const isHttpUrl = (value: unknown): value is string => typeof value === 'string' && /^https?:/i.test(value);
const toNumber = (value: unknown): number => (Number.isFinite(Number(value)) ? Number(value) : 0);

const fetchImageAsDataUrl = async (url: string): Promise<string | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const buffer = Buffer.from(await response.arrayBuffer());
    const mime = response.headers.get('content-type')?.split(';')[0].trim() || 'image/png';
    if (/image\/(?:png|jpe?g)/i.test(mime)) return `data:${mime};base64,${buffer.toString('base64')}`;
    const png = await sharp(buffer).png().toBuffer();
    return `data:image/png;base64,${png.toString('base64')}`;
  } catch {
    return null;
  }
};

const renderLogoDataUrl = async (): Promise<string | null> => {
  try {
    const svg = await readFile(path.join(process.cwd(), 'public', 'svg', 'logo_you.svg'));
    const png = await sharp(svg).png().toBuffer();
    return `data:image/png;base64,${png.toString('base64')}`;
  } catch {
    return null;
  }
};

const resolveExtension = (url: string): string => {
  const pathname = url.split('?')[0] ?? url;
  const match = /\.([a-z0-9]+)$/i.exec(pathname);
  return match ? match[1].toLowerCase() : 'png';
};

const formatOrderDate = (date: Date) => new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);

describe('regenerate order pdfs', () => {
  it('renders order + cutting PDFs with public download links', async () => {
    const orderNumber = process.env.ORDER_NUMBER ?? '1040';
    const appOrigin = process.env.APP_ORIGIN ?? null;
    const outDir = process.env.OUT_DIR ?? path.join(process.cwd(), 'regenerated-pdfs');

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const data = await shopifyAdminGraphql<any>(ORDER_QUERY, { query: `name:#${orderNumber}` });
    const order = data.orders.edges[0]?.node;
    expect(order, `order #${orderNumber} not found`).toBeTruthy();

    const attributes = new Map<string, string>(order.customAttributes.map((a: any) => [a.key, a.value]));
    const metafields = new Map<string, string>(order.metafields.edges.map(({ node }: any) => [node.key, node.value]));
    const configUrl = attributes.get('_config_url') ?? metafields.get('config_url');
    expect(configUrl, 'missing _config_url on order').toBeTruthy();
    console.log('[regen] order', order.name, 'configUrl', configUrl);

    const configResponse = await fetch(configUrl as string);
    expect(configResponse.ok, `config.json fetch failed ${configResponse.status}`).toBe(true);
    const config = (await configResponse.json()) as any;

    const products = config.products.map((product: any) => ({
      cartItemId: product.cartItemId,
      modelId: product.modelId,
      business: product.business,
      rowPreset: { size: product.lines[0]?.size ?? 'M', name: '', number: '', testoTexts: [] },
      rows: product.lines.map((line: any, index: number) => ({
        id: `${product.cartItemId}:${index}`,
        size: line.size,
        name: line.name,
        number: line.number,
        testoTexts: line.testoTexts,
        quantity: line.quantity,
      })),
    }));

    const configurations: Record<string, any> = {};
    const previews: Record<string, string> = {};
    config.products.forEach((product: any) => {
      if (product.configuration) configurations[product.cartItemId] = product.configuration;
      if (product.previewUrl) previews[product.cartItemId] = product.previewUrl;
    });
    const cartItems = config.products.map((product: any) => ({ id: product.cartItemId, modelId: product.modelId }));

    const address = order.shippingAddress ?? order.billingAddress;
    const shippingAddress = {
      company: address?.company ?? '',
      street: [address?.address1, address?.address2].filter(Boolean).join(', '),
      postalCode: address?.zip ?? '',
      city: address?.city ?? '',
      province: address?.province ?? '',
      country: address?.country ?? '',
    };
    const recipient = {
      name: [order.customer?.firstName, order.customer?.lastName].filter(Boolean).join(' ') || address?.name?.trim() || '',
      email: order.email ?? order.customer?.email ?? '',
      phone: order.phone ?? address?.phone ?? '',
    };
    const orderDate = formatOrderDate(new Date(order.createdAt));

    const orderExportBase = buildCheckoutOrderExport({
      products,
      cartItems,
      previews,
      subtotal: toNumber(order.subtotalPriceSet?.shopMoney?.amount),
      discountAmount: toNumber(order.totalDiscountsSet?.shopMoney?.amount),
      shippingCost: toNumber(order.totalShippingPriceSet?.shopMoney?.amount),
      grandTotal: toNumber(order.totalPriceSet?.shopMoney?.amount),
      orderMeta: { orderNumber: order.name, orderDate },
    });
    const orderExport = { ...orderExportBase, recipient, shippingAddress, billingNote: 'Corrisponde all indirizzo di spedizione' };

    const logoSrc = await renderLogoDataUrl();
    const previewBySrc = new Map<string, string | null>();
    const previewSrcs = [...new Set(orderExport.lines.map((line: any) => line.previewSrc).filter(isHttpUrl))];
    await Promise.all(previewSrcs.map(async (src) => previewBySrc.set(src, await fetchImageAsDataUrl(src))));

    const [firstName, ...lastNameParts] = recipient.name.split(' ');
    const cuttingExport = buildOrderCuttingExport({
      products,
      configurations,
      orderNumber: order.name,
      orderDate,
      customer: {
        firstName: firstName ?? '',
        lastName: lastNameParts.join(' '),
        company: shippingAddress.company,
        address: shippingAddress.street,
        city: shippingAddress.city,
        province: shippingAddress.province,
        postalCode: shippingAddress.postalCode,
        email: recipient.email,
      },
    });

    const downloadPreviewByKey = new Map<string, string | null>();
    const downloadLinkByKey = new Map<string, string>();
    await Promise.all(
      config.products.flatMap((product: any) =>
        (product.uvImages ?? [])
          .filter((uv: any) => isHttpUrl(uv.url))
          .map(async (uv: any) => {
            const key = buildDownloadPreviewKey(product.cartItemId, uv.label);
            downloadPreviewByKey.set(key, await fetchImageAsDataUrl(uv.url));
            downloadLinkByKey.set(key, buildPublicAssetDownloadUrl(appOrigin, uv.url, `${uv.label}.${resolveExtension(uv.url)}`));
          }),
      ),
    );

    console.log('[regen] download links:');
    downloadLinkByKey.forEach((link, key) => console.log('  ', key, '->', link));

    const [orderPdfBuffer, cuttingPdfBuffer] = await Promise.all([
      renderToBuffer(<CheckoutOrderExportPdfDocument exportData={orderExport as any} images={{ logoSrc, previewBySrc }} />),
      renderToBuffer(<OrderCuttingExportPdfDocument exportData={cuttingExport} images={{ downloadPreviewByKey, downloadLinkByKey }} />),
    ]);

    await mkdir(outDir, { recursive: true });
    const slug = String(order.name).replace(/[^a-z0-9]+/gi, '');
    await writeFile(path.join(outDir, `order-${slug}.pdf`), orderPdfBuffer);
    await writeFile(path.join(outDir, `cutting-${slug}.pdf`), cuttingPdfBuffer);
    console.log('[regen] written to', outDir);

    expect(orderPdfBuffer.byteLength).toBeGreaterThan(1000);
    expect(cuttingPdfBuffer.byteLength).toBeGreaterThan(1000);
  }, 300000);
});
