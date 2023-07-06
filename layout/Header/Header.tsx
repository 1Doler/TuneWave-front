import cn from "classnames";
import { Button } from "../../components/UI";
import { HeaderProps } from "./Header.interface";
import styles from "./Header.module.css";
import { LeftIcon, NotificationIcon, RightIcon } from "../../components/icons";
import { SearchInput, AvatarImg } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Header = ({ className }: HeaderProps) => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <nav className={cn(styles.nav, className)}>
      <Button color="ghost" form="circle">
        <LeftIcon fill="white" />
      </Button>
      <Button color="ghost" form="circle">
        <RightIcon fill="white" />
      </Button>
      <NotificationIcon width={30} className={styles.notification} />
      <SearchInput className={styles.search} />
      <AvatarImg
        className={styles.avatar}
        form="circle"
        size="small"
        url={user?.avatarUrl}
      />
    </nav>
  );
};
