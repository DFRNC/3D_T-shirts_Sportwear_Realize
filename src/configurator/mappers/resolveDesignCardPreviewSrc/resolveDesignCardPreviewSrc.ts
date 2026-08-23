const DEFAULT_DESIGN_CARD_PREVIEW_DIR = '/svg/design';
const BASKET_DESIGN_CARD_PREVIEW_DIR = '/svg/design/basket';

const isBasketProductId = (productId?: string): boolean => Boolean(productId?.endsWith('_basket'));

const resolveDesignCardPreviewDir = (productId?: string): string =>
  isBasketProductId(productId) ? BASKET_DESIGN_CARD_PREVIEW_DIR : DEFAULT_DESIGN_CARD_PREVIEW_DIR;

const normalizeDesignId = (value: string): string | null => {
  const trimmed = value.trim().toLowerCase();

  const fromDesignPrefix = trimmed.match(/^design[_-]?(\d{1,2})$/);
  if (fromDesignPrefix) {
    return `design_${fromDesignPrefix[1].padStart(2, '0')}`;
  }

  const fromNumber = trimmed.match(/^(\d{1,2})$/);
  if (fromNumber) {
    return `design_${fromNumber[1].padStart(2, '0')}`;
  }

  return null;
};

const parseDesignIdFromPatternName = (patternName: string): string | null => {
  const match = patternName.match(/design\s*(\d{1,2})/i);
  if (!match) return null;

  return `design_${match[1].padStart(2, '0')}`;
};

const resolvePatternDesignId = (patternName: string, designId?: string): string | null => {
  if (designId) {
    return normalizeDesignId(designId);
  }

  return parseDesignIdFromPatternName(patternName);
};

const resolveDesignCardPreviewSrc = (patternName: string, designId?: string, productId?: string): string => {
  const id = resolvePatternDesignId(patternName, designId);
  if (!id) return '';

  return `${resolveDesignCardPreviewDir(productId)}/${id}.svg`;
};

export {
  normalizeDesignId,
  parseDesignIdFromPatternName,
  resolveDesignCardPreviewDir,
  resolveDesignCardPreviewSrc,
  resolvePatternDesignId,
};
