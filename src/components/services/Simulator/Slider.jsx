import React from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slider';

const THUMB_HEIGHT_MOBILE = 40;
const THUMB_WIDTH_MOBILE = 20;
const STEP_WIDTH_MOBILE = 1;
const INTERNAL_STEP_WIDTH_MOBILE = 1;

const THUMB_HEIGHT = 60;
const THUMB_WIDTH = 20;
const STEP_WIDTH = 2;
const INTERNAL_STEP_WIDTH = 1;

const EXTERNAL_STEP_HEIGHT_PERCENTAGE = 80;
const INTERNAL_STEP_HEIGHT_PERCENTAGE = 60;

const ThumbStyled = styled.div`
  text-align: center;
  background-color: ${props => props.theme.blue2};
  color: #fff;
  cursor: grab;
  border-radius: ${THUMB_WIDTH_MOBILE / 2}px;
  height: ${THUMB_HEIGHT_MOBILE}px;
  width: ${THUMB_WIDTH_MOBILE}px;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    border-radius: ${THUMB_WIDTH / 2}px;
    height: ${THUMB_HEIGHT}px;
    width: ${THUMB_WIDTH}px;
  }
`;

const Thumb = props => <ThumbStyled {...props} />;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: transparent;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const SliderContainerStyled = styled.div`
  position: relative;
  height: ${THUMB_HEIGHT_MOBILE}px;
  margin-left: -${THUMB_WIDTH_MOBILE / 2}px;
  margin-right: -${THUMB_WIDTH_MOBILE / 2}px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    height: ${THUMB_HEIGHT}px;
    margin-left: -${THUMB_WIDTH / 2}px;
    margin-right: -${THUMB_WIDTH / 2}px;
  }
`;

const SliderStepsStyled = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  left: ${THUMB_WIDTH_MOBILE / 2}px;
  width: calc(100% - ${THUMB_WIDTH_MOBILE}px);
  height: ${THUMB_HEIGHT_MOBILE}px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    left: ${THUMB_WIDTH / 2}px;
    width: calc(100% - ${THUMB_WIDTH}px);
    height: ${THUMB_HEIGHT}px;
  }

  div {
    flex-grow: 1;
    height: 100%;
    position: relative;

    &:before {
      position: absolute;
      left: 0;
      display: block;
      content: '';
    }

    &:not(:first-child):before {
      background: ${props => props.theme.grayDark};
      top: ${(100 - INTERNAL_STEP_HEIGHT_PERCENTAGE) / 2}%;
      height: ${INTERNAL_STEP_HEIGHT_PERCENTAGE}%;
      width: ${INTERNAL_STEP_WIDTH_MOBILE}px;

      @media (min-width: ${props => props.theme.breakpointTablet}) {
        width: ${INTERNAL_STEP_WIDTH}px;
      }
    }

    &:first-child:before {
      background: ${props => props.theme.grayDark};
      top: ${(100 - EXTERNAL_STEP_HEIGHT_PERCENTAGE) / 2}%;
      height: ${EXTERNAL_STEP_HEIGHT_PERCENTAGE}%;
      width: ${STEP_WIDTH_MOBILE}px;

      @media (min-width: ${props => props.theme.breakpointTablet}) {
        width: ${STEP_WIDTH}px;
      }
    }

    &:last-child:after {
      position: absolute;
      right: 0;
      top: 0;
      display: block;
      content: '';
      height: 100%;
      background: ${props => props.theme.grayDark};
      width: ${STEP_WIDTH_MOBILE}px;

      @media (min-width: ${props => props.theme.breakpointTablet}) {
        width: ${STEP_WIDTH}px;
      }
    }
  }
`;

const SliderLineStyled = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.theme.grayDark};
  left: ${THUMB_WIDTH_MOBILE / 2}px;
  width: calc(100% - ${THUMB_WIDTH_MOBILE + STEP_WIDTH_MOBILE}px);
  height: ${STEP_WIDTH_MOBILE}px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    left: ${THUMB_WIDTH / 2}px;
    width: calc(100% - ${THUMB_WIDTH + STEP_WIDTH}px);
    height: ${STEP_WIDTH}px;
  }

  &:before {
    position: absolute;
    content: '';
    display: block;
    background: #f8f9f9;
    top: -5px;
    height: 5px;
    width: calc(100% - ${STEP_WIDTH_MOBILE * 3}px);
    left: ${STEP_WIDTH_MOBILE}px;

    @media (min-width: ${props => props.theme.breakpointTablet}) {
      width: calc(100% - ${STEP_WIDTH * 3}px);
      left: ${STEP_WIDTH}px;
    }
  }

  &:after {
    position: absolute;
    content: '';
    display: block;
    background: #f8f9f9;
    height: 5px;
    width: calc(100% - ${STEP_WIDTH_MOBILE * 3}px);
    left: ${STEP_WIDTH_MOBILE}px;
    top: ${STEP_WIDTH_MOBILE}px;

    @media (min-width: ${props => props.theme.breakpointTablet}) {
      width: calc(100% - ${STEP_WIDTH * 3}px);
      left: ${STEP_WIDTH}px;
      top: ${STEP_WIDTH}px;
    }
  }
`;

const SliderStyled = styled(ReactSlider)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
`;

const Slider = rest => {
  return (
    <SliderContainerStyled>
      <SliderStepsStyled>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </SliderStepsStyled>
      <SliderLineStyled />
      <SliderStyled renderTrack={Track} renderThumb={Thumb} {...rest} />
    </SliderContainerStyled>
  );
};

export default Slider;
