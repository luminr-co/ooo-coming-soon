import ComponentProps from "@/core/interfaces/component-props";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {
  src: string;
  alt: string;
}

export default function ArticleImage({ src, alt, className }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={126}
      height={126}
      className={twMerge(className)}
    />
  );
}
