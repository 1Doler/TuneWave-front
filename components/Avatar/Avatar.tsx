import React from "react";
import cn from "classnames";
import { BiUser } from "react-icons/bi";
import { CardProps } from "./Avatar.interface";

import styles from "./Avatar.module.css";

export const AvatarImg = ({
  url,
  className,
  size = "small",
  ...props
}: CardProps) => {
  if (url) {
    return (
      <img
        className={cn(styles.avatar, styles[size], className)}
        src={`${url}`}
      />
    );
  }
  return (
    <div className={cn(styles.avatar, styles[size], className)}>
      <BiUser size={size === "large" ? 80 : 40} />
    </div>
  );
};
