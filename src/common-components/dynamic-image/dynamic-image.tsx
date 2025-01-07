
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
  zoomOnHover?: boolean; // New prop
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
}: DynamicImageProps) {
  const [blurDataURL, setBlurDataURL] = useState<any>(null);

  useEffect(() => {
    const fetchBlurDataURL = async () => {
      const blurURL = await getBase64Image(src);
      setBlurDataURL(blurURL);
    };

    if (src) fetchBlurDataURL();

    if (window.innerWidth <= 560) {
      setMagnifierSize({ width: 250, height: 300 });
    } else {
      setMagnifierSize({ width: 350, height: 400 });
    }
  }, [src]);

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const [magnifierSize, setMagnifierSize] = useState({ width: 350, height: 400 })

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
        className="hidden md:block"
      />
    </div>
  );
}

