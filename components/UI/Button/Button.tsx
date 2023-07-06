import cn from "classnames";

import { ButtonProps } from "./Button.interface";

import styles from "./Button.module.css";

export const Button = ({
  color = "primary",
  className,
  size = "large",
  form,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[color],
        form && styles[form],
        styles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
