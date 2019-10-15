import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Title';
import SubTitle from '../SubTitle';
import RichText from '../RichText';
import YoutubeVideo from '../YoutubeVideo';

const VideoContainerStyled = styled.div`
  margin-top: 3rem;
`;

const PartnerColumnStyled = styled.div`
  display: flex !important;
  align-items: center;
`;

const PartnerImageStyled = styled.img`
  width: 100%;
  filter: grayscale(100%);
  transition: filter 0.23s;

  &:hover {
    filter: none;
  }
`;

const Ariane6Intro = ({ title, subTitle, text, videoId, partners }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <RichText content={text} />
    <VideoContainerStyled>
      <YoutubeVideo videoId={videoId} />
    </VideoContainerStyled>
    <div className="columns is-mobile">
      {partners &&
        partners.map(partner => (
          <PartnerColumnStyled className="column" key={partner.logoPath}>
            <PartnerImageStyled
              src={`/images/${partner.logoPath}`}
              alt={partner.title}
            />
          </PartnerColumnStyled>
        ))}
    </div>
  </>
);

Ariane6Intro.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      logoPath: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Ariane6Intro;
