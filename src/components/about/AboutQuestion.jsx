import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const ContainerStyled = styled.div`
  background: #ffffff;
  padding: 30px;

  & + & {
    margin-top: 30px;
  }
`;

const TitleStyled = styled.h3`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 30px;
`;

const AboutQuestion = ({ title, text }) => (
  <ContainerStyled>
    <TitleStyled>{title}</TitleStyled>
    <ReactMarkdown source={text} />
  </ContainerStyled>
);

AboutQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutQuestion;
