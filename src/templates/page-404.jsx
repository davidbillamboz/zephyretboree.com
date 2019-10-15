import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import Title from '../components/Title';

const ImageContainerStyled = styled.div`
  margin: 3rem 0;
`;

const Page404 = ({ data }) => {
  const { title, image } = data.page.frontmatter;
  return (
    <div className="container">
      <section className="section">
        <Title>{title}</Title>
        <ImageContainerStyled>
          <GatsbyImage fluid={image.childImageSharp.fluid} />
        </ImageContainerStyled>
      </section>
    </div>
  );
};

Page404.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({}).isRequired,
          }).isRequired,
        }).isRequired,
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
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
