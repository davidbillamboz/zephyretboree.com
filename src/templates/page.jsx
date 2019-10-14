import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => <div>title: {data.page.frontmatter.title}</div>;

export default Page;

export const pageQuery = graphql`
  query PageQuery($lang: String!, $slug: String!) {
    header: markdownRemark(
      fields: { lang: { eq: $lang }, name: { eq: "header" } }
    ) {
      id
      frontmatter {
        test
      }
    }
    footer: markdownRemark(
      fields: { lang: { eq: $lang }, name: { eq: "footer" } }
    ) {
      id
      frontmatter {
        test
      }
    }
    page: markdownRemark(fields: { lang: { eq: $lang }, slug: { eq: $slug } }) {
      id
      frontmatter {
        title
      }
    }
  }
`;
