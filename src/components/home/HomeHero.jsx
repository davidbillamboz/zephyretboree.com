import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyBackgroundImage from 'gatsby-background-image';
import GatsbyLink from 'gatsby-link';

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

const ContainerStyled = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 40%;
  text-align: center;
  padding: 1rem;
`;

const CatchlineStyled = styled.div`
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

const TextStyled = styled.div`
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

const ButtonWrapperStyled = styled.div`
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

const BorderStyled = styled.div`
  position: absolute;
  background: ${props => props.theme.white};
`;

const BorderLeftStyled = styled(BorderStyled)`
  left: 0;
  top: 0;
  bottom: 0;
  width: ${outerBorderSize}rem;
  height: 100%;
`;

const BorderTopStyled = styled(BorderStyled)`
  left: 0;
  right: 0;
  top: 0;
  height: ${outerBorderSize}rem;
  width: 100%;
`;

const BorderRightStyled = styled(BorderStyled)`
  right: 0;
  top: 0;
  bottom: 0;
  width: ${outerBorderSize}rem;
  height: 100%;
`;

const BorderBottomStyled = styled(BorderStyled)`
  left: 0;
  right: 0;
  bottom: 0;
  height: ${outerBorderSize * 2}rem;
  width: 100%;
  padding: 0 ${outerBorderSize}rem;
`;

const BorderBottomBisStyled = styled.div`
  width: 100%;
  height: ${outerBorderSize}rem;
  background: ${props => props.theme.anthracite};
`;

const HomeHero = ({ image, catchline, text, button }) => (
  <HomeHeroStyled className="hero is-fullheight-with-navbar">
    <BackgroundImageStyled fluid={image.childImageSharp.fluid}>
      <ContainerStyled>
        <CatchlineStyled dangerouslySetInnerHTML={{ __html: catchline }} />
        <TextStyled>{text}</TextStyled>
      </ContainerStyled>
      <ButtonWrapperStyled>
        <ButtonStyled className="button" to={button.url}>
          {button.title}
        </ButtonStyled>
      </ButtonWrapperStyled>
    </BackgroundImageStyled>
    <BorderLeftStyled />
    <BorderTopStyled />
    <BorderRightStyled />
    <BorderBottomStyled>
      <BorderBottomBisStyled />
    </BorderBottomStyled>
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
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeHero;
