/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextStyled = styled.div`
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
`;

const RichText = ({ content }) => (
  <TextStyled dangerouslySetInnerHTML={{ __html: content }} />
);

RichText.propTypes = {
  content: PropTypes.string.isRequired,
};

export default RichText;
