import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Title';
import SubTitle from '../SubTitle';
import RichText from '../RichText';
import AboutValue from './AboutValue';

const ValuesContainerStyled = styled.div`
  margin-top: 30px !important;
`;

const AboutValues = ({ title, subTitle, text, values }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <RichText content={text} />

    <ValuesContainerStyled className="columns">
      {values &&
        values.map((value, index) => (
          <div className="column is-flex" key={index}>
            <AboutValue {...value} />
          </div>
        ))}
    </ValuesContainerStyled>
  </>
);

AboutValues.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AboutValues;
