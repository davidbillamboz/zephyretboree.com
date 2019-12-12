import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import FlipNumbers from 'react-flip-numbers';
import Title from '../../Title';
import SubTitle from '../../SubTitle';
import Markdown from '../../Markdown';
import PropulsionDetail from './PropulsionDetail';
import Slider from './Slider';
import FadeTransition from './FadeTransition';

const PropulsionDetailsStyled = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  padding: 1rem;
  margin-top: 1rem;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    padding: 2rem;
    padding-top: 3rem;
    margin-top: 3rem;
  }
`;

const SliderTitleStyled = styled.div`
  color: ${props => props.theme.blue2};
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1rem;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  span {
    margin-left: 0.5rem;
    color: ${props => props.theme.anthracite};
  }
`;

const PropulsionTextWrapperStyled = styled.div`
  position: relative;
  overflow: hidden;

  .fade-exit {
    position: absolute;
    top: 0;
  }
`;

const PropulsionTextStyled = styled.div``;

const ServicesSimulator = ({
  title,
  subTitle,
  text,
  sliderConfig,
  valuesConfig,
  propulsions,
}) => {
  const theme = useContext(ThemeContext);
  const [sliderValue, setSliderValue] = useState(sliderConfig.defaultValue);

  const range = Math.abs(sliderConfig.max.value - sliderConfig.min.value);
  const ratio = (sliderValue - sliderConfig.min.value) / range;

  // Update current propulsion
  const currentPropulsion = Math.min(
    propulsions.length - 1,
    Math.floor(ratio * propulsions.length)
  );

  // Update values
  const values = valuesConfig.reduce((accumulator, { min, max, name }) => {
    const minValue = Math.min(min, max);
    const rangeValue = Math.abs(max - min);
    const percentage = min >= max ? ratio : 1 - ratio;
    const result = minValue + rangeValue * percentage;
    accumulator[name] = result;
    return accumulator;
  }, {});

  const engineValue = 100 - sliderValue;
  const sailValue = sliderValue;

  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Markdown content={text} />

      <div className="columns is-mobile">
        <SliderTitleStyled className="column">
          {sliderConfig.min.title}
          <span>{engineValue}%</span>
        </SliderTitleStyled>
        <SliderTitleStyled className="column has-text-right">
          {sliderConfig.max.title}
          <span>{sailValue}%</span>
        </SliderTitleStyled>
      </div>

      <Slider
        defaultValue={sliderValue}
        onChange={setSliderValue}
        min={sliderConfig.min.value}
        max={sliderConfig.max.value}
      />

      <PropulsionDetailsStyled>
        {valuesConfig.map(({ name, title: valueTitle }) => (
          <PropulsionDetail
            key={name}
            title={valueTitle}
            propulsionId={currentPropulsion}
            text={propulsions[currentPropulsion].valuesText[name]}
            value={values[name]}
          />
        ))}

        <PropulsionTextWrapperStyled>
          <FadeTransition id={currentPropulsion} withTranslationY>
            <PropulsionTextStyled>
              {propulsions[currentPropulsion].text}
            </PropulsionTextStyled>
          </FadeTransition>
        </PropulsionTextWrapperStyled>
      </PropulsionDetailsStyled>
    </>
  );
};

ServicesSimulator.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sliderConfig: PropTypes.shape({
    defaultValue: PropTypes.number.isRequired,
    min: PropTypes.shape({
      value: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    max: PropTypes.shape({
      value: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  valuesConfig: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    })
  ).isRequired,
  propulsions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      valuesText: PropTypes.shape({
        delay: PropTypes.string.isRequired,
        speed: PropTypes.string.isRequired,
        emissions: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default ServicesSimulator;
