import LogoIcon from "./logo.svg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FcLikePlaceholder, FcMusic } from "react-icons/fc";
import { BsFolder } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export const Sidebar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrapper}>
        <LogoIcon width={90} className={styles.logo} />
      </div>
      <AiFillHome fill="white" />
      <FcLikePlaceholder fill="white" />
      <FcMusic fill="white" />
      <BsFolder fill="white" />
      <Link href={"/profile"}>
        <FaUserAlt fill="white" />
      </Link>
      <AiFillSetting fill="white" />
    </nav>
  );
};
