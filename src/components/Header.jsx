import React from 'react';
import { graphql } from 'gatsby';

const Header = ({ data }) => {
  return <div>{data.frontmatter.title}</div>;
};

export default Header;

export const query = graphql`
  fragment Header on Query {
    header: markdownRemark(
      fields: { lang: { eq: $lang }, name: { eq: "header" } }
    ) {
      id
      frontmatter {
        title
      }
    }
  }
`;
