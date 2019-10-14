import React from 'react';
import { graphql } from 'gatsby';

const PageLegal = ({ data }) => <div>title: {data.page.frontmatter.title}</div>;

export default PageLegal;

export const pageQuery = graphql`
  query PageLegalQuery($lang: String!, $name: String!) {
    ...Header
    ...Footer

    page: markdownRemark(fields: { lang: { eq: $lang }, name: { eq: $name } }) {
      id
      frontmatter {
        title
      }
    }
  }
`;
