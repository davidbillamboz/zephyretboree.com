import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import ServiceTag from './ServiceTag';

const ServiceTitle = styled.h4`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  color: ${props => props.theme.black};
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 25px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const ServiceStyled = styled.div`
  border: none !important;

  :not(:first-child) {
    margin-top: 3rem !important;
  }

  .media-content .icon-title {
    align-items: center;

    @media (max-width: ${props => props.theme.breakpointTablet}) {
      ${ServiceTitle} {
        margin-bottom: 0;
        margin-left: 20px;
      }
    }
  }

  .media-content .image {
    @media (min-width: ${props => props.theme.breakpointTablet}) {
      display: none;
    }
  }

  .contact-link {
    display: block;
    text-align: center;
    margin-top: 20px;
  }
`;

const Service = ({ contactButton, icon, title, text, tags }) => (
  <ServiceStyled className="media">
    <figure className="media-left is-hidden-mobile">
      <p className="image is-64x64">
        <img src={`/images/icons/${icon}.svg`} width="40" height="40" alt="" />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <div className="icon-title is-flex-mobile">
          <div className="image is-64x64">
            <img
              className="is-hidden-tablet"
              src={`/images/icons/${icon}.svg`}
              width="40"
              height="40"
              alt=""
            />
          </div>
          <ServiceTitle>{title}</ServiceTitle>
        </div>
        <div>
          {text}
          {` `}
          <GatsbyLink to={contactButton.url} className="is-hidden-mobile">
            {contactButton.title}
          </GatsbyLink>
        </div>
        {tags && tags.map(tag => <ServiceTag key={tag}>{tag}</ServiceTag>)}
        <GatsbyLink
          to={contactButton.url}
          className="contact-link is-hidden-tablet"
        >
          {contactButton.title}
        </GatsbyLink>
      </div>
    </div>
  </ServiceStyled>
);

Service.propTypes = {
  contactButton: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Service;
