import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import AboutIntro from '../components/about/AboutIntro';
import AboutPartners from '../components/about/AboutPartners';
import AboutQuestions from '../components/about/AboutQuestions';
import AboutOrigins from '../components/about/AboutOrigins';
import AboutValues from '../components/about/AboutValues';

const PageAbout = ({ data }) => {
  const { intro, partners, questions, origins, values } = data.page.frontmatter;
  return (
    <div className="container">
      <section className="section">
        <AboutIntro {...intro} />
      </section>
      <AboutPartners {...partners} />
      <section className="section">
        <AboutQuestions {...questions} />
      </section>
      <section className="section">
        <AboutOrigins {...origins} />
      </section>
      <section className="section">
        <AboutValues {...values} />
      </section>
    </div>
  );
};

PageAbout.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        intro: PropTypes.shape({}).isRequired,
        partners: PropTypes.shape({}).isRequired,
        questions: PropTypes.shape({}).isRequired,
        origins: PropTypes.shape({}).isRequired,
        values: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageAbout;

export const pageQuery = graphql`
  query PageAboutQuery($lang: String!, $name: String!) {
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
        partners {
          button {
            title
          }
          partners {
            image {
              childImageSharp {
                fluid(maxWidth: 700, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            logo {
              childImageSharp {
                fixed(width: 140, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
            title
            text
            link
          }
        }
        questions {
          title
          subTitle
          text
          questions {
            title
            text
          }
        }
        origins {
          title
          subTitle
          icon
          text1
          text2
          image {
            childImageSharp {
              fluid(maxWidth: 940, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          text3
        }
        values {
          title
          subTitle
          text
          values {
            title
            icon
            text
          }
        }
      }
    }
  }
`;
