import ComponentProps from "@/core/interfaces/component-props";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {
  text: string;
}

export default function ArticleDescription({ text, className }: Props) {
  return <p className={twMerge("", className)}>{text}</p>;
}
