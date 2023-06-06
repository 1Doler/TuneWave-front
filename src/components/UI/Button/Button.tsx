import cn from "classnames";

import { ButtonProps } from "./Button.interface";

import styles from "./Button.module.css";

export const Button = ({
  color = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[color], className)} {...props}>
      {children}
    </button>
  );
};
