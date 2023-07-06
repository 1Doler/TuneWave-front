import cn from "classnames";

import { ModalProps } from "./Modal.interface";

import { Card } from "../index";
import styles from "./Modal.module.css";
import { CloseIcon } from "../icons";

export const Modal = ({
  color = "white",
  children,
  className,
  title,
  onClose,
  open,
  ...props
}: ModalProps) => {
  return (
    <div
      className={cn(
        styles.modal,
        styles[color],
        { [styles.open]: open },
        className
      )}
    >
      <Card className={styles.card}>
        <CloseIcon className={styles.closeIcon} onClick={onClose} />
        <p className={styles.title}>{title}</p>
        {children}
      </Card>
    </div>
  );
};
