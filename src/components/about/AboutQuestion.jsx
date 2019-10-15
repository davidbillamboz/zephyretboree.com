import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  background: #ffffff;
  padding: 30px;

  & + & {
    margin-top: 30px;
  }
`;

const Title = styled.h3`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 30px;
`;

const Text = styled.div``;

const AboutQuestion = ({ title, text }) => (
  <QuestionContainer>
    <Title>{title}</Title>
    <Text dangerouslySetInnerHTML={{ __html: text }} />
  </QuestionContainer>
);

AboutQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutQuestion;
