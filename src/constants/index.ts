import type { catalogProductEntryType, homeProductGalleryBlockType, productCollectionType, uvBoundsType } from '@types';
import type { configuratorStepValueType } from '@configurator/types';

// --- Product catalog ---

const PRODUCT_COLLECTIONS: productCollectionType[] = [
  {
    id: 'first',
    label: 'Calcio',
    galleryTitle: 'COMPLETO GARA CALCIO',
    coverSrc: '/png/products/calcio.png',
  },
  {
    id: 'second',
    label: 'Pallavolo',
    galleryTitle: 'Completo gara pallavolo',
    coverSrc: '/png/products/pallavolo.png',
  },
  {
    id: 'third',
    label: 'Basket',
    galleryTitle: 'COMPLETO GARA basket',
    coverSrc: '/png/products/basket.png',
  },
  {
    id: 'fourd',
    label: 'Altro',
    galleryTitle: 'COMPLETO',
    coverSrc: '/png/products/altro.png',
  },
];

const CATALOG_PRODUCT_ENTRIES: catalogProductEntryType[] = [
  { collection: 'first', slug: 'baggio', name: 'Baggio', modelId: 'baggio_calcio', configurable: true },
  { collection: 'first', slug: 'cruijff', name: 'Shorts Cruijff', modelId: 'cruijff_calcio', configurable: true },
  { collection: 'first', slug: 'federer', name: 'Federer', configurable: false },
  { collection: 'first', slug: 'bernardi', name: 'Bernardi', modelId: 'bernardi_calcio', configurable: true },
  { collection: 'second', slug: 'bernardi_p', name: 'Bernardi PallaVolo', configurable: false },
  { collection: 'second', slug: 'federer_p', name: 'Maglia Federer', modelId: 'federer_calcio', configurable: true },
  { collection: 'second', slug: 'cruijff_p', name: 'Cruijff PallaVolo', configurable: false },
  { collection: 'second', slug: 'malone_p', name: 'Malone PallaVolo', configurable: false },
  { collection: 'second', slug: 'picci', name: 'Picci', configurable: false },
  { collection: 'second', slug: 'sylla_p', name: 'Sylla PallaVolo', configurable: false },
  { collection: 'second', slug: 'lollo_p', name: 'Lollo PallaVolo', configurable: false },
  { collection: 'third', slug: 'canotta_mb', name: 'Canotta Basket', configurable: false },
  { collection: 'third', slug: 'malone_b', name: 'Malone Basket', configurable: false },
  { collection: 'fourd', slug: 'federer_c', name: 'Federer Completo', configurable: false },
  { collection: 'fourd', slug: 'cruijff_c', name: 'Cruijff Completo', configurable: false },
];

const DEFAULT_CATALOG_PRODUCT = CATALOG_PRODUCT_ENTRIES.find((entry) => entry.slug === 'federer_p')!;

const HOME_PRODUCT_GALLERY_BLOCKS: homeProductGalleryBlockType[] = PRODUCT_COLLECTIONS.map((collection) => ({
  id: `home-${collection.id}`,
  title: collection.galleryTitle,
  items: CATALOG_PRODUCT_ENTRIES.filter((entry) => entry.collection === collection.id).map((entry) => ({
    collection: entry.collection,
    slug: entry.slug,
    alt: entry.name,
  })),
}));

// --- Configurator copy ---

const CONFIGURATOR_PRODUCT_DESCRIPTION = "Eventuali liste dei giocatori, quantità e taglie da inserire dopo in 'Completa config.'";
const CONFIGURATOR_GRADIENT_ACTIVE_LABEL = 'Sfumatura attiva';
const CONFIGURATOR_NAME_POSITION_SELECT_LABEL = 'Dove desideri inserire il nome?';
const CONFIGURATOR_NUMBER_POSITION_SELECT_LABEL = 'Dove desideri inserire il numero?';
const CONFIGURATOR_TESTO_POSITION_SELECT_LABEL = 'Dove desideri inserire il testo?';
const CONFIGURATOR_POSITION_SELECT_PLACEHOLDER = 'Seleziona posizione';
const CONFIGURATOR_UPLOADED_FILES_LABEL = 'File caricati';
const CONFIGURATOR_DEFAULT_BRAND_LOGO_TITLE = 'Brand Logo';
const CONFIGURATOR_DEFAULT_BRAND_LOGO_DESCRIPTION = 'I loghi di Realize cambieranno colore per adattarsi alla grafica senza preavviso.';
const CONFIGURATOR_DEFAULT_BRAND_LOGO_SRC = '/svg/logo.svg';

type configuratorStepMetaItemType = {
  value: configuratorStepValueType;
  label: string;
  step: number;
};

const CONFIGURATOR_STEP_META: configuratorStepMetaItemType[] = [
  { value: 'colore', label: 'Color', step: 1 },
  { value: 'design', label: 'Design', step: 2 },
  { value: 'shading', label: 'Sfumatura', step: 3 },
  { value: 'name', label: 'Nome', step: 4 },
  { value: 'number', label: 'Numero', step: 5 },
  { value: 'testo', label: 'Testo', step: 6 },
  { value: 'logo', label: 'Logo', step: 7 },
];

// --- Checkout ---

const CHECKOUT_MIN_ROW_QUANTITY = 1;
const CHECKOUT_MAX_ROW_QUANTITY = 999;
const CHECKOUT_DEFAULT_SIZE = 'M';

const clampCheckoutRowQuantity = (quantity: number) => Math.min(CHECKOUT_MAX_ROW_QUANTITY, Math.max(CHECKOUT_MIN_ROW_QUANTITY, quantity));

const CHECKOUT_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'] as const;
const CHECKOUT_SHIPPING_DAYS_LABEL = 'Spedizione entro 15-20 giorni lavorativi.';

const CHECKOUT_CONFIGURATION_TABLE_COLUMNS = [
  { id: 'row', header: 'Riga', size: 60, minSize: 60, maxSize: 60 },
  { id: 'size', header: 'Taglia', size: 88, minSize: 88, maxSize: 88 },
  { id: 'name', header: 'Nome', size: 213, minSize: 213, maxSize: 213 },
  { id: 'number', header: 'Numero', size: 116, minSize: 116, maxSize: 116 },
  { id: 'testo', header: 'Testo', size: 213, minSize: 213, maxSize: 213 },
  { id: 'quantity', header: 'Quantità', size: 116, minSize: 116, maxSize: 116 },
  { id: 'actions', header: 'Modifica', size: 116, minSize: 116, maxSize: 116 },
] as const;

const CHECKOUT_SIZE_SELECT_OPTIONS = CHECKOUT_SIZES.map((size) => ({ label: size, value: size }));
const CHECKOUT_TABLE_ADD_ROW_LABEL = 'Aggiungi riga';

const CHECKOUT_SUMMARY_TITLE = 'Riepilogo';
const CHECKOUT_SUMMARY_PROCEED_LABEL = 'Prosegui';
const CHECKOUT_SUMMARY_TIMELINE_TITLE = 'Se ordina ora';
const CHECKOUT_SUMMARY_SHIPPING_LABEL = 'Spese di spedizione';
const CHECKOUT_SUMMARY_TOTAL_LABEL = 'Importo Totale:';
const CHECKOUT_SUMMARY_VAT_LABEL = 'IVA 22% inclusa';

const CHECKOUT_SUMMARY_TRUST_ITEMS = [
  { icon: 'shirt', label: 'Prodotti 100% Made in Italy' },
  { icon: 'shieldCheck', label: 'Sicurezza Checkout' },
  { icon: 'truck', label: 'Consegna sicura e veloce' },
  { icon: 'star', label: 'Recensioni Trustpilot 4,8/5' },
] as const;

const CHECKOUT_SUMMARY_TIMELINE_STEPS = [
  { icon: 'clipboardCheck', label: 'Ordine', dateKey: 'order' },
  { icon: 'truck', label: 'Trasporto', dateKey: 'transport' },
  { icon: 'home', label: 'Consegnato', dateKey: 'delivered' },
] as const;

// --- UI palette & fonts ---

const PALETTE_COLORS = [
  '#FFFFFF',
  '#000000',
  '#818181',
  '#4A4A4A',
  '#CBAA6D',
  '#A3E8FF',
  '#1DC9C6',
  '#3E94F9',
  '#0027F8',
  '#03094D',
  '#C7E666',
  '#0E6F0C',
  '#F6FF00',
  '#FFCF00',
  '#681010',
  '#E33D02',
  '#D0021B',
  '#E70468',
  '#E45FB6',
  '#8D0FB4',
] as const;

const FONT_FAMILY_BY_NAME: Record<string, string> = {
  Oswald: 'Oswald, sans-serif',
  'Bebas Neue': '"Bebas Neue", sans-serif',
  Anton: 'Anton, sans-serif',
  'Russo One': '"Russo One", sans-serif',
  'Black Ops One': '"Black Ops One", sans-serif',
};

// --- 3D print pipeline ---

const FULL_UV_BOUNDS: uvBoundsType = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
const DEFAULT_PART_TEXTURE_SIZE = 4096;
const PRINT_ATLAS_WIDTH = 4096;
const PRINT_ATLAS_HEIGHT = Math.round((4900 / 9331) * PRINT_ATLAS_WIDTH);
const PATTERN_LAYER_COUNT = 2;
const NAME_SLOT_COUNT = 4;
const LOGO_SLOT_COUNT = 4;

/** Corrects text/number orientation relative to the print UV space on the garment. */
const PRINT_UPLOAD_ROTATION_DEG = 90;

const NAME_REFERENCE_FONT_SIZE = 400;
const NAME_STAMP_STROKE_WIDTH_MAX = 20;
const NAME_STAMP_FONT_SIZE_MIN = 50;

const NAME_GIZMO_BTN_FILL_COLOR = '#ffffff';
const NAME_GIZMO_BTN_ACTIVE_COLOR = '#dc2c6f';
const NAME_GIZMO_ICON_COLOR = '#1a1a1a';
const NAME_GIZMO_UI_ATLAS_SCALE = 80 / NAME_REFERENCE_FONT_SIZE;
const NAME_GIZMO_BTN_HALF_ATLAS = 120 * NAME_GIZMO_UI_ATLAS_SCALE;
const NAME_GIZMO_BTN_OUTSET_ATLAS = 80 * NAME_GIZMO_UI_ATLAS_SCALE;

const LOGO_UPLOAD_ROTATION_DEG = PRINT_UPLOAD_ROTATION_DEG;
const LOGO_SCALE_MIN = 0.25;
const LOGO_SCALE_MAX = 3;
const LOGO_MARK_REF_WIDTH = 283 * 3;
const LOGO_ATLAS_REF_WIDTH = 9331;
const LOGO_ATLAS_REF_HEIGHT = 4900;

// --- Logo upload ---

const LOGO_MAX_FILE_SIZE = 10 * 1024 * 1024;
const LOGO_ACCEPTED_INPUT = '.eps,.ps,.pdf,.ai,.svg,.png,.jpg,.jpeg,.bmp,.tiff,.tif,.webp';
const LOGO_SUPPORTED_LABEL = 'eps, ps, pdf, ai, svg, png, jpg, jpeg, bmp, tiff, tif';
const LOGO_ACCEPTED_EXTENSIONS = new Set(['eps', 'ps', 'pdf', 'ai', 'svg', 'png', 'jpg', 'jpeg', 'bmp', 'tiff', 'tif', 'webp']);
const LOGO_ACCEPTED_MIMES = new Set([
  'application/postscript',
  'application/eps',
  'application/pdf',
  'application/illustrator',
  'image/svg+xml',
  'image/png',
  'image/jpeg',
  'image/bmp',
  'image/tiff',
  'image/webp',
  '',
]);

// --- Media ---

const TUTORIAL_VIDEO_URL = 'https://youtu.be/dQw4w9WgXcQ?si=uL2ObwuN8FpWsScY';
const VIDEO_PLAYER_DEFAULT_VOLUME = 0.2;
const VIDEO_PLAYER_YOUTUBE_CONFIG = {
  enablejsapi: 1,
  rel: 0,
  iv_load_policy: 3,
  cc_load_policy: 0,
  fs: 0,
  disablekb: 1,
  playsinline: 1,
  color: 'white',
} as const;

export type { configuratorStepMetaItemType };

export {
  CATALOG_PRODUCT_ENTRIES,
  CHECKOUT_CONFIGURATION_TABLE_COLUMNS,
  CHECKOUT_DEFAULT_SIZE,
  CHECKOUT_MAX_ROW_QUANTITY,
  CHECKOUT_MIN_ROW_QUANTITY,
  CHECKOUT_SHIPPING_DAYS_LABEL,
  CHECKOUT_SIZE_SELECT_OPTIONS,
  CHECKOUT_SUMMARY_PROCEED_LABEL,
  CHECKOUT_SUMMARY_SHIPPING_LABEL,
  CHECKOUT_SUMMARY_TIMELINE_STEPS,
  CHECKOUT_SUMMARY_TIMELINE_TITLE,
  CHECKOUT_SUMMARY_TITLE,
  CHECKOUT_SUMMARY_TOTAL_LABEL,
  CHECKOUT_SUMMARY_TRUST_ITEMS,
  CHECKOUT_SUMMARY_VAT_LABEL,
  CHECKOUT_TABLE_ADD_ROW_LABEL,
  CONFIGURATOR_DEFAULT_BRAND_LOGO_DESCRIPTION,
  CONFIGURATOR_DEFAULT_BRAND_LOGO_SRC,
  CONFIGURATOR_DEFAULT_BRAND_LOGO_TITLE,
  CONFIGURATOR_GRADIENT_ACTIVE_LABEL,
  CONFIGURATOR_NAME_POSITION_SELECT_LABEL,
  CONFIGURATOR_NUMBER_POSITION_SELECT_LABEL,
  CONFIGURATOR_POSITION_SELECT_PLACEHOLDER,
  CONFIGURATOR_PRODUCT_DESCRIPTION,
  CONFIGURATOR_STEP_META,
  CONFIGURATOR_TESTO_POSITION_SELECT_LABEL,
  CONFIGURATOR_UPLOADED_FILES_LABEL,
  DEFAULT_CATALOG_PRODUCT,
  DEFAULT_PART_TEXTURE_SIZE,
  FONT_FAMILY_BY_NAME,
  FULL_UV_BOUNDS,
  HOME_PRODUCT_GALLERY_BLOCKS,
  LOGO_ACCEPTED_EXTENSIONS,
  LOGO_ACCEPTED_INPUT,
  LOGO_ACCEPTED_MIMES,
  LOGO_ATLAS_REF_HEIGHT,
  LOGO_ATLAS_REF_WIDTH,
  LOGO_MARK_REF_WIDTH,
  LOGO_MAX_FILE_SIZE,
  LOGO_SCALE_MAX,
  LOGO_SCALE_MIN,
  LOGO_SLOT_COUNT,
  LOGO_SUPPORTED_LABEL,
  LOGO_UPLOAD_ROTATION_DEG,
  NAME_GIZMO_BTN_ACTIVE_COLOR,
  NAME_GIZMO_BTN_FILL_COLOR,
  NAME_GIZMO_BTN_HALF_ATLAS,
  NAME_GIZMO_BTN_OUTSET_ATLAS,
  NAME_GIZMO_ICON_COLOR,
  NAME_REFERENCE_FONT_SIZE,
  NAME_SLOT_COUNT,
  NAME_STAMP_FONT_SIZE_MIN,
  NAME_STAMP_STROKE_WIDTH_MAX,
  PALETTE_COLORS,
  PATTERN_LAYER_COUNT,
  PRINT_ATLAS_HEIGHT,
  PRINT_ATLAS_WIDTH,
  PRINT_UPLOAD_ROTATION_DEG,
  PRODUCT_COLLECTIONS,
  TUTORIAL_VIDEO_URL,
  VIDEO_PLAYER_DEFAULT_VOLUME,
  VIDEO_PLAYER_YOUTUBE_CONFIG,
  clampCheckoutRowQuantity,
};
