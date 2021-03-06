import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const ContainerStyled = styled.div`
  background: #ffffff;
  padding: 30px;
`;

const TitleStyled = styled.h3`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

const IconStyled = styled(Icon)`
  display: block;
  margin: auto;
  width: 85px;
`;

const TextStyled = styled.div``;

const AboutValue = ({ title, icon, text }) => (
  <ContainerStyled>
    <TitleStyled>{title}</TitleStyled>
    <IconStyled name={icon} width="40" height="40" />
    <TextStyled dangerouslySetInnerHTML={{ __html: text }} />
  </ContainerStyled>
);

AboutValue.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutValue;
