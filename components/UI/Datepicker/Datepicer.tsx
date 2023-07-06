import { forwardRef, ForwardedRef, useState } from "react";
import cn from "classnames";

import { DatepickerProps } from "./Datepicker.interface";

import { DatePicker } from "@skbkontur/react-ui";

import styles from "./Datepicker.module.css";

export const Datepicker = forwardRef(
  (
    {
      value,
      error,
      className,
      change,
      defaultValue,
      placeholder,
      ...props
    }: DatepickerProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        <DatePicker
          width={250}
          size="large"
          value={value}
          onValueChange={date => change(date)}
          className={cn(styles.input, styles.rounded, className)}
        />
        <p className={cn(styles.label, { [styles.filled]: value })}>
          {placeholder}
        </p>
        {error && <p className={styles.errorMessage}>*{error.message}</p>}
      </div>
    );
  }
);
