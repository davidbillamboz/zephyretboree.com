import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Markdown from '../components/Markdown';
import ServicesServices from '../components/services/Services';
import ServicesSimulator from '../components/services/Simulator';

const PageServices = ({ data }) => {
  const {
    intro: { title, subTitle, text },
    contactButton,
    services,
    simulator,
  } = data.page.frontmatter;

  return (
    <div className="container">
      <section className="section">
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Markdown content={text} />
      </section>
      <section className="section">
        <ServicesServices services={services} contactButton={contactButton} />
      </section>
      <section className="section">
        <ServicesSimulator {...simulator} />
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
        contactButton: PropTypes.shape({}).isRequired,
        services: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
        simulator: PropTypes.shape({}).isRequired,
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
        metadata {
          title
          description
        }
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
        simulator {
          title
          subTitle
          text
          sliderConfig {
            min {
              value
              title
            }
            max {
              value
              title
            }
          }
          valuesConfig {
            name
            title
            min
            max
          }
          propulsions {
            title
            text
            valuesText {
              delay
              speed
              emissions
              price
            }
          }
        }
      }
    }
  }
`;
