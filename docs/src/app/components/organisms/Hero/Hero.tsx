import React from "react";
import { HeroText } from "../../molecules/HeroText";
import { SubscribeForm } from "../../molecules/SubscribeForm";
import ComponentProps from "@/core/interfaces/component-props";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {}

export default function Hero({ className }: Props) {
  return (
    <div className={twMerge("shadow-2xl lg:px-10 py-16 px-8 lg:py-16 rounded-lg", className)}>
      <HeroText />
      <SubscribeForm />
    </div>
  );
}
