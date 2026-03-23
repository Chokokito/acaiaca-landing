import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface ButtonProps {
  Icon?: React.ComponentType<{ size: number }>;
  onClick?: () => void;
  children: React.ReactNode;
  cn?: string;
  cnIcon?: string;
  cnText?: string;
}

const Button = ({
  Icon,
  onClick,
  children,
  cn,
  cnIcon,
  cnText,
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`${poppins.className} flex w-min cursor-pointer items-center gap-2 rounded-[30px] p-1 pl-4 pr-1 text-nowrap transition sm:text-lg md:text-sm ${cn ?? ""}`}
  >
    <span className={`text-sm ${cnText ?? ""}`}>{children}</span>

    <span
      className={`ml-6 inline-flex h-10 w-10 items-center justify-center rounded-full ${cnIcon ?? ""}`}
    >
      {Icon ? <Icon size={20} /> : null}
    </span>
  </button>
);

export default Button;
