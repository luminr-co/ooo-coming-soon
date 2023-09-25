import React from "react";
import { Logo } from "../../atoms/Logo";
import { ComingSoonButton } from "../../molecules/ComingSoonButton";
import ComponentProps from "@/core/interfaces/component-props";
import { twMerge } from "tailwind-merge";

export default function Header({ className }: ComponentProps) {
  return (
    <header className={twMerge("flex flex-row justify-between", className)}>
      <Logo />
      <ComingSoonButton />
    </header>
  );
}
