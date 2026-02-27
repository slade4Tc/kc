'use client';

import { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export function ImageWithFallback({ alt, className, ...props }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-stone-900 text-xs text-stone-400 ${className}`}>
        Image unavailable
      </div>
    );
  }

  return <img {...props} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
