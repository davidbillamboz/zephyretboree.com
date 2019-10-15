import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import IconTextColumns from '../IconTextColumns';

const HomePresentation = ({ services, buttons }) => (
  <>
    <IconTextColumns items={services} />
    <div className="columns has-text-centered">
      <div className="column has-text-right-tablet">
        <GatsbyLink to={buttons[0].url} className="button">
          {buttons[0].title}
        </GatsbyLink>
      </div>
      <div className="column has-text-left-tablet">
        <GatsbyLink to={buttons[1].url} className="button">
          {buttons[1].title}
        </GatsbyLink>
      </div>
    </div>
  </>
);

HomePresentation.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomePresentation;
