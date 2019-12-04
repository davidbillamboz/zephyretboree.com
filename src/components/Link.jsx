import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import Icon from './Icon';

const Link = ({ url, icon, title, ...rest }) => {
  const fixedUrl = `${url === 'home' ? '' : url}`;
  const isExternal = url.substr(0, 4) === 'http';

  return (
    <>
      {isExternal && (
        <a href={fixedUrl} target="_blank" rel="noopener noreferrer">
          {icon ? <img src={`/images/icon_${icon}.svg`} alt={title} /> : title}
        </a>
      )}
      {!isExternal && (
        <GatsbyLink to={fixedUrl} {...rest}>
          {icon ? <Icon name={icon} /> : title}
        </GatsbyLink>
      )}
    </>
  );
};

Link.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Link.defaultProps = {
  icon: null,
};

export default Link;
