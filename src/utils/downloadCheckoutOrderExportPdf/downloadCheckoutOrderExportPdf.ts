'use client';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import {
  ORDER_EXPORT_PAGE_HEIGHT_PX,
  ORDER_EXPORT_PAGE_WIDTH_PX,
  paginateOrderExportDocument,
} from './paginateOrderExportDocument';

const ORDER_EXPORT_PDF_WIDTH_MM = 210;
const ORDER_EXPORT_PDF_HEIGHT_MM = 297;
const ORDER_EXPORT_PDF_MARGIN_MM = 12;
const ORDER_EXPORT_PAGE_NUMBER_FONT_SIZE = 10;

const waitForDocumentImages = (root: HTMLElement) =>
  Promise.all(
    Array.from(root.querySelectorAll('img')).map(
      (image) =>
        new Promise<void>((resolve) => {
          if (image.complete) {
            resolve();
            return;
          }

          image.addEventListener('load', () => resolve(), { once: true });
          image.addEventListener('error', () => resolve(), { once: true });
        }),
    ),
  );

const getCapturePages = (captureRoot: HTMLElement) => {
  if (captureRoot.classList.contains('order-export-pages')) {
    return Array.from(captureRoot.querySelectorAll('.order-export-page')).filter(
      (page): page is HTMLElement => page instanceof HTMLElement,
    );
  }

  return [captureRoot];
};

const capturePageCanvas = (pageElement: HTMLElement) =>
  html2canvas(pageElement, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
    width: ORDER_EXPORT_PAGE_WIDTH_PX,
    height: ORDER_EXPORT_PAGE_HEIGHT_PX,
    windowWidth: ORDER_EXPORT_PAGE_WIDTH_PX,
    windowHeight: ORDER_EXPORT_PAGE_HEIGHT_PX,
  });

const addPdfPageNumbers = (pdf: jsPDF) => {
  const totalPages = pdf.getNumberOfPages();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  for (let page = 1; page <= totalPages; page += 1) {
    pdf.setPage(page);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(ORDER_EXPORT_PAGE_NUMBER_FONT_SIZE);
    pdf.setTextColor(129, 129, 129);
    pdf.text(`${page} / ${totalPages}`, pageWidth - ORDER_EXPORT_PDF_MARGIN_MM, pageHeight - 6, { align: 'right' });
  }
};

const downloadCheckoutOrderExportPdf = async (documentElement: HTMLElement, filename: string) => {
  const captureRoot = paginateOrderExportDocument(documentElement);

  await waitForDocumentImages(captureRoot);

  const pages = getCapturePages(captureRoot);
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  for (let index = 0; index < pages.length; index += 1) {
    const canvas = await capturePageCanvas(pages[index]);
    const imageData = canvas.toDataURL('image/png');

    if (index > 0) {
      pdf.addPage();
    }

    pdf.addImage(imageData, 'PNG', 0, 0, ORDER_EXPORT_PDF_WIDTH_MM, ORDER_EXPORT_PDF_HEIGHT_MM);
  }

  addPdfPageNumbers(pdf);
  pdf.save(filename);
};

export { downloadCheckoutOrderExportPdf };
