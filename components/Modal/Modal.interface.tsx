import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ModalProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: "white" | "dark" | "gray";
  title?: string;
  open: Boolean;
  onClose: () => void;
  children: ReactNode;
}
