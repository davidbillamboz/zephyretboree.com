import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import ReactMarkdown from 'react-markdown';
import Title from '../Title';
import SubTitle from '../SubTitle';

const FirstColumn = styled.div`
  background: #ffffff;
  padding: 30px;
`;

const Image1 = styled.img`
  display: block;
  margin: auto;
`;

const Text3ContainerStyled = styled.div`
  margin-top: 30px;
`;

const AboutOrigins = ({ title, subTitle, text1, text2, image, text3 }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <div className="columns">
      <div className="column">
        <FirstColumn>
          <Image1 src="/images/icons/co2.svg" alt="" width="85" />
          <ReactMarkdown source={text1} />
        </FirstColumn>
      </div>
      <div className="column">
        <ReactMarkdown source={text2} />
      </div>
    </div>
    <GatsbyImage fluid={image.childImageSharp.fluid} />
    <Text3ContainerStyled>
      <ReactMarkdown source={text3} />
    </Text3ContainerStyled>
  </>
);

AboutOrigins.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  text3: PropTypes.string.isRequired,
};

export default AboutOrigins;
