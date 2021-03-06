/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import GatsbyImage from 'gatsby-image/withIEPolyfill';

const PartnerContainerStyled = styled.div`
  background: #ffffff;
  padding: 30px;
`;

const TitleStyled = styled.h3`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 30px;
`;

const TextContainerStyled = styled.div`
  p {
    margin-bottom: 30px;
  }
`;

const LogoContainerStyled = styled.div`
  text-align: center;
  filter: grayscale(100%);
  transition: filter 0.23s ease-in;

  &:hover {
    filter: none;
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    text-align: right;
  }
`;

const ImageContainerStyled = styled.div`
  text-align: right;
`;

const AboutPartner = ({ title, text, link, button, image, logo }) => {
  const [textVisibility, setTextVisibility] = useState(false);

  const toggleText = e => {
    e.preventDefault();
    setTextVisibility(true);
  };

  const classText = !textVisibility ? 'is-hidden-mobile' : '';

  return (
    <PartnerContainerStyled>
      <div className="columns">
        <div className="column is-three-fifths">
          <TitleStyled>{title}</TitleStyled>
          <TextContainerStyled>
            <ReactMarkdown source={text} className={classText} />
          </TextContainerStyled>
          <LogoContainerStyled>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <GatsbyImage fixed={logo.childImageSharp.fixed} />
            </a>
          </LogoContainerStyled>
          {!textVisibility && (
            <div className="has-text-centered	is-hidden-tablet">
              <a href="#" onClick={e => toggleText(e)}>
                {button.title}
              </a>
            </div>
          )}
        </div>
        <ImageContainerStyled className="column is-hidden-mobile">
          <GatsbyImage fluid={image.childImageSharp.fluid} />
        </ImageContainerStyled>
      </div>
    </PartnerContainerStyled>
  );
};

AboutPartner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  logo: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fixed: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default AboutPartner;
