"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImageProps = {
  image: string;
  alt: string;
  className: string;
  sizes: string;
};

export function GalleryImage({ image, alt, className, sizes }: GalleryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <div className={className}>
      <Image
        alt={alt}
        className="object-cover object-top"
        fill
        onError={() => setHasError(true)}
        sizes={sizes}
        src={image}
      />
    </div>
  );
}
