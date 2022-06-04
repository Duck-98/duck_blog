import { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from 'src/theme/globalStyle';
import { lightTheme } from 'src/theme';
import { ThemeProvider } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
