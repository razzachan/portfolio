"use client";
import Image, { ImageProps } from "next/image";
import { useMemo, useState } from "react";

type ProgressiveImageProps = Omit<ImageProps, "onLoadingComplete"> & {
  wrapperClassName?: string;
  shimmer?: boolean;
  forceVisible?: boolean;
};

export default function ProgressiveImage({ wrapperClassName = "", shimmer = true, className = "", forceVisible = false, ...rest }: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const isSvg = typeof rest.src === 'string' && rest.src.toLowerCase().endsWith('.svg');
  const show = useMemo(() => forceVisible || (isSvg ? true : loaded), [forceVisible, isSvg, loaded]);
  return (
    <div className={"relative overflow-hidden " + wrapperClassName}>
      {shimmer && !show && (
        <div
          aria-hidden
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent"
        />
      )}
      <Image
        {...rest}
        className={className + (show ? " opacity-100" : " opacity-0")}
        onLoad={() => setLoaded(true)}
        onLoadingComplete={() => setLoaded(true)}
      />
      <div
        className={
          "pointer-events-none absolute inset-0 transition-opacity duration-500 " +
          (show ? "opacity-0" : "opacity-40")
        }
        aria-hidden
      />
    </div>
  );
}
