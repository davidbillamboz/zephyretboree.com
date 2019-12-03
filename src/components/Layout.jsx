import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import PageTransition from './PageTransition';
import '../styles/app.scss';

const Layout = ({ pageContext, data, children }) => {
  const isHome = pageContext.name === 'page-index';
  const withBodyPadding = !isHome;
  const canBeTransparent = isHome;

  return (
    <>
      <SEO
        metadata={data.page.frontmatter.metadata}
        lang={pageContext.lang}
        alternates={pageContext.alternates}
      />
      <Navbar
        withBodyPadding={withBodyPadding}
        canBeTransparent={canBeTransparent}
        {...data.header.frontmatter}
      />
      <PageTransition id={data.page.id}>{children}</PageTransition>
      <Footer
        {...data.footer.frontmatter}
        alternates={pageContext.alternates}
      />
    </>
  );
};

Layout.propTypes = {
  pageContext: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    alternates: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  data: PropTypes.shape({
    header: PropTypes.shape({
      frontmatter: PropTypes.shape({}).isRequired,
    }).isRequired,
    page: PropTypes.shape({
      id: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        metadata: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    footer: PropTypes.shape({
      frontmatter: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
