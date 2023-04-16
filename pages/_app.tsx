import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppStateWrapper } from "../store/AppStore";
import createEmotionCache from "../config/emotionCache";
import "../assets/css/global.scss";
import theme from "../config/theme";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: React.FC<Pick<AppProps, "pageProps">>;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppStateWrapper.withRedux(MyApp);
