import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HomeHero from '../components/home/HomeHero';
import HomePresentation from '../components/home/HomePresentation';
import HomeNews from '../components/home/HomeNews';
import HomeProjects from '../components/home/HomeProjects';

const PageIndex = ({ data }) => {
  const { hero, presentation, news, projects } = data.page.frontmatter;
  return (
    <>
      <HomeHero {...hero} />
      <div className="container">
        <section className="section">
          <HomePresentation {...presentation} />
        </section>
        <section className="section">
          <HomeNews {...news} />
        </section>
        <section className="section">
          <HomeProjects {...projects} />
        </section>
      </div>
    </>
  );
};

PageIndex.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        hero: PropTypes.shape({}).isRequired,
        presentation: PropTypes.shape({}).isRequired,
        news: PropTypes.shape({}).isRequired,
        projects: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageIndex;

export const pageQuery = graphql`
  query PageIndexQuery($lang: String!, $name: String!) {
    ...Header
    ...Footer

    page: markdownRemark(fields: { lang: { eq: $lang }, name: { eq: $name } }) {
      id
      frontmatter {
        metadata {
          title
          description
        }
        title
        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 1985, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          catchline
          text
          button {
            title
            url
          }
        }
        presentation {
          services {
            text
            icon {
              publicURL
            }
          }
          buttons {
            title
            url
          }
        }
        news {
          title
          subTitle
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          button {
            title
            url
          }
        }
        projects {
          title
          subTitle
          text
          projects {
            title
            text
            imageDesktop {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageMobile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
