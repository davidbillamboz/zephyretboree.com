import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import Title from '../Title';
import SubTitle from '../SubTitle';

const ImageContainer = styled.div`
  position: relative;

  .button-container {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    width: 100%;

    @media (min-width: ${props => props.theme.breakpointTablet}) {
      bottom: -20px;
    }
  }
`;

const HomeNews = ({ title, subTitle, button }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "pages/home/news/alizes-canopee.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <ImageContainer className="has-text-centered">
          <Img fluid={data.file.childImageSharp.fluid} />
          <div className="button-container">
            <GatsbyLink
              to={button.url}
              className="button is-primary is-hidden-tablet"
            >
              {button.title}
            </GatsbyLink>
            <GatsbyLink
              to={button.url}
              className="button is-primary is-large is-hidden-mobile"
            >
              {button.title}
            </GatsbyLink>
          </div>
        </ImageContainer>
      </>
    )}
  />
);

HomeNews.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeNews;
