import { Provider } from "react-redux";
import { AppProps } from "next/app";
import Head from "next/head";

import store from "../redux/store";

import "../styles/global.css";

function App({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
        />

        <meta property="og:locale" content="ru_RU" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
