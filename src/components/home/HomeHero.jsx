import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image/withIEPolyfill';

const CatchlineStyled = styled.div`
  text-align: right;

  .catchline-line {
    font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 2.1rem;
    font-size: 9vw;
    line-height: 11vw;

    @media (min-width: 769px) {
      font-size: 5vw;
      line-height: 6vw;
    }

    @media (min-width: 1200px) {
      font-size: 3.8rem;
      line-height: 4.5rem;
    }

    &:nth-child(1) {
      color: #ffffff;
    }
    &:nth-child(2) {
      color: ${props => props.theme.blue3};
    }
    &:nth-child(3) {
      color: ${props => props.theme.anthracite};
    }
  }
`;

const ColumnTextStyled = styled.div`
  @media (min-width: ${props => props.theme.breakpointTablet}) {
    align-self: flex-end;
  }
`;

const TextStyled = styled.div`
  color: ${props => props.theme.blue3};
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.2rem;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    margin-bottom: 6px;
    font-size: 1rem;
    line-height: 1.1rem;
  }
`;

const BarStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10px;
  background: ${props => props.theme.anthracite};
`;

const HomeHeroStyled = styled.section`
  position: relative;
  height: 100vh !important;
  min-height: 500px !important;

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    padding: 5.25rem 30px 10px;
    @media (min-width: 769px) {
      padding-top: 7.2rem;
    }
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 50%;
    transform: translateX(-50%);
    margin: 0 auto !important;
    display: flex;
    align-items: flex-end;
  }

  .hero-head .container {
    margin-top: 40px;
    margin-top: 4vh;

    @media (min-width: ${props => props.theme.breakpointTablet}) {
      margin-top: 40px;
    }
  }
`;

const HomeHero = ({ image, catchline, text }) => (
  <HomeHeroStyled className="hero is-fullheight-with-navbar">
    <GatsbyImage fluid={image.childImageSharp.fluid} />
    <div className="hero-head">
      <div className="container">
        <div className="columns">
          <div className="column">
            <CatchlineStyled dangerouslySetInnerHTML={{ __html: catchline }} />
          </div>
          <ColumnTextStyled className="column">
            <TextStyled>{text}</TextStyled>
          </ColumnTextStyled>
        </div>
      </div>
    </div>
    <BarStyled />
  </HomeHeroStyled>
);

HomeHero.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  catchline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomeHero;
