import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import RichText from '../components/RichText';
import ServicesServices from '../components/services/Services';

const PageServices = ({ data }) => {
  const {
    intro: { title, subTitle, text },
    contactButton,
    services,
  } = data.page.frontmatter;

  return (
    <div className="container">
      <section className="section">
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <RichText content={text} />
      </section>
      <section className="section">
        <ServicesServices services={services} contactButton={contactButton} />
      </section>
    </div>
  );
};

PageServices.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        intro: PropTypes.shape({
          title: PropTypes.string.isRequired,
          subTitle: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }).isRequired,
        contactButton: PropTypes.shape({
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
        services: PropTypes.arrayOf(
          PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
          })
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageServices;

export const pageQuery = graphql`
  query PageServicesQuery($lang: String!, $name: String!) {
    ...Header
    ...Footer

    page: markdownRemark(fields: { lang: { eq: $lang }, name: { eq: $name } }) {
      id
      frontmatter {
        intro {
          title
          subTitle
          text
        }
        contactButton {
          title
          url
        }
        services {
          icon
          title
          text
          tags
        }
      }
    }
  }
`;
