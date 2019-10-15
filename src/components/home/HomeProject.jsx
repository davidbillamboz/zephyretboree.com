import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image/withIEPolyfill';

const ProjectStyled = styled.div`
  @media (min-width: ${props => props.theme.breakpointTablet}) {
    div {
      width: 100%;
      max-width: 250px;
      margin: auto;
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  h4 {
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
  }

  p {
    font-size: 16px;
    line-height: 25px;
    @media (min-width: ${props => props.theme.breakpointTablet}) {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;

const Project = ({ imageDesktop, imageMobile, title, text }) => (
  <ProjectStyled className="column">
    <div>
      <GatsbyImage
        fluid={imageMobile.childImageSharp.fluid}
        className="is-hidden-tablet"
      />
      <GatsbyImage
        fluid={imageDesktop.childImageSharp.fluid}
        className="is-hidden-mobile"
      />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </ProjectStyled>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageDesktop: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  imageMobile: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default Project;
