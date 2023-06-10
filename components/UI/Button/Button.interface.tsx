import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "primary";
  size?: "small" | "large";
  children: ReactNode;
}
