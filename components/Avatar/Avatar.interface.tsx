import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface CardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  url?: String;
  size?: "large" | "small";
  form?: "circle";
}
