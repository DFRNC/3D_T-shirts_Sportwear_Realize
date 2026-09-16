'use client';

const DOWNLOAD_URL_REVOKE_DELAY_MS = 10_000;

const resolveFilename = (name: string) =>
  name
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase() || 'prodotto';

const resolveExtension = (source: string) => {
  const dataMatch = source.match(/^data:image\/([a-z0-9+-]+)/i);
  if (dataMatch) return dataMatch[1].toLowerCase();

  const pathMatch = source.split('?')[0].match(/\.([a-z0-9]+)$/i);
  return pathMatch ? pathMatch[1].toLowerCase() : 'png';
};

const downloadImageSource = async (source: string, filename: string) => {
  if (!source) return false;

  try {
    const response = await fetch(source);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = objectUrl;
    anchor.download = `${resolveFilename(filename)}.${resolveExtension(source)}`;
    anchor.click();

    window.setTimeout(() => URL.revokeObjectURL(objectUrl), DOWNLOAD_URL_REVOKE_DELAY_MS);
    return true;
  } catch (error) {
    console.error('[checkout] Failed to download product image.', error);
    return false;
  }
};

export { downloadImageSource };
