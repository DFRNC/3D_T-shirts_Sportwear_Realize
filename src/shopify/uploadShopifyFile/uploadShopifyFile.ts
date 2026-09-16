import { createStagedUploadTargets } from '@shopify/createStagedUploadTargets';
import { registerShopifyFiles } from '@shopify/registerShopifyFiles';
import { uploadBlobToStagedTarget } from '@utils/uploadBlobToStagedTarget';

type uploadShopifyFileOptionsType = {
  fileStatusPollTimeoutMs?: number;
};

const uploadShopifyFile = async (file: Blob, filename: string, mimeType: string, options: uploadShopifyFileOptionsType = {}): Promise<string> => {
  const contentType = mimeType.startsWith('image/') ? 'IMAGE' : 'FILE';
  const [target] = await createStagedUploadTargets([{ filename, mimeType, fileSize: file.size }]);

  await uploadBlobToStagedTarget(target, file);

  const [url] = await registerShopifyFiles([{ resourceUrl: target.resourceUrl, contentType }], {
    fileStatusPollTimeoutMs: options.fileStatusPollTimeoutMs,
  });
  return url;
};

export { uploadShopifyFile };
export type { uploadShopifyFileOptionsType };
