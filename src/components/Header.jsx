import React from 'react';

const Header = ({ data }) => {
  return <div>{data.frontmatter.title}</div>;
};

export default Header;
