import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image/withIEPolyfill';

const Catchline = styled.div`
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

const ColumnText = styled.div`
  @media (min-width: ${props => props.theme.breakpointTablet}) {
    align-self: flex-end;
  }
`;

const Text = styled.div`
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

const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10px;
  background: ${props => props.theme.anthracite};
`;

const HomeHeroStyled = styled.section`
  /* to let the content be visible when the screen height is small */
  min-height: 500px !important;
  /* adapt the height to match the navbar height */
  height: calc(100vh - 5.25rem) !important;
  position: relative;

  /* navbar has a .is-spaced class that adds padding on tablets */
  @media (min-width: 769px) {
    height: calc(100vh - 7.2rem) !important;
  }

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
    padding: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -95%);
    margin: 0 auto !important;
  }

  .hero-head .container {
    margin-top: 40px;
    margin-top: 4vh;

    @media (min-width: ${props => props.theme.breakpointTablet}) {
      margin-top: 40px;
    }
  }
`;

const HomeHero = ({ image, text1, text2, text3, text }) => (
  <HomeHeroStyled className="hero is-fullheight-with-navbar">
    <GatsbyImage fluid={image.childImageSharp.fluid} />
    <div className="hero-head">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Catchline>
              {[text1, text2, text3].map(item => (
                <div className="catchline-line" key={item}>
                  {item}
                </div>
              ))}
            </Catchline>
          </div>
          <ColumnText className="column">
            <Text>{text}</Text>
          </ColumnText>
        </div>
      </div>
    </div>
    <Bar />
  </HomeHeroStyled>
);

HomeHero.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomeHero;
