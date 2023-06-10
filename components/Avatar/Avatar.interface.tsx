import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface CardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  url?: string;
  size?: "large" | "small";
}
