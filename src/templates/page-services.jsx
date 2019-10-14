import React from 'react';
import { graphql } from 'gatsby';

const PageServices = ({ data }) => (
  <div>title: {data.page.frontmatter.title}</div>
);

export default PageServices;

export const pageQuery = graphql`
  query PageServicesQuery($lang: String!, $name: String!) {
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
