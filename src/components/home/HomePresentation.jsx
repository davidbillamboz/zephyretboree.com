import React from 'react';
import PropTypes from 'prop-types';
import IconTextColumns from '../IconTextColumns';

const HomePresentation = ({ services }) => (
  <>
    <IconTextColumns items={services} />
  </>
);

HomePresentation.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HomePresentation;
