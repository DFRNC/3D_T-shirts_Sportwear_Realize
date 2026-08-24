'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { AtomDialog, AtomDialogContent, AtomDialogDescription, AtomDialogTitle, AtomInput, Box, Button, Flex, SvgIcon, Text } from '@atoms';
import { useShareDialog } from '@store';

const COPIED_RESET_DELAY_MS = 2000;

const copyToClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
};

const ModalShare = () => {
  const isOpen = useShareDialog((state) => state.isOpen);
  const setIsOpen = useShareDialog((state) => state.setIsOpen);
  const status = useShareDialog((state) => state.status);
  const shareUrl = useShareDialog((state) => state.shareUrl);

  const [isCopied, setIsCopied] = useState(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
    },
    [],
  );

  const handleOpenChange = useCallback(
    (nextIsOpen: boolean) => {
      if (!nextIsOpen) {
        if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
        setIsCopied(false);
      }

      setIsOpen(nextIsOpen);
    },
    [setIsOpen],
  );

  const handleCopy = useCallback(async () => {
    if (!shareUrl) return;

    try {
      await copyToClipboard(shareUrl);
      setIsCopied(true);

      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = setTimeout(() => setIsCopied(false), COPIED_RESET_DELAY_MS);
    } catch (error) {
      console.error('[share] Failed to copy share link.', error);
    }
  }, [shareUrl]);

  const handleSelectAll = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    event.currentTarget.select();
  }, []);

  return (
    <AtomDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AtomDialogContent aria-label="Condividi configurazione" className="max-w-[560px]! h-auto! max-h-[calc(var(--viewport-height)*0.8)]">
        <AtomDialogTitle className="text-[24px] leading-[1.2] font-semibold max-sm:text-[20px]">Condividi la tua configurazione</AtomDialogTitle>
        <AtomDialogDescription className="mt-2 text-gray-30">
          Chiunque abbia questo link potrà aprire e visualizzare la configurazione che hai creato.
        </AtomDialogDescription>

        <Box className="mt-6">
          {status === 'pending' && (
            <Flex className="items-center gap-3">
              <Box className="size-4 shrink-0 animate-spin rounded-full border-2 border-gray-30 border-t-transparent" aria-hidden />
              <Text>Creazione del link in corso…</Text>
            </Flex>
          )}

          {status === 'error' && <Text className="text-destructive">Non è stato possibile creare il link. Chiudi la finestra e riprova.</Text>}

          {status === 'ready' && shareUrl && (
            <Flex className="items-center gap-2 max-sm:flex-col max-sm:items-stretch">
              <AtomInput
                variant="checkout"
                className="flex-1 max-sm:w-full"
                value={shareUrl}
                readOnly
                onFocus={handleSelectAll}
                aria-label="Link di condivisione"
              />
              <Button variant="primary" size="sm" onClick={handleCopy} className="shrink-0 max-sm:w-full">
                <SvgIcon name="share" />
                {isCopied ? 'Copiato' : 'Copia link'}
              </Button>
            </Flex>
          )}
        </Box>
      </AtomDialogContent>
    </AtomDialog>
  );
};

export { ModalShare };
