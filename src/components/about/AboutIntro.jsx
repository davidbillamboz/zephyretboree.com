import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import SubTitle from '../SubTitle';
import Markdown from '../Markdown';

const AboutIntro = ({ title, subTitle, text }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <Markdown content={text} />
  </>
);

AboutIntro.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutIntro;
