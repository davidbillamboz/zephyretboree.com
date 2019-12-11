import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FadeTransition from './FadeTransition';

const ProgressBarStyled = styled.progress`
  width: 100% !important;
  margin: auto;
  margin-bottom: 0 !important;

  &&::-webkit-progress-value {
    transition: width 0.5s ease;
  }
`;

const TitleColumnStyled = styled.div`
  font-size: 0.8rem;
  padding: 0.25rem !important;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    width: 200px;
    text-align: right;
    padding: 0.75rem !important;
    font-size: 1rem;
  }
`;

const ValueColumnStyled = styled.div`
  text-align: center;
  margin-bottom: 0 !important;
  padding: 0.25rem !important;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    padding: 0.75rem !important;
  }
`;

const TextWrapperStyled = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  position: relative;
  overflow: hidden;

  .fade-exit {
    position: absolute;
    top: 0;
  }
`;

const TextStyled = styled.div`
  width: 100%;
  height: 100%;
  font-style: italic;
  font-size: 0.8rem;
  text-align: left;
  color: #858585;
  line-height: 100%;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 0.9rem;
  }
`;

const PropulsionDetail = ({ propulsionId, title, text, value }) => (
  <div className="columns">
    <TitleColumnStyled className="column is-narrow">{title}</TitleColumnStyled>
    <ValueColumnStyled className="column">
      <ProgressBarStyled
        className="progress is-primary"
        value={value}
        max="100"
      >
        {value}%
      </ProgressBarStyled>
      <TextWrapperStyled>
        <FadeTransition id={propulsionId} withTranslationX>
          <TextStyled>{text}</TextStyled>
        </FadeTransition>
      </TextWrapperStyled>
    </ValueColumnStyled>
  </div>
);

PropulsionDetail.propTypes = {
  propulsionId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default PropulsionDetail;
