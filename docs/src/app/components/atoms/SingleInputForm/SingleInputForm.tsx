import ComponentProps from "@/core/interfaces/component-props";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps {
  placeholder: string;
  submitButtonText: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  color: "primary" | "secondary";
  type: React.HTMLInputTypeAttribute;
  value: string;
  disabled: boolean;
}

export default function SingleInputForm({
  placeholder,
  submitButtonText,
  onChange,
  onSubmit,
  className,
  type,
  color,
  label,
  value,
  disabled,
}: Props) {
  let inputClassName = "";
  let buttonClassName = "";

  if (color === "primary") {
    inputClassName = "border-primary";
    buttonClassName = "bg-primary text-white";
  } else if (color === "secondary") {
    inputClassName = "border-secondary";
    buttonClassName = "bg-secondary text-black";
  }

  inputClassName = twMerge(
    "border-2 rounded-lg flex flex-row justify-between text-xs lg:text-sm ",
    inputClassName
  );
  buttonClassName = twMerge(
    "py-3 px-7 rounded-md font-bold cursor-pointer text-xs lg:text-base",
    buttonClassName
  );

  return (
    <form className={className} onSubmit={onSubmit}>
      <label htmlFor="input-form" className="text-xs lg:text-base ">{label}</label>
      <div className="mt-2">
        <div className={twMerge(inputClassName, "")}>
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={"px-7 outline-none w-full rounded-2xl bg-transparent"}
            value={value}
            id="input-form"
            required
            disabled={disabled}
          />
          <input
            type="submit"
            value={disabled ? "Submitting..." : submitButtonText}
            className={buttonClassName}
            disabled={disabled}
          />
        </div>
      </div>
    </form>
  );
}
