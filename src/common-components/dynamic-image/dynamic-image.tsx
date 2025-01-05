import { useState, useEffect } from "react";
import Image from "next/image";
import { getBase64Image } from "utils/get-base-64-url";


type DynamicImageProps = {
  src: string,
  alt: string,
  quality?: number | `${number}` | undefined
  className?: string,
  height: number | `${number}` | undefined
  width: number | `${number}` | undefined
  loading?: "eager" | "lazy" | undefined
}

export default function DynamicImage({ src, alt, height, width, quality, className, loading }: DynamicImageProps) {
  const [blurDataURL, setBlurDataURL] = useState<any>(null);

  useEffect(() => {
    const fetchBlurDataURL = async () => {
      const blurURL = await getBase64Image(src);
      setBlurDataURL(blurURL);
    };
    fetchBlurDataURL();
  }, [src]);

  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      quality={quality}
      placeholder={blurDataURL ? "blur" : undefined}
      blurDataURL={blurDataURL}
      className={className}
      loading={loading}
    />
  );
}
