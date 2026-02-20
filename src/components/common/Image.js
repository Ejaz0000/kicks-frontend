'use client';

import { useState } from 'react';
import NextImage from 'next/image';

export default function Image({ src, alt, onError, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('/assets/default.jpg');
    onError?.();
  };

  return (
    <NextImage
      {...props}
      src={imgSrc || '/assets/default.jpg'}
      alt={alt || 'Image'}
      onError={handleError}
    />
  );
}
