'use client';

import type { orderCuttingExportType } from '@types';
import { ORDER_CUTTING_EXPORT_DOCUMENT_STYLES } from '@molecules/OrderCuttingExportPreview/orderCuttingExportDocumentStyles';
import { OrderCuttingExportDownloadCard } from '@molecules/OrderCuttingExportPreview/OrderCuttingExportDownloadCard';

type orderCuttingExportDocumentPropsType = {
  exportData: orderCuttingExportType;
};

const OrderCuttingExportDocument = ({ exportData }: orderCuttingExportDocumentPropsType) => {
  const { customer, products } = exportData;

  return (
    <>
      <style>{ORDER_CUTTING_EXPORT_DOCUMENT_STYLES}</style>
      <div className="cutting-export" data-testid="order-cutting-export-document">
        <h1 className="cutting-export__title">Modulo ordine cliente</h1>
        <p className="cutting-export__subtitle">Dati generali del cliente privato o società sportiva</p>

        <table className="cutting-export__table">
          <tbody>
            <tr>
              <th>Numero d&apos;ordine</th>
              <td>{exportData.orderNumber}</td>
              <th>Data ordine</th>
              <td>{exportData.orderDate}</td>
            </tr>
            <tr>
              <th>Azienda</th>
              <td>{customer.company}</td>
              <th>Partita IVA o cod. fiscale</th>
              <td>{customer.vatOrTaxCode}</td>
            </tr>
            <tr>
              <th>Nome</th>
              <td>{customer.firstName}</td>
              <th>Cognome</th>
              <td>{customer.lastName}</td>
            </tr>
            <tr>
              <th>Indirizzo</th>
              <td>{customer.address}</td>
              <th>Località</th>
              <td>{customer.city}</td>
            </tr>
            <tr>
              <th>Provincia</th>
              <td>{customer.province}</td>
              <th>CAP</th>
              <td>{customer.postalCode}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>{customer.email}</td>
              <th>PEC</th>
              <td>{customer.pec}</td>
            </tr>
          </tbody>
        </table>

        {products.map((product) => (
          <section key={product.cartItemId} className="cutting-export__product" aria-label={product.productTitle}>
            <header className="cutting-export__product-header">
              <h2 className="cutting-export__product-title">{product.productTitle}</h2>
              <p className="cutting-export__product-meta">
                Modello: {product.modelLabel} · Print atlas: {product.printAtlas.width}×{product.printAtlas.height}px
              </p>
            </header>

            <div className="cutting-export__steps">
              {product.steps.map((step) => (
                <article key={`${product.cartItemId}-${step.key}`} className="cutting-export__step">
                  <header className="cutting-export__step-header">
                    <span className="cutting-export__step-index">{step.step}.</span>
                    <span className="cutting-export__step-title">{step.title}</span>
                  </header>

                  <div className="cutting-export__step-body">
                    {step.isConfigured ? (
                      <>
                        {step.details.length > 0 ? (
                          <dl className="cutting-export__step-details">
                            {step.details.map((detail) => (
                              <div key={`${step.key}-${detail.label}`} className="cutting-export__step-detail">
                                <dt>{detail.label}</dt>
                                <dd>{detail.value}</dd>
                              </div>
                            ))}
                          </dl>
                        ) : null}

                        {step.downloadFiles.length > 0 ? (
                          <div className="cutting-export__downloads">
                            {step.downloadFiles.map((file) => (
                              <OrderCuttingExportDownloadCard
                                key={file.key}
                                file={file}
                                printAtlas={product.printAtlas}
                              />
                            ))}
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <p className="cutting-export__step-empty">{step.emptyMessage}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <table className="cutting-export__articles-table">
              <thead>
                <tr>
                  <th colSpan={5}>Articoli ordine</th>
                </tr>
                <tr>
                  <th>Modello</th>
                  <th>Taglia</th>
                  <th>PZ</th>
                  <th>Nome maglia</th>
                  <th>Numero</th>
                </tr>
              </thead>
              <tbody>
                {product.articles.map((article) => (
                  <tr key={`${product.cartItemId}-${article.size}-${article.jerseyName}-${article.number}`}>
                    <td>{article.modelLabel}</td>
                    <td>{article.size}</td>
                    <td>{article.quantity}</td>
                    <td>{article.jerseyName}</td>
                    <td>{article.number}</td>
                  </tr>
                ))}
                {Array.from({ length: Math.max(0, 4 - product.articles.length) }).map((_, index) => (
                  <tr key={`${product.cartItemId}-empty-row-${index}`}>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </>
  );
};

export { OrderCuttingExportDocument };
