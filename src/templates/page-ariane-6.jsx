import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Ariane6Intro from '../components/ariane-6/Ariane6Intro';
import Ariane6Canopee from '../components/ariane-6/Ariane6Canopee';
import Ariane6Route from '../components/ariane-6/Ariane6Route';

const PageAriane6 = ({ data }) => {
  const { intro, canopee, route } = data.page.frontmatter;
  return (
    <div className="container">
      <section className="section">
        <Ariane6Intro {...intro} />
      </section>
      <section className="section">
        <Ariane6Canopee {...canopee} />
      </section>
      <section className="section">
        <Ariane6Route {...route} />
      </section>
    </div>
  );
};

PageAriane6.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        intro: PropTypes.shape({}).isRequired,
        canopee: PropTypes.shape({}).isRequired,
        route: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageAriane6;

export const pageQuery = graphql`
  query PageAriane6Query($lang: String!, $name: String!) {
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
          videoId
          partners {
            title
            logo {
              childImageSharp {
                fixed(width: 250, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              extension
              publicURL
            }
          }
        }
        canopee {
          title
          text
          columns {
            text
            icon {
              publicURL
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          progressBar {
            value
            text
          }
        }
        route {
          title
          text
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          text2
        }
      }
    }
  }
`;
