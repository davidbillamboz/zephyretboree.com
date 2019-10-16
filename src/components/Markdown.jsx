import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const TextContainer = styled.div`
  font-size: 1rem;
  margin-bottom: 20px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 20px;
  }

  h3,
  h4 {
    font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
    font-weight: bold;
    margin: 10px 0;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  p {
    margin-bottom: 10px;
  }
`;

const Markdown = ({ content }) => (
  <TextContainer>
    <ReactMarkdown source={content} />
  </TextContainer>
);

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;
