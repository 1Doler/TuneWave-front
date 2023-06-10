import { forwardRef, ForwardedRef } from "react";
import cn from "classnames";

import { InputProps } from "./Input.interface";

import styles from "./Input.module.css";

export const Input = forwardRef(
  (
    { value, error, className, placeholder, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        <input className={cn(styles.input, className)} {...props} ref={ref} />
        <p className={cn(styles.label, { [styles.filled]: value })}>
          {placeholder}
        </p>
        {error && <p className={styles.errorMessage}>*{error.message}</p>}
      </div>
    );
  }
);
