import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image/withIEPolyfill';

const ImageMobileStyled = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  max-width: 250px;
  margin: auto;
`;

const ImageTabletStyled = styled(GatsbyImage)`
  width: 100%;
  height: auto;
`;

const TitleStyled = styled.h4`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  margin: 0.75rem 0;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 25px;
    line-height: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 27px;
  }
`;

const TextStyled = styled.p`
  font-size: 16px;
  line-height: 25px;
  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const Project = ({ imageHorizontal, imageVertical, title, text }) => (
  <div className="column">
    <div className="has-text-centered-mobile">
      <ImageMobileStyled
        fluid={imageHorizontal.childImageSharp.fluid}
        className="is-hidden-tablet"
      />
      <ImageTabletStyled
        fluid={imageVertical.childImageSharp.fluid}
        className="is-hidden-mobile"
      />
      <TitleStyled>{title}</TitleStyled>
      <TextStyled>{text}</TextStyled>
    </div>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageHorizontal: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  imageVertical: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default Project;
