import cn from "classnames";

import { Button } from "../UI";
import { SearchIcon } from "../icons";
import { SearchInputProps } from "./SearchInput.interface";

import styles from "./SearchInput.module.css";

export const SearchInput = ({ className }: SearchInputProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <input className={styles.input} />

      <Button color="dark" size="small" className={styles.icon}>
        <SearchIcon />
      </Button>
      {/* <SearchIcon className={styles.icon} /> */}
    </div>
  );
};
