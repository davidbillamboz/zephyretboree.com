import React from 'react';
import { graphql } from 'gatsby';

const Footer = ({ data }) => {
  return <div>{data.frontmatter.title}</div>;
};

export default Footer;

export const query = graphql`
  fragment Footer on Query {
    footer: markdownRemark(
      fields: { lang: { eq: $lang }, name: { eq: "footer" } }
    ) {
      id
      frontmatter {
        title
      }
    }
  }
`;
