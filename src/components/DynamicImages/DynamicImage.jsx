"use client";
import Image from "next/image";
import { useState } from "react";

export default function DynamicImage({
  alt,
  containerClass,
  width,
  height,
  src,
  className,
  disableIsBlur = false,
  ...rest
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageStyle = {
    filter: isLoaded ? "blur(0)" : "blur(10px)",
    transition: "filter 0.1s ease-out",
  };
  return (
    <Image
      {...rest}
      src={src || ""}
      alt={alt || "Alternative"}
      width={width}
      height={height}
      className={className}
      style={disableIsBlur ? "" : imageStyle}
      // priority
      loading={src ? "eager" : "lazy"}
      sizes="(max-width: 400px) 100vw, 50vw"
      onLoad={() => setIsLoaded(true)}
      quality={75}
    />
  );
}
