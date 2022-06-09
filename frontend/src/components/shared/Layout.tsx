import styled from 'styled-components';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  height: auto;
  min-height: 100%;
  padding-bottom: 150px;
`;

const Layout = (props: { children: React.ReactNode }) => (
  <div>
    <Header />
    <Main>{props.children}</Main>
    <Footer />
  </div>
);

export default Layout;
