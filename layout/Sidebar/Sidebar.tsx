import LogoIcon from "./logo.svg";

import { UserIcon, LoveIcon } from "../../components/icons";

import { AiFillSetting } from "react-icons/ai";
import { FcLikePlaceholder, FcMusic } from "react-icons/fc";
import { BsFolder } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import styles from "./Sidebar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectIsAuth } from "../../redux/slice/user";

export const Sidebar = (): JSX.Element => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoWrapper}>
        <LogoIcon width={90} className={styles.logo} />
      </Link>
      <UserIcon />
      {/* <AiFillHome fill="white" /> */}
      <LoveIcon />
      <FcMusic fill="white" />
      <BsFolder fill="white" />
      <Link href={isAuth ? "/profile" : "/login"}>
        <FaUserAlt fill="white" />
      </Link>
      <AiFillSetting fill="white" />
    </nav>
  );
};
