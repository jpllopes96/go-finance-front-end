import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global"
import type { AppProps } from "next/app";
import { darkTheme } from "../styles/themes/dark";
import AppTemplate from "../components/AppTemplate";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme} >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyles />
        <AppTemplate>
          <Component {...pageProps} />
        </AppTemplate>
      </ThemeProvider>
    </>
    
    
  
  );
}
