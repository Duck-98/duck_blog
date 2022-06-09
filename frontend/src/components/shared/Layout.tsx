import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props: { children: React.ReactNode }) => (
  <div>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
);

export default Layout;
