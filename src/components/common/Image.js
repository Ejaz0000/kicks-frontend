'use client';

import { useEffect, useState } from 'react';
import NextImage from 'next/image';

export default function Image({ src, alt, onError, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('/assets/default.jpg');
    onError?.();
  };

  useEffect(() => {
    if (!src) {
      setImgSrc('/assets/default.jpg');
    } else {
      setImgSrc(src);
    }
  }, [src]);

  return (
    <NextImage
      {...props}
      src={imgSrc || '/assets/default.jpg'}
      alt={alt || 'Image'}
      onError={handleError}
    />
  );
}
