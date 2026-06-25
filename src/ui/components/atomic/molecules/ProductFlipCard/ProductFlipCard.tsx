'use client';

import Link from 'next/link';
import { useCallback, useRef } from 'react';

import { AtomImage } from '@atoms';
import { useGarmentCatalogPreload } from '@hooks';
import type { productFlipCardPropsType } from '@types';
import { cn, hasModel, resolveProductFlipCardSrc } from '@utils';

const ProductFlipCard = ({ collection, slug, alt, previewSrc, activePreviewSrc, className }: productFlipCardPropsType) => {
  const isWarmedRef = useRef(false);
  const { warmBySlug } = useGarmentCatalogPreload();
  const hasRemoteImages = previewSrc != null || activePreviewSrc != null;
  const frontSrc = previewSrc ?? (hasRemoteImages ? '' : resolveProductFlipCardSrc(collection, slug, 'front'));
  const backSrc = activePreviewSrc ?? previewSrc ?? (hasRemoteImages ? '' : resolveProductFlipCardSrc(collection, slug, 'back'));
  const warmProductAssets = useCallback(() => {
    if (isWarmedRef.current || !hasModel(slug)) return;
    isWarmedRef.current = true;
    warmBySlug(slug);
  }, [slug, warmBySlug]);

  return (
    <Link
      href={`/${slug}`}
      tabIndex={0}
      onPointerEnter={warmProductAssets}
      onFocus={warmProductAssets}
      onTouchStart={warmProductAssets}
      className={cn(
        'group/card aspect-3/4 w-full cursor-pointer outline-none perspective-[1000px]',
        'focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2',
        className,
      )}
    >
      <div
        className={cn(
          'relative size-full transform-3d transition-transform duration-600 ease-in-out',
          'group-hover/card:transform-[rotateY(180deg)] group-focus-within/card:transform-[rotateY(180deg)]',
        )}
      >
        <div className="absolute inset-0 backface-hidden">
          <AtomImage src={frontSrc} alt={alt} priority loading="eager" className="size-full rounded-[8px] bg-gray-20 backface-hidden" />
        </div>
        <div className="absolute inset-0 transform-[rotateY(180deg)] backface-hidden">
          <AtomImage src={backSrc} alt={alt} loading="eager" className="size-full rounded-[8px] bg-gray-20 backface-hidden" />
        </div>
      </div>
    </Link>
  );
};

export { ProductFlipCard };
