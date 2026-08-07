'use client';

import { useState } from 'react';

import { Box, Button, Flex, Grid, SvgIcon, Text } from '@atoms';
import { LogoUploadSkeleton } from '@skeletons';
import type { logoUploadPropsType } from '@types';
import { LOGO_MAX_FILE_SIZE, LOGO_SUPPORTED_LABEL } from '@constants';
import { cn, warmupGhostscriptWorker } from '@utils';

const LogoUpload = ({ canUpload, loading, error, onOpenFilePicker, onFileSelected }: logoUploadPropsType) => {
  const [dragOver, setDragOver] = useState(false);

  const handleFile = async (file: File | undefined) => {
    if (!file || loading || !canUpload) return;
    await onFileSelected(file);
  };

  const openFilePicker = () => {
    if (loading || !canUpload) return;
    onOpenFilePicker();
  };

  const warmupOnIntent = () => {
    if (!loading && canUpload) warmupGhostscriptWorker();
  };

  if (loading) {
    return <LogoUploadSkeleton />;
  }

  return (
    <Flex variant="logo_upload_section">
      <Text variant="logo_uploaded_label_dark">Logo</Text>
      <div
        role="button"
        tabIndex={!canUpload || loading ? -1 : 0}
        onClick={openFilePicker}
        onKeyDown={(e) => {
          if (e.key !== 'Enter' && e.key !== ' ') return;

          e.preventDefault();
          openFilePicker();
        }}
        onMouseEnter={warmupOnIntent}
        onFocus={warmupOnIntent}
        onDragOver={(e) => {
          e.preventDefault();
          if (!loading && canUpload) setDragOver(true);
          warmupOnIntent();
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          void handleFile(e.dataTransfer.files[0]);
        }}
        className={cn('w-full cursor-pointer', !canUpload && 'cursor-not-allowed opacity-60', dragOver && 'ring-2 ring-active/30 rounded-[8px]')}
      >
        <Button variant="upload" type="button" disabled={!canUpload} className="pointer-events-none whitespace-normal">
          <SvgIcon name="upload" />
          <Box>
            <Text variant="logo_upload_cta_primary">Trascina qui il tuo logo o fai click per caricare un elemento</Text>
            <Text variant="logo_upload_cta_secondary">
              (Dimensione max {Math.round(LOGO_MAX_FILE_SIZE / (1024 * 1024))} MB — form. {LOGO_SUPPORTED_LABEL})
            </Text>
          </Box>
        </Button>
      </div>

      {error && <Text variant="error_xs">{error}</Text>}

      <Grid variant="logo_info_panel">
        <SvgIcon name="info" className="max-xl:size-3.25" />
        <Text variant="logo_uploaded_hint">Per una qualità di stampa ottimale si consiglia l&apos;utilizzo di file vettoriali.</Text>
      </Grid>
    </Flex>
  );
};

export { LogoUpload };
