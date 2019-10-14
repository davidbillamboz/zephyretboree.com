import React from 'react';
import { graphql } from 'gatsby';

const PageIndex = ({ data }) => <div>title: {data.page.frontmatter.title}</div>;

export default PageIndex;

export const pageQuery = graphql`
  query PageIndexQuery($lang: String!, $name: String!) {
    header: markdownRemark(
      fields: { lang: { eq: $lang }, name: { eq: "header" } }
    ) {
      id
      frontmatter {
        title
      }
    }
    footer: markdownRemark(
      fields: { lang: { eq: $lang }, name: { eq: "footer" } }
    ) {
      id
      frontmatter {
        title
      }
    }
    page: markdownRemark(fields: { lang: { eq: $lang }, name: { eq: $name } }) {
      id
      frontmatter {
        title
      }
    }
  }
`;
