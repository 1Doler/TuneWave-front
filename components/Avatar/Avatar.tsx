import React from "react";
import cn from "classnames";
import { BiUser } from "react-icons/bi";
import { CardProps } from "./Avatar.interface";

import styles from "./Avatar.module.css";

export const AvatarImg = ({
  url,
  className,
  form,
  size = "small",
  ...props
}: CardProps) => {
  console.log(url);
  if (url) {
    return (
      <div className={cn(styles.imgContainer, styles[size])}>
        <img
          className={cn(form && styles[form], styles.className)}
          src={`${url}`}
        />
      </div>
    );
  }
  return (
    <div
      className={cn(
        styles.avatar,
        form && styles[form],
        styles[size],
        className
      )}
    >
      <BiUser size={size === "large" ? 80 : 40} />
    </div>
  );
};
