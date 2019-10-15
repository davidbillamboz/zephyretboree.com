import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import HomeProject from './HomeProject';
import Title from '../Title';
import SubTitle from '../SubTitle';
import Markdown from '../Markdown';

const HomeProjects = ({ title, subTitle, text, projects }) => (
  <StaticQuery
    query={graphql`
      query {
        navire_roulier_desktop: file(
          relativePath: { eq: "pages/home/projects/navire_roulier_desktop.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        porte_conteneur_desktop: file(
          relativePath: {
            eq: "pages/home/projects/porte_conteneur_desktop.jpg"
          }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sur_mesure_desktop: file(
          relativePath: { eq: "pages/home/projects/sur_mesure_desktop.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        navire_roulier_mobile: file(
          relativePath: { eq: "pages/home/projects/navire_roulier_mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        porte_conteneur_mobile: file(
          relativePath: { eq: "pages/home/projects/porte_conteneur_mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sur_mesure_mobile: file(
          relativePath: { eq: "pages/home/projects/sur_mesure_mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Markdown content={text} />
        <div className="columns">
          {projects &&
            projects.map(project => {
              const images = {};

              ['desktop', 'mobile'].forEach(device => {
                const tarketKey = `${project.imageKey}_${device}`;
                const imageData = data[tarketKey].childImageSharp.fluid;
                images[device] = imageData;
              });

              return (
                <HomeProject
                  key={project.imageKey}
                  {...project}
                  images={images}
                />
              );
            })}
        </div>
      </>
    )}
  />
);

HomeProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      _uid: PropTypes.string.isRequired,
    })
  ).isRequired,
};

HomeProjects.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      imageKey: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomeProjects;
