import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HomeHero from '../components/home/HomeHero';
import HomeServices from '../components/home/HomeServices';
import HomeNews from '../components/home/HomeNews';
import HomeProjects from '../components/home/HomeProjects';

const PageIndex = ({ data }) => (
  <>
    <HomeHero {...data.page.frontmatter.hero} />
    <div className="container">
      <section className="section">
        <HomeServices {...data.page.frontmatter.services} />
      </section>
      <section className="section">
        <HomeNews {...data.page.frontmatter.news} />
      </section>
      <section className="section">
        <HomeProjects {...data.page.frontmatter.projects} />
      </section>
    </div>
  </>
);

PageIndex.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        hero: PropTypes.shape({}).isRequired,
        services: PropTypes.shape({}).isRequired,
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
        title
        hero {
          text1
          text2
          text3
          text
        }
        services {
          services {
            text
            icon
          }
          buttons {
            title
            url
          }
        }
        news {
          title
          subTitle
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
            imageKey
          }
        }
      }
    }
  }
`;
