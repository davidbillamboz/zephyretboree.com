import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubTitleStyled = styled.h3`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  color: ${props => props.theme.black};
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 25px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const SubTitle = ({ children }) => <SubTitleStyled>{children}</SubTitleStyled>;

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubTitle;
