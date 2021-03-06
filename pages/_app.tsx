import React from "react";
import { AppProps } from "next/app";
import "../static/styles/styles.scss";

// 기존에 있는 app 컴포넌트를 커스텀 하기 위해서 _app 으로

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
