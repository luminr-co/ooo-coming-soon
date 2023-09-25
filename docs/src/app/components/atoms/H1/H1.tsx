import ComponentProps from "@/core/interfaces/component-props";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {
  text: string;
}

export default function H1({ text, className }: Props) {
  return (
    <h1 className={twMerge("font-bold lg:text-3xl text-xl", className)}>
      {text}
    </h1>
  );
}
