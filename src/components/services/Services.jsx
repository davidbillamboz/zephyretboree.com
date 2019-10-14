import React from 'react';
import PropTypes from 'prop-types';
import Service from './Service';

const Services = ({ services, contactButton }) => (
  <div>
    {services &&
      services.map(service => (
        <Service
          key={service.icon}
          {...service}
          contactButton={contactButton}
        />
      ))}
  </div>
);

Services.propTypes = {
  contactButton: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  services: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Services;
