import React from 'react';
import PropTypes from 'prop-types';
import HomeProject from './HomeProject';
import Title from '../Title';
import SubTitle from '../SubTitle';
import Markdown from '../Markdown';

const HomeProjects = ({ title, subTitle, text, projects }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <Markdown content={text} />
    <div className="columns">
      {projects &&
        projects.map((project, index) => (
          <HomeProject key={index} {...project} />
        ))}
    </div>
  </>
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
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HomeProjects;
