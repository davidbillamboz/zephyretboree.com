import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import SubTitle from '../SubTitle';
import Markdown from '../Markdown';

const RouteMapImageContainerStyled = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const ImageContainerStyled = styled.div`
  margin: 3rem 0;
  text-align: center;
`;

const Ariane6Route = ({ title, text, routeMapImage, image, text2 }) => (
  <>
    <SubTitle>{title}</SubTitle>
    <Markdown content={text} />

    <RouteMapImageContainerStyled>
      <GatsbyImage fluid={routeMapImage.childImageSharp.fluid} />
    </RouteMapImageContainerStyled>

    <ImageContainerStyled>
      <GatsbyImage fluid={image.childImageSharp.fluid} />
    </ImageContainerStyled>

    <Markdown content={text2} />
  </>
);

Ariane6Route.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  routeMapImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  text2: PropTypes.string.isRequired,
};

export default Ariane6Route;
