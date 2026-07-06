const ORDER_CUTTING_EXPORT_DOCUMENT_STYLES = `
.cutting-export {
  box-sizing: border-box;
  width: 794px;
  max-width: 100%;
  margin: 0 auto;
  padding: 24px 28px 32px;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  line-height: 1.35;
  background: #fff;
}

.cutting-export *,
.cutting-export *::before,
.cutting-export *::after {
  box-sizing: border-box;
}

.cutting-export__title {
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}

.cutting-export__subtitle {
  margin: 0 0 16px;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}

.cutting-export__table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 18px;
  table-layout: fixed;
}

.cutting-export__table th,
.cutting-export__table td {
  border: 1px solid #000;
  padding: 6px 8px;
  vertical-align: middle;
  text-align: left;
  word-break: break-word;
}

.cutting-export__table th {
  width: 22%;
  font-weight: 700;
  background: #fff;
}

.cutting-export__table td {
  font-weight: 400;
}

.cutting-export__product {
  margin-bottom: 24px;
  padding-top: 8px;
  border-top: 2px solid #000;
}

.cutting-export__product-header {
  margin-bottom: 14px;
}

.cutting-export__product-title {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

.cutting-export__product-meta {
  margin: 0;
  font-size: 10px;
  color: #333;
}

.cutting-export__steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 18px;
}

.cutting-export__step {
  border: 1px solid #000;
  background: #fff;
}

.cutting-export__step-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-bottom: 1px solid #000;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}

.cutting-export__step-index {
  min-width: 18px;
}

.cutting-export__step-body {
  padding: 8px;
}

.cutting-export__step-empty {
  margin: 0;
  font-style: italic;
  color: #444;
}

.cutting-export__step-details {
  margin: 0 0 8px;
}

.cutting-export__step-detail {
  display: grid;
  grid-template-columns: 34% 1fr;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px solid #e5e5e5;
}

.cutting-export__step-detail:last-child {
  border-bottom: none;
}

.cutting-export__step-detail dt {
  margin: 0;
  font-weight: 700;
}

.cutting-export__step-detail dd {
  margin: 0;
  word-break: break-word;
}

.cutting-export__downloads {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.cutting-export__download-card {
  display: block;
  padding: 8px;
  border: 1px solid #000;
  color: inherit;
  text-decoration: none;
  background: #fff;
}

.cutting-export__download-card--disabled {
  pointer-events: none;
  opacity: 0.7;
}

.cutting-export__download-card:hover {
  background: #f7f7f7;
}

.cutting-export__download-preview-frame {
  position: relative;
  min-height: 120px;
  margin-bottom: 6px;
  background-color: #fff;
  background-image:
    linear-gradient(45deg, #e4e4e4 25%, transparent 25%),
    linear-gradient(-45deg, #e4e4e4 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e4e4e4 75%),
    linear-gradient(-45deg, transparent 75%, #e4e4e4 75%);
  background-size: 16px 16px;
  background-position:
    0 0,
    0 8px,
    8px -8px,
    -8px 0;
}

.cutting-export__download-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  font-size: 10px;
  color: #666;
}

.cutting-export__download-preview {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 6px;
  object-fit: contain;
  background: #fff;
}

.cutting-export__download-label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}

.cutting-export__download-file {
  display: block;
  margin-top: 2px;
  font-size: 9px;
  color: #333;
  word-break: break-all;
}

.cutting-export__uv-section {
  margin-bottom: 18px;
}

.cutting-export__uv-atlas {
  position: relative;
  width: 100%;
  margin-bottom: 12px;
  border: 1px solid #000;
  background: #fff;
  overflow: hidden;
}

.cutting-export__uv-atlas-frame {
  position: relative;
  width: 100%;
  background: #fff;
}

.cutting-export__uv-atlas-layer {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.cutting-export__uv-atlas-layer--hidden {
  display: none;
}

.cutting-export__uv-atlas-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 8px;
  border-top: 1px solid #000;
  font-size: 10px;
}

.cutting-export__uv-layers-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.cutting-export__uv-layer-card {
  border: 1px solid #000;
  background: #fff;
}

.cutting-export__uv-layer-card-header {
  padding: 6px 8px;
  border-bottom: 1px solid #000;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}

.cutting-export__uv-layer-card-body {
  padding: 8px;
  background: #fff;
}

.cutting-export__uv-layer-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  background: #fff;
}

.cutting-export__uv-layer-file {
  margin: 6px 0 0;
  font-size: 9px;
  color: #333;
  word-break: break-all;
}

.cutting-export__specs-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 18px;
  table-layout: fixed;
}

.cutting-export__specs-table th,
.cutting-export__specs-table td {
  border: 1px solid #000;
  padding: 6px 8px;
  vertical-align: top;
  text-align: left;
}

.cutting-export__specs-table th {
  width: 34%;
  font-weight: 700;
}

.cutting-export__specs-logos {
  margin: 0;
  padding-left: 16px;
}

.cutting-export__specs-logos li {
  margin: 0;
}

.cutting-export__articles-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.cutting-export__articles-table th,
.cutting-export__articles-table td {
  border: 1px solid #000;
  padding: 6px 8px;
  text-align: center;
  vertical-align: middle;
}

.cutting-export__articles-table thead tr:first-child th {
  background: #00ffff;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.cutting-export__articles-table thead tr:nth-child(2) th {
  font-weight: 700;
  background: #fff;
}

.cutting-export__articles-table tbody td {
  height: 28px;
}
`;

export { ORDER_CUTTING_EXPORT_DOCUMENT_STYLES };
