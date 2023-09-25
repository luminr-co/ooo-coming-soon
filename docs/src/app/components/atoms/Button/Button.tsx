import ComponentProps from "@/core/interfaces/component-props";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {
  label: string;
}

export default function Button({ className, label }: Props) {
  return (
    <button
      className={twMerge(
        "px-4 py-1 rounded-md font-bold text-xs border lg:px-8 lg:py-2 lg:rounded-lg lg:text-sm lg:border-2 font-sans",
        className
      )}
    >
      {label}
    </button>
  );
}
