import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SubTitle from '../SubTitle';
import RichText from '../RichText';

const ImageContainerStyled = styled.div`
  text-align: center;
`;

const Ariane6Route = ({ title, text, image, text2 }) => (
  <>
    <SubTitle>{title}</SubTitle>
    <RichText content={text} />

    <ImageContainerStyled>
      <img src={`/images/${image}`} alt="" />
    </ImageContainerStyled>

    <RichText content={text2} />
  </>
);

Ariane6Route.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default Ariane6Route;
