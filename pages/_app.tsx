import { AppProps } from "next/app";
import "mobx-react-lite/batchingForReactDom";
import { ThemeProvider } from "styled-components/native";
import { LightTheme } from "../app/themes";
import Layout from "../app/features/layout/Layout";
import "../globalStyle.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
