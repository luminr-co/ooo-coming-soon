import React, { PropsWithChildren } from "react";
import logo from "@/core/assets/logo.svg";
import logowhite from "@/core/assets/logo-white.svg";
import Image from "next/image";

interface Props extends PropsWithChildren {
  type?: "dark" | "white";
}

export default function Logo({ type }: Props) {
  return (
    <Image
      src={type == "white" ? logowhite : logo}
      alt={"Only One Outlier Logo"}
    />
  );
}
