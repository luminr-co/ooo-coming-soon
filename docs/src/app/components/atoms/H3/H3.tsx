import ComponentProps from "@/core/interfaces/component-props";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {
  text: string;
}

export default function H3({ text, className }: Props) {
  return (
    <h3 className={twMerge("font-bold lg:text-xl text-xs", className)}>
      {text}
    </h3>
  );
}
