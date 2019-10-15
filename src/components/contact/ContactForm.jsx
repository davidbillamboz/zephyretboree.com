import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Title';
import SubTitle from '../SubTitle';
import AnimatedCheck from '../AnimatedCheck';

const Form = styled.form`
  max-width: 500px;
  margin: auto;
`;

const FormSuccessMessage = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactForm = ({ title, subTitle, form }) => {
  const [formDisabled, setFormDisabled] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [formData, setFormData] = useState({
    'bot-field': '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formDomEl = e.target;

    // Disable form
    setFormDisabled(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': formDomEl.getAttribute('name'),
          ...formData,
        }),
      });
      setFormSent(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setFormDisabled(false);
      setHasError(true);
    }
  };

  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      {formSent && (
        <div>
          <AnimatedCheck />
          <FormSuccessMessage>{form.messages.success}</FormSuccessMessage>
        </div>
      )}
      {!formSent && (
        <Form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <fieldset disabled={formDisabled}>
            <input
              className="is-hidden"
              name="bot-field"
              onChange={handleInputChange}
            />
            <div className="field">
              <div className="control">
                <input
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  className="input"
                  type="text"
                  placeholder={form.placeholders.name}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  className="input"
                  type="email"
                  placeholder={form.placeholders.email}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  name="phone"
                  onChange={handleInputChange}
                  value={formData.phone}
                  className="input"
                  type="phone"
                  placeholder={form.placeholders.phone}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  name="message"
                  onChange={handleInputChange}
                  value={formData.message}
                  className="textarea"
                  placeholder={form.placeholders.message}
                  required
                />
              </div>
            </div>
            <div className="field">
              {hasError && (
                <div className="notification is-warning">
                  {form.messages.error}
                </div>
              )}
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" type="submit">
                  {form.buttonSend.title}
                </button>
              </div>
            </div>
          </fieldset>
        </Form>
      )}
    </>
  );
};

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  form: PropTypes.shape({
    placeholders: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    buttonSend: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    messages: PropTypes.shape({
      success: PropTypes.string.isRequired,
      error: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContactForm;
