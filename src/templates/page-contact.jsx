import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ContactForm from '../components/contact/ContactForm';
import ContactContacts from '../components/contact/ContactContacts';
import ContactPress from '../components/contact/ContactPress';

const PageContact = ({ data }) => {
  const { form, contacts, press } = data.page.frontmatter;
  return (
    <div className="container">
      <section className="section">
        <ContactForm {...form} />
      </section>
      <section className="section">
        <ContactContacts {...contacts} />
      </section>
      <section className="section">
        <ContactPress {...press} />
      </section>
    </div>
  );
};

PageContact.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        form: PropTypes.shape({}).isRequired,
        contacts: PropTypes.shape({}).isRequired,
        press: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageContact;

export const pageQuery = graphql`
  query PageContactQuery($lang: String!, $name: String!) {
    ...Header
    ...Footer

    page: markdownRemark(fields: { lang: { eq: $lang }, name: { eq: $name } }) {
      id
      frontmatter {
        form {
          title
          subTitle
          placeholders {
            name
            email
            phone
            message
          }
          buttonSend {
            title
          }
          messages {
            success
            error
          }
        }
        contacts {
          contacts {
            name
            role
            email
            phone
          }
        }
        press {
          title
          subTitle
          buttonDownload {
            title
            url
          }
        }
      }
    }
  }
`;
