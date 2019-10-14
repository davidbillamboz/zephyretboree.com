import React from 'react';

const Layout = ({ data, children }) => {
  console.error(data);

  return (
    <div>
      <div>{data.header.frontmatter.title}</div>
      <div>{children}</div>
      <div>{data.footer.frontmatter.title}</div>
    </div>
  );
};

export default Layout;
