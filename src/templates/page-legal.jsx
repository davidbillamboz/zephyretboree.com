import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Markdown from '../components/Markdown';

const PageLegal = ({ data }) => {
  const { pageTitle, content } = data.page.frontmatter;
  return (
    <div className="container">
      <section className="section">
        <Title>{pageTitle}</Title>
        <Markdown content={content} />
      </section>
    </div>
  );
};

PageLegal.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        pageTitle: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageLegal;

export const pageQuery = graphql`
  query PageLegalQuery($lang: String!, $name: String!) {
    ...Header
    ...Footer

    page: markdownRemark(fields: { lang: { eq: $lang }, name: { eq: $name } }) {
      id
      frontmatter {
        metadata {
          title
          description
        }
        pageTitle
        content
      }
    }
  }
`;
