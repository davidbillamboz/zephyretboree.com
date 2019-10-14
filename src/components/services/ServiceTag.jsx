import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ServiceTagStyled = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  color: #6b6b6b;
  display: inline-block;
  padding: 10px 15px;
  margin-top: 20px;
  cursor: default;
  font-size: 14px;
  text-align: center;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    width: auto;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const ServiceTag = ({ children }) => (
  <ServiceTagStyled>{children}</ServiceTagStyled>
);

ServiceTag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ServiceTag;
