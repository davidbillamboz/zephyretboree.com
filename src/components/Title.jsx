import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleStyled = styled.h2`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  color: ${props => props.theme.primary};
  font-size: 16px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 22px;
  }
`;

const Title = ({ children }) => <TitleStyled>{children}</TitleStyled>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
