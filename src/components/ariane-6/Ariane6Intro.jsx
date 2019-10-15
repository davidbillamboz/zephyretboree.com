import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import Title from '../Title';
import SubTitle from '../SubTitle';
import Markdown from '../Markdown';
import YoutubeVideo from '../YoutubeVideo';

const VideoContainerStyled = styled.div`
  margin-top: 3rem;
`;

const PartnerColumnStyled = styled.div`
  display: flex !important;
  align-items: center;
`;

const PartnerImageContainerStyled = styled.div`
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
    <Markdown content={text} />
    <VideoContainerStyled>
      <YoutubeVideo videoId={videoId} />
    </VideoContainerStyled>
    <div className="columns is-mobile">
      {partners &&
        partners.map((partner, index) => (
          <PartnerColumnStyled className="column" key={index}>
            <PartnerImageContainerStyled>
              {partner.logo.extension !== 'svg' && (
                <GatsbyImage fixed={partner.logo.childImageSharp.fixed} />
              )}
              {partner.logo.extension === 'svg' && (
                <img src={partner.logo.publicURL} alt={partner.title} />
              )}
            </PartnerImageContainerStyled>
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
      logo: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.shape({}),
        }),
        extension: PropTypes.string,
        publicURL: PropTypes.string,
      }).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Ariane6Intro;
