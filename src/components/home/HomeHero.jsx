import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyBackgroundImage from 'gatsby-background-image';
import GatsbyLink from 'gatsby-link';
import { useSpring, useChain, animated } from 'react-spring';

const outerBorderSize = 0.5;

const HomeHeroStyled = styled.section`
  position: relative;
  height: 100vh !important;
  min-height: 500px !important;
  margin: -${outerBorderSize}rem;
  margin-bottom: -${outerBorderSize * 2}rem;
`;

const BackgroundImageStyled = styled(GatsbyBackgroundImage)`
  width: 100%;
  height: 100%;
`;

const BackgroundBorderStyled = styled(animated.div)`
  width: 100%;
  height: 100%;
  border: 0 solid #ffffff;
`;

const ContainerStyled = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 40%;
  text-align: center;
  padding: 1rem;
`;

const CatchlineStyled = styled(animated.div)`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  line-height: 100%;
  font-size: 11vw;

  @media (min-width: 500px) {
    font-size: 8vw;
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 5rem;
  }

  span {
    &.color-1 {
      color: ${props => props.theme.white};
    }
    &.color-2 {
      color: ${props => props.theme.anthracite};
    }
    &.color-3 {
      color: ${props => props.theme.blue2};
    }
  }
`;

const TextStyled = styled(animated.div)`
  color: ${props => props.theme.anthracite};
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  line-height: 100%;
  width: 100%;
  max-width: 500px;
  margin: auto;
  margin-top: 1rem;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.7rem;
    max-width: auto;
    width: 70%;
  }
`;

const ButtonWrapperStyled = styled(animated.div)`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20%;
  text-align: center;
`;

const ButtonStyled = styled(GatsbyLink)`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  margin-top: 4rem;
  font-size: 1rem;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    margin-top: 8rem;
    font-size: 1.5rem !important;
  }
`;

const HomeHero = ({ image, catchline, text, button }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const borderRef = useRef();
  const borderStyleProps = useSpring({
    ref: borderRef,
    from: { borderWidth: 0 },
    to: { borderWidth: imageLoaded ? 10 : 0 },
  });

  const catchlineRef = useRef();
  const catchlineStyleProps = useSpring({
    ref: catchlineRef,
    from: { transform: 'translateX(-30%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: imageLoaded ? 1 : 0 },
  });

  const textRef = useRef();
  const textStyleProps = useSpring({
    ref: textRef,
    from: { opacity: 0 },
    to: { opacity: imageLoaded ? 1 : 0 },
  });

  const buttonRef = useRef();
  const buttonStyleProps = useSpring({
    ref: buttonRef,
    from: { transform: 'translateY(30%)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  });

  const onImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 1000);
  };

  useChain([
    { current: borderRef.current },
    { current: catchlineRef.current },
    { current: textRef.current },
    { current: buttonRef.current },
  ]);

  return (
    <HomeHeroStyled className="hero is-fullheight-with-navbar">
      <BackgroundImageStyled
        fluid={image.childImageSharp.fluid}
        onLoad={onImageLoad}
      >
        <BackgroundBorderStyled style={borderStyleProps} />
        <ContainerStyled>
          <CatchlineStyled
            style={catchlineStyleProps}
            dangerouslySetInnerHTML={{ __html: catchline }}
          />
          <TextStyled style={textStyleProps}>{text}</TextStyled>
        </ContainerStyled>
        <ButtonWrapperStyled style={buttonStyleProps}>
          <ButtonStyled className="button" to={button.url}>
            {button.title}
          </ButtonStyled>
        </ButtonWrapperStyled>
      </BackgroundImageStyled>
    </HomeHeroStyled>
  );
};

HomeHero.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  catchline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeHero;
