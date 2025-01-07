
import { useState, useEffect } from "react";
import Image from "next/image";
import { getBase64Image } from "utils/get-base-64-url";

type DynamicImageProps = {
  src: string;
  alt: string;
  quality?: number | `${number}` | undefined;
  className?: string;
  height: number | `${number}` | undefined;
  width: number | `${number}` | undefined;
  loading?: "eager" | "lazy" | undefined;
  onClick?: any
  zoomOnHover?: boolean;
  zoomerSize?: { width: number, height: number }
};

export default function DynamicImage({
  src,
  alt,
  height,
  width,
  quality,
  className,
  loading,
  zoomOnHover = false,
  onClick,
  zoomerSize
}: DynamicImageProps) {
  const [blurDataURL, setBlurDataURL] = useState<any>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const [magnifierSize, setMagnifierSize] = useState(zoomerSize || { width: 300, height: 350 })

  useEffect(() => {
    const fetchBlurDataURL = async () => {
      const blurURL = await getBase64Image(src);
      setBlurDataURL(blurURL);
    };

    if (src) fetchBlurDataURL();
  }, [src]);

  const mouseEnter = (e: any) => {
    const el = e.currentTarget;

    const { width, height } = el.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  }

  const mouseLeave = (e: any) => {
    e.preventDefault();
    setShowMagnifier(false);
  }

  const mouseMove = (e: any) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setXY([x, y]);
  };

  const zoomLevel = 2

  return (
    <div
      className={`relative `}
    >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        quality={quality}
        placeholder={blurDataURL ? "blur" : undefined}
        blurDataURL={blurDataURL || undefined}
        className={`transition-transform ${!zoomOnHover ? "block" : ""} ${className}`}
        loading={loading}
        onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}
        onMouseMove={(e) => mouseMove(e)}
        onClick={onClick ? onClick : undefined}
      />
      <div
        style={{
          display: showMagnifier && zoomOnHover ? '' : 'none',
          position: 'absolute',
          pointerEvents: 'none',
          height: `${magnifierSize.height}px`,
          width: `${magnifierSize.width}px`,
          opacity: '1',
          border: '1px solid lightgrey',
          backgroundColor: 'white',
          borderRadius: '5px',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',
          top: `${y - magnifierSize.height / 2}px`,
          left: `${x - magnifierSize.width / 2}px`,
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierSize.width / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierSize.height / 2}px`,
        }}
      />
    </div>
  );
}

