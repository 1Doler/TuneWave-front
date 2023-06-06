import cn from "classnames";

import { InputProps } from "./Input.interface";

import styles from "./Input.module.css";

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={cn(styles.input, className)} {...props} />;
};