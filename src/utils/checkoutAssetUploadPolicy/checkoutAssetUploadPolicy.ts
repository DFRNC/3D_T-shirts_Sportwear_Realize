/**
 * Server-side limits for the two unauthenticated asset endpoints.
 *
 * `/api/checkout/assets/staged-targets` and `/api/checkout/assets/register` have to stay open — the
 * browser calls them before any order exists, so there is no session to authenticate against. That
 * makes them a standing invitation to use the merchant's Shopify Files as free storage, so the
 * request itself is constrained instead: only what the configurator actually produces gets through.
 *
 * The configurator uploads PNG previews, PNG UV atlases and one JSON configuration per checkout —
 * nothing else belongs on this path.
 */
const ALLOWED_MIME_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp', 'application/json']);

const MAX_FILES_PER_REQUEST = 50;
const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024;
const MAX_TOTAL_SIZE_BYTES = 200 * 1024 * 1024;
const MAX_FILENAME_LENGTH = 200;

/** Where Shopify's `stagedUploadsCreate` hands back its `resourceUrl`. */
const ALLOWED_RESOURCE_URL_HOSTS = new Set(['shopify-staged-uploads.storage.googleapis.com', 'storage.googleapis.com']);

type uploadPolicyViolationType = { error: string };

const isSafeFilename = (filename: string): boolean =>
  filename.length > 0 && filename.length <= MAX_FILENAME_LENGTH && !filename.includes('/') && !filename.includes('\\') && !filename.includes('\0');

type stagedTargetCandidateType = {
  filename?: unknown;
  mimeType?: unknown;
  fileSize?: unknown;
};

const validateStagedTargetRequest = (files: stagedTargetCandidateType[]): uploadPolicyViolationType | null => {
  if (files.length > MAX_FILES_PER_REQUEST) {
    return { error: `Too many files: ${files.length} (max ${MAX_FILES_PER_REQUEST}).` };
  }

  let totalSize = 0;

  for (const file of files) {
    if (typeof file.filename !== 'string' || !isSafeFilename(file.filename)) {
      return { error: 'Invalid filename.' };
    }

    if (typeof file.mimeType !== 'string' || !ALLOWED_MIME_TYPES.has(file.mimeType)) {
      return { error: `Unsupported content type: ${String(file.mimeType)}.` };
    }

    if (typeof file.fileSize !== 'number' || !Number.isFinite(file.fileSize) || file.fileSize <= 0) {
      return { error: 'Invalid file size.' };
    }

    if (file.fileSize > MAX_FILE_SIZE_BYTES) {
      return { error: `File exceeds the ${Math.floor(MAX_FILE_SIZE_BYTES / 1024 / 1024)} MB limit.` };
    }

    totalSize += file.fileSize;
  }

  if (totalSize > MAX_TOTAL_SIZE_BYTES) {
    return { error: `Request exceeds the ${Math.floor(MAX_TOTAL_SIZE_BYTES / 1024 / 1024)} MB total limit.` };
  }

  return null;
};

type registerCandidateType = {
  resourceUrl?: unknown;
  contentType?: unknown;
};

const validateRegisterRequest = (files: registerCandidateType[]): uploadPolicyViolationType | null => {
  if (files.length > MAX_FILES_PER_REQUEST) {
    return { error: `Too many files: ${files.length} (max ${MAX_FILES_PER_REQUEST}).` };
  }

  for (const file of files) {
    if (file.contentType !== 'IMAGE' && file.contentType !== 'FILE') {
      return { error: 'Invalid content type.' };
    }

    if (typeof file.resourceUrl !== 'string') {
      return { error: 'Invalid resource URL.' };
    }

    let parsed: URL;

    try {
      parsed = new URL(file.resourceUrl);
    } catch {
      return { error: 'Invalid resource URL.' };
    }

    // Without this the endpoint would import any URL on the internet into the merchant's Files.
    if (parsed.protocol !== 'https:' || !ALLOWED_RESOURCE_URL_HOSTS.has(parsed.hostname)) {
      return { error: 'Resource URL host is not allowed.' };
    }
  }

  return null;
};

export { ALLOWED_MIME_TYPES, MAX_FILE_SIZE_BYTES, MAX_FILES_PER_REQUEST, MAX_TOTAL_SIZE_BYTES, validateRegisterRequest, validateStagedTargetRequest };
