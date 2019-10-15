import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import SubTitle from '../SubTitle';
import RichText from '../RichText';
import AboutQuestion from './AboutQuestion';

const AboutQuestions = ({ title, subTitle, text, questions }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <RichText content={text} />
    {questions &&
      questions.map((question, index) => (
        <AboutQuestion key={index} {...question} />
      ))}
  </>
);

AboutQuestions.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AboutQuestions;
