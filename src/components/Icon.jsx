import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, ...rest }) => (
  <img src={`/images/icon_${name}.svg`} {...rest} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
