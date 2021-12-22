import React from 'react';
import ActiveResource from './ActiveResource';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <ActiveResource />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
