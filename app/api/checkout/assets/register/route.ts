import { registerShopifyFiles } from '@shopify/registerShopifyFiles';
import type { shopifyFileContentType } from '@shopify/stagedUpload';
import { validateRegisterRequest } from '@utils/checkoutAssetUploadPolicy';
import { allowRequest } from '@utils/requestRateLimit';

export const dynamic = 'force-dynamic';

const RATE_LIMIT = { scope: 'assets-register', limit: 30, windowMs: 60_000 };

type registerRequestFileType = {
  id: string;
  resourceUrl: string;
  contentType: shopifyFileContentType;
};

export async function POST(request: Request): Promise<Response> {
  if (!allowRequest(request, RATE_LIMIT)) {
    return Response.json({ error: 'Too many requests.' }, { status: 429 });
  }

  let body: { files?: registerRequestFileType[] };

  try {
    body = (await request.json()) as { files?: registerRequestFileType[] };
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const files = body.files ?? [];
  if (!files.length) {
    return Response.json({ error: 'Missing files.' }, { status: 400 });
  }

  const violation = validateRegisterRequest(files);
  if (violation) {
    return Response.json(violation, { status: 400 });
  }

  try {
    const urls = await registerShopifyFiles(
      files.map((file) => ({
        resourceUrl: file.resourceUrl,
        contentType: file.contentType,
      })),
    );

    return Response.json({
      files: files.map((file, index) => ({
        id: file.id,
        url: urls[index],
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown file registration error.';
    return Response.json({ error: message }, { status: 502 });
  }
}
