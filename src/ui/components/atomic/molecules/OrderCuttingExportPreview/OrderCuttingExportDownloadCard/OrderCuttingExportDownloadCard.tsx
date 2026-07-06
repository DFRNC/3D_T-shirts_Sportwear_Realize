'use client';

import { useEffect, useState } from 'react';

import type { orderCuttingExportDownloadFileType, orderCuttingExportPrintAtlasType } from '@types';
import { composeGarmentColorUvAtlas } from '@utils/composeGarmentColorUvAtlas';
import { composeDesignUvLayerPreview, composeDesignUvMixPreview } from '@utils/composeDesignUvPreview';
import { AtomImage } from '@atoms';

type orderCuttingExportDownloadCardPropsType = {
  file: orderCuttingExportDownloadFileType;
  printAtlas: orderCuttingExportPrintAtlasType;
};

const OrderCuttingExportDownloadCard = ({ file, printAtlas }: orderCuttingExportDownloadCardPropsType) => {
  const [composedUrl, setComposedUrl] = useState<string | null>(file.previewSrc ?? (file.downloadUrl || null));
  const [isLoading, setIsLoading] = useState(Boolean(file.composeKind));

  useEffect(() => {
    if (!file.composeKind) {
      setComposedUrl(file.previewSrc ?? file.downloadUrl);
      setIsLoading(false);
      return;
    }

    let isCancelled = false;
    let objectUrl: string | null = null;

    const composePreview = async () => {
      setIsLoading(true);
      setComposedUrl(null);

      try {
        if (file.composeKind === 'design-layer' && file.maskSrc && file.color) {
          objectUrl = await composeDesignUvLayerPreview(file.maskSrc, file.color, file.opacity ?? 1);
        } else if (file.composeKind === 'design-mix' && file.layers?.length) {
          objectUrl = await composeDesignUvMixPreview(file.layers, file.opacity ?? 1);
        } else if (file.composeKind === 'color-atlas' && file.modelSrc && file.colorParts?.length && file.atlasWidth && file.atlasHeight) {
          objectUrl = await composeGarmentColorUvAtlas(file.modelSrc, file.atlasWidth, file.atlasHeight, file.colorParts);
        }

        if (isCancelled) {
          if (objectUrl) {
            URL.revokeObjectURL(objectUrl);
          }
          return;
        }

        if (objectUrl) {
          setComposedUrl(objectUrl);
        }
      } catch {
        if (!isCancelled) {
          setComposedUrl(null);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    void composePreview();

    return () => {
      isCancelled = true;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [
    file.atlasHeight,
    file.atlasWidth,
    file.color,
    file.colorParts,
    file.composeKind,
    file.downloadUrl,
    file.layers,
    file.maskSrc,
    file.modelSrc,
    file.opacity,
    file.previewSrc,
  ]);

  const href = composedUrl ?? file.downloadUrl;
  const isDisabled = !href || isLoading;

  return (
    <a
      className={`cutting-export__download-card${isDisabled ? ' cutting-export__download-card--disabled' : ''}`}
      href={isDisabled ? undefined : href}
      download={isDisabled ? undefined : file.fileName}
      target="_blank"
      rel="noreferrer"
      aria-disabled={isDisabled}
      onClick={(event) => {
        if (isDisabled) {
          event.preventDefault();
        }
      }}
    >
      <div className="cutting-export__download-preview-frame">
        {isLoading ? <span className="cutting-export__download-loading">Composizione UV…</span> : null}
        {!isLoading && composedUrl ? (
          <AtomImage
            src={composedUrl}
            alt={file.label}
            className="cutting-export__download-preview"
            width={printAtlas.width}
            height={printAtlas.height}
          />
        ) : null}
      </div>
      <span className="cutting-export__download-label">{file.label}</span>
      <span className="cutting-export__download-file">{file.fileName}</span>
    </a>
  );
};

export { OrderCuttingExportDownloadCard };
