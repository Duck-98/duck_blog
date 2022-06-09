import { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from 'src/theme/globalStyle';
import { lightTheme } from 'src/theme';
import { ThemeProvider } from '@emotion/react';
import Layout from 'src/components/shared/Layout';
import { useRouter } from 'next/router';
import Head from 'next/head';

const MyApp = ({ Component }: AppProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="나덕경 블로그" />
        <title>duck_blog</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Layout>
          <Component />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
