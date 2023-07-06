import { FunctionComponent, ReactNode, useEffect } from "react";

import styles from "./layout.module.css";
import { Card } from "../components/index";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { useSelector } from "react-redux";
import { fetchUserDataMe, selectIsAuth } from "../redux/slice/user";
import { useAppDispatch } from "../redux/store";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && !isAuth && document.cookie) {
      dispatch(fetchUserDataMe());
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Card color="white" className={styles.card}>
        <Header className={styles.header} />
        <div className={styles.main}>{children}</div>
      </Card>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
