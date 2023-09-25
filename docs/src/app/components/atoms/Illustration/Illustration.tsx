import ComponentProps from "@/core/interfaces/component-props";
import Image from "next/image";
import React from "react";
import illustration from "@/core/assets/illustration.svg";

interface Props extends ComponentProps {}

export default function Illustration({ className }: Props) {
  return (
    <Image
      width={1000}
      height={1000}
      src={illustration}
      alt="Data Science Illustration"
      className={className}
    />
  );
}
