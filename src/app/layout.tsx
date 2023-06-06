import { FunctionComponent, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <div>{children}</div>
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
