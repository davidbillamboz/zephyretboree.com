import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Title from '../components/Title';

const Page404 = ({ data }) => {
  const { title } = data.page.frontmatter;
  return (
    <div className="container">
      <section className="section">
        <Title>{title}</Title>
      </section>
    </div>
  );
};

Page404.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Page404;

export const pageQuery = graphql`
  query Page404Query($lang: String!, $name: String!) {
    ...Header
    ...Footer

    page: markdownRemark(fields: { lang: { eq: $lang }, name: { eq: $name } }) {
      id
      frontmatter {
        metadata {
          title
          description
        }
        title
        image
      }
    }
  }
`;
