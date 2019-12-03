import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactContainerStyled = styled.div`
  max-width: 300px;
  margin: auto;
`;

const ContactNameRoleStyled = styled.div`
  border: 1px solid ${props => props.theme.anthracite};
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

const ContactNameStyled = styled.span`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  margin-right: 10px;
`;

const ContactRoleStyled = styled.span``;

const ContactMethodStyled = styled.div`
  margin-bottom: 10px;
  svg {
    color: ${props => props.theme.primary};
    margin-right: 10px;
  }
`;

const Contact = ({ name, role, email, phone }) => (
  <ContactContainerStyled>
    <ContactNameRoleStyled>
      <ContactNameStyled>{name}</ContactNameStyled>
      <ContactRoleStyled>{role}</ContactRoleStyled>
    </ContactNameRoleStyled>
    <ContactMethodStyled>
      <FontAwesomeIcon icon={faEnvelope} />
      {email}
    </ContactMethodStyled>
    <ContactMethodStyled>
      <FontAwesomeIcon icon={faPhone} />
      {phone}
    </ContactMethodStyled>
  </ContactContainerStyled>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

const ContactContacts = ({ contacts }) => {
  return (
    <div className="columns">
      {contacts &&
        contacts.map(({ name, role, email, phone }) => (
          <div className="column" key={role}>
            <Contact name={name} role={role} email={email} phone={phone} />
          </div>
        ))}
    </div>
  );
};

ContactContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactContacts;
