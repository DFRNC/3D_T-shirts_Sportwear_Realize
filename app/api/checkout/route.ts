import { createCheckoutCart } from '@shopify';
import type { createCheckoutPayloadType } from '@shopify';
import { CONFIG_URL_ATTRIBUTE_KEY, hasCheckoutConfigAttribute } from '@utils/assertCheckoutConfigAttribute';

export const dynamic = 'force-dynamic';

export async function POST(request: Request): Promise<Response> {
  let payload: createCheckoutPayloadType;

  try {
    payload = (await request.json()) as createCheckoutPayloadType;
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!payload?.lines?.length) {
    return Response.json({ error: 'Missing checkout lines.' }, { status: 400 });
  }

  if (!hasCheckoutConfigAttribute(payload.attributes)) {
    console.error('[checkout] Refused to create a checkout without the "%s" attribute — the configuration would be lost.', CONFIG_URL_ATTRIBUTE_KEY);
    return Response.json({ error: 'Missing configuration assets. The checkout was not created.' }, { status: 422 });
  }

  try {
    const result = await createCheckoutCart(payload);
    return Response.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown checkout error.';
    return Response.json({ error: message }, { status: 502 });
  }
}
