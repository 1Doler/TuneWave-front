import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface UploadFileProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  url?: string;
  change?: (url: string) => void;
}
