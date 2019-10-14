import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ data, children }) => {
  return (
    <div>
      <Header data={data.header} />
      <div>{children}</div>
      <Footer data={data.footer} />
    </div>
  );
};

export default Layout;
