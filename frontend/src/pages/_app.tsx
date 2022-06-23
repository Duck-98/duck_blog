import { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from 'src/theme/globalStyle';
import { lightTheme } from 'src/theme';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from 'src/components/shared/Header';
import Footer from 'src/components/shared/Footer';
import Layout from 'src/components/shared/Layout';
import wrapper from 'src/store/configure';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="나덕경 블로그" />
        <title>duck_blog</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
