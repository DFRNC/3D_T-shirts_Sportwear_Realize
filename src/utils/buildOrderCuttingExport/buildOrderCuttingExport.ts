import type { buildOrderCuttingExportParamsType, orderCuttingExportType } from '@types';
import { getModel } from '@utils/garmentCatalog/garmentCatalog';
import { buildOrderCuttingExportSteps } from '@utils/buildOrderCuttingExportSteps';

const DEFAULT_CUSTOMER = {
  company: '',
  vatOrTaxCode: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
  email: '',
  pec: '',
};

const buildOrderCuttingExport = ({
  products,
  configurations,
  orderNumber = '',
  orderDate = '',
  customer = {},
}: buildOrderCuttingExportParamsType): orderCuttingExportType => ({
  orderNumber,
  orderDate,
  customer: { ...DEFAULT_CUSTOMER, ...customer },
  products: products.map((product) => {
    const model = getModel(product.modelId);
    const configuration = configurations[product.cartItemId];
    const modelLabel = model?.id ?? product.modelId;

    return {
      cartItemId: product.cartItemId,
      productTitle: product.business.name,
      modelId: product.modelId,
      modelLabel,
      printAtlas: {
        width: model?.printAtlas?.width ?? 2048,
        height: model?.printAtlas?.height ?? 2048,
      },
      articles: product.rows.map((row) => ({
        modelLabel,
        size: row.size,
        quantity: row.quantity,
        jerseyName: row.name.trim() || '—',
        number: row.number.trim() || '—',
      })),
      steps: configuration && model ? buildOrderCuttingExportSteps(configuration, model) : [],
    };
  }),
});

export { buildOrderCuttingExport };
