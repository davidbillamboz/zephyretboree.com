import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';
import '../styles/app.scss';

const Layout = ({ data, children }) => {
  return (
    <>
      <Header {...data.header.frontmatter} />
      <PageTransition id={data.page.id}>{children}</PageTransition>
      <Footer {...data.footer.frontmatter} alternates={[]} />
    </>
  );
};

Layout.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.shape({
      frontmatter: PropTypes.shape({}).isRequired,
    }).isRequired,
    page: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    footer: PropTypes.shape({
      frontmatter: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
