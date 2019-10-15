import React from 'react';
import PropTypes from 'prop-types';
import AboutPartner from './AboutPartner';

const AboutPartners = ({ button, partners }) => (
  <>
    {partners &&
      partners.map((partner, index) => (
        <section key={index} className="section">
          <AboutPartner {...partner} button={button} />
        </section>
      ))}
  </>
);

AboutPartners.propTypes = {
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  partners: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AboutPartners;
