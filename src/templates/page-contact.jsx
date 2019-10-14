import React from 'react';
import { graphql } from 'gatsby';

const PageContact = ({ data }) => (
  <div>title: {data.page.frontmatter.title}</div>
);

export default PageContact;

export const pageQuery = graphql`
  query PageContactQuery($lang: String!, $name: String!) {
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
