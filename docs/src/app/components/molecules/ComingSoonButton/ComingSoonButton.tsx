import React from "react";
import { Button } from "../../atoms/Button";
import ComponentProps from "@/core/interfaces/component-props";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {}

export default function ComingSoonButton({ className }: Props) {
  return (
    <Button
      label="Coming Soon"
      className={twMerge(
        "text-primary border-primary cursor-default",
        className
      )}
    />
  );
}
