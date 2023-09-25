import ComponentProps from "@/core/interfaces/component-props";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {
  text: string;
}

export default function H2({ text, className }: Props) {
  return (
    <h2 className={twMerge("font-bold lg:text-2xl text-base", className)}>
      {text}
    </h2>
  );
}
