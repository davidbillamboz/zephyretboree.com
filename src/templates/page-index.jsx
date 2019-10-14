import React from 'react';
import { graphql } from 'gatsby';

const PageIndex = ({ data }) => <div>title: {data.page.frontmatter.title}</div>;

export default PageIndex;

export const pageQuery = graphql`
  query PageIndexQuery($lang: String!, $name: String!) {
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
