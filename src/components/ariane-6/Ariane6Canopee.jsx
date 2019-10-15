import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SubTitle from '../SubTitle';
import Markdown from '../Markdown';
import IconTextColumns from '../IconTextColumns';

const ImageContainerStyled = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProgressBarContainerStyled = styled.div`
  text-align: center;
`;

const TextContainerStyled = styled.div`
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 20px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 24px;
    line-height: 16px;
  }
`;

const ProgressBarStyled = styled.progress`
  width: 80%;
  margin: auto;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    width: 60%;
    max-width: 60%;
    max-width: 500px;
  }
`;

const Ariane6Canopee = ({ title, text, columns, image, progressBar }) => (
  <>
    <SubTitle>{title}</SubTitle>
    <Markdown content={text} />
    <IconTextColumns items={columns} />

    <ImageContainerStyled>
      <img src={`/images/${image}`} alt="" />
    </ImageContainerStyled>

    <ProgressBarContainerStyled>
      <TextContainerStyled>
        <Markdown content={progressBar.text} />
      </TextContainerStyled>
      <ProgressBarStyled
        className="progress is-primary"
        value={progressBar.value}
        max="100"
      >
        {progressBar.value}%
      </ProgressBarStyled>
    </ProgressBarContainerStyled>
  </>
);

Ariane6Canopee.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  progressBar: PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Ariane6Canopee;
