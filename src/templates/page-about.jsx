import React from 'react';
import { graphql } from 'gatsby';

const PageAbout = ({ data }) => <div>title: {data.page.frontmatter.title}</div>;

export default PageAbout;

export const pageQuery = graphql`
  query PageAboutQuery($lang: String!, $name: String!) {
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
