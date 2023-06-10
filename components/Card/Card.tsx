import cn from "classnames";

import { CardProps } from "./Card.interface";

import styles from "./Card.module.css";

export const Card = ({
  color = "white",
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div className={cn(styles.card, styles[color], className)}>{children}</div>
  );
};
