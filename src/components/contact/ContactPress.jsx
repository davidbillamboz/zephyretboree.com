import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import SubTitle from '../SubTitle';

const ContactPress = ({ title, subTitle, buttonDownload }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <a
        className="button is-primary"
        title={buttonDownload.title}
        href={buttonDownload.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonDownload.title}
      </a>
    </>
  );
};

ContactPress.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  buttonDownload: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactPress;
