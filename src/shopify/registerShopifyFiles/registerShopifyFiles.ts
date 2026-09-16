import { shopifyAdminGraphql } from '@shopify/adminClient';
import type { registerShopifyFileInputType } from '@shopify/stagedUpload';

const FILE_CREATE_MUTATION = `#graphql
  mutation FileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        fileErrors {
          code
          message
        }
        ... on GenericFile {
          url
        }
        ... on MediaImage {
          image {
            url
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const FILE_STATUS_QUERY = `#graphql
  query FileStatus($id: ID!) {
    node(id: $id) {
      ... on GenericFile {
        url
        fileStatus
        fileErrors {
          code
          message
        }
      }
      ... on MediaImage {
        fileStatus
        fileErrors {
          code
          message
        }
        image {
          url
        }
      }
    }
  }
`;

type fileNodeType = {
  id: string;
  fileStatus: string;
  fileErrors?: { code?: string | null; message?: string | null }[] | null;
  url?: string | null;
  image?: { url?: string | null } | null;
};

type fileCreateResponseType = {
  fileCreate?: {
    files?: fileNodeType[];
    userErrors?: { field?: string[] | null; message: string }[];
  };
};

type fileStatusResponseType = {
  node?: fileNodeType | null;
};

const FILE_STATUS_POLL_INITIAL_DELAY_MS = 1_000;
const FILE_STATUS_POLL_MAX_DELAY_MS = 8_000;
const FILE_STATUS_POLL_BACKOFF_FACTOR = 1.6;

const DEFAULT_FILE_STATUS_POLL_TIMEOUT_MS = 5_000;

const FILE_STATUS_FAILED = 'FAILED';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const resolveFileUrl = (file: fileNodeType): string | null => file.url ?? file.image?.url ?? null;

const formatFileErrors = (file: fileNodeType | null): string => {
  const errors = file?.fileErrors ?? [];
  if (!errors.length) return '';
  return ` Errors: ${errors.map((error) => [error.code, error.message].filter(Boolean).join(': ')).join('; ')}.`;
};

type pollFileUrlResultType = {
  url: string | null;
  lastStatus: string | null;
  pollCount: number;
};

const pollFileUrl = async (fileId: string, timeoutMs: number): Promise<pollFileUrlResultType> => {
  const deadline = Date.now() + timeoutMs;
  let delayMs = FILE_STATUS_POLL_INITIAL_DELAY_MS;
  let lastStatus: string | null = null;
  let pollCount = 0;

  while (Date.now() < deadline) {
    const remainingMs = deadline - Date.now();
    await sleep(Math.min(delayMs, remainingMs));

    const data = await shopifyAdminGraphql<fileStatusResponseType>(FILE_STATUS_QUERY, { id: fileId });
    const node = data.node ?? null;
    pollCount += 1;
    lastStatus = node?.fileStatus ?? lastStatus;

    const url = node ? resolveFileUrl(node) : null;
    if (url) return { url, lastStatus, pollCount };

    if (node?.fileStatus === FILE_STATUS_FAILED) {
      throw new Error(`[shopify] File "${fileId}" failed processing (fileStatus: ${FILE_STATUS_FAILED}).${formatFileErrors(node)}`);
    }

    delayMs = Math.min(Math.round(delayMs * FILE_STATUS_POLL_BACKOFF_FACTOR), FILE_STATUS_POLL_MAX_DELAY_MS);
  }

  return { url: null, lastStatus, pollCount };
};

const resolveRegisteredFileUrl = async (file: fileNodeType, timeoutMs: number): Promise<string> => {
  const immediateUrl = resolveFileUrl(file);
  if (immediateUrl) return immediateUrl;

  if (file.fileStatus === FILE_STATUS_FAILED) {
    throw new Error(`[shopify] File "${file.id}" failed processing (fileStatus: ${FILE_STATUS_FAILED}).${formatFileErrors(file)}`);
  }

  const { url, lastStatus, pollCount } = await pollFileUrl(file.id, timeoutMs);
  if (url) return url;

  throw new Error(
    `[shopify] File "${file.id}" did not finish processing within ${timeoutMs}ms (${pollCount} polls, last fileStatus: ${lastStatus ?? 'unknown'}).`,
  );
};

type registerShopifyFilesOptionsType = {
  fileStatusPollTimeoutMs?: number;
};

const registerShopifyFiles = async (files: registerShopifyFileInputType[], options: registerShopifyFilesOptionsType = {}): Promise<string[]> => {
  if (!files.length) return [];

  const timeoutMs = options.fileStatusPollTimeoutMs ?? DEFAULT_FILE_STATUS_POLL_TIMEOUT_MS;

  const data = await shopifyAdminGraphql<fileCreateResponseType>(FILE_CREATE_MUTATION, {
    files: files.map((file) => ({ originalSource: file.resourceUrl, contentType: file.contentType })),
  });

  const userErrors = data.fileCreate?.userErrors ?? [];
  if (userErrors.length) {
    throw new Error(`[shopify] fileCreate failed: ${userErrors.map((error) => error.message).join('; ')}`);
  }

  const createdFiles = data.fileCreate?.files ?? [];
  if (createdFiles.length !== files.length) {
    throw new Error(`[shopify] fileCreate returned ${createdFiles.length} files for ${files.length} inputs.`);
  }

  return Promise.all(createdFiles.map((file) => resolveRegisteredFileUrl(file, timeoutMs)));
};

export { DEFAULT_FILE_STATUS_POLL_TIMEOUT_MS, registerShopifyFiles };
export type { registerShopifyFilesOptionsType };
