import React from 'react';

const Layout = ({ data, children }) => {
  console.error(data);

  return (
    <div>
      <div>{data.header.frontmatter.test}</div>
      <div>{children}</div>
      <div>{data.footer.frontmatter.test}</div>
    </div>
  );
};

export default Layout;
