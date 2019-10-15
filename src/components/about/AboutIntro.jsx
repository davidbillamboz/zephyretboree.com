import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import SubTitle from '../SubTitle';
import RichText from '../RichText';

const AboutIntro = ({ title, subTitle, text }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <RichText content={text} />
  </>
);

AboutIntro.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutIntro;
