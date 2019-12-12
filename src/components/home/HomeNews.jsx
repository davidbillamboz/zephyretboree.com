import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import Title from '../Title';
import SubTitle from '../SubTitle';

const ImageContainerStyled = styled.div`
  position: relative;
`;

const ButtonContainerStyled = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    bottom: -20px;
  }
`;

const ButtonStyled = styled(GatsbyLink)`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  border: none !important;
`;

const HomeNews = ({ title, subTitle, image, button }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <ImageContainerStyled className="has-text-centered">
      <GatsbyImage fluid={image.childImageSharp.fluid} />
      <ButtonContainerStyled className="button-container">
        <ButtonStyled
          to={button.url}
          className="button is-primary is-hidden-tablet"
        >
          {button.title}
        </ButtonStyled>
        <ButtonStyled
          to={button.url}
          className="button is-primary is-large is-hidden-mobile"
        >
          {button.title}
        </ButtonStyled>
      </ButtonContainerStyled>
    </ImageContainerStyled>
  </>
);

HomeNews.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeNews;
