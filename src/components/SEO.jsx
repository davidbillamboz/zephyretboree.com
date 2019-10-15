import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ metadata, lang, alternates }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
              titleTemplate
              descriptionFr
              descriptionEn
              imageTwitter
              imageFacebook
            }
          }
        }
      `}
      render={data => {
        const globalMetadata = data.site.siteMetadata;
        const defaultDescription =
          lang === 'fr'
            ? globalMetadata.descriptionFr
            : globalMetadata.descriptionEn;

        const title = globalMetadata.titleTemplate.replace(
          '%s',
          metadata.title || ''
        );

        const alternatesAbsolute = alternates.map(link => {
          return {
            ...link,
            url: `${globalMetadata.siteUrl}${link.path}`,
          };
        });

        const defaultAlternate = alternatesAbsolute.find(link => link.default);
        const currentAlternate = alternatesAbsolute.find(
          link => link.lang === lang
        );

        const defaultAlternateUrl = defaultAlternate
          ? defaultAlternate.url
          : null;
        const currentAlternateUrl = currentAlternate
          ? currentAlternate.url
          : null;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
          >
            <meta
              name="description"
              content={metadata.description || defaultDescription}
            />

            {alternatesAbsolute.map(alternate => (
              <link
                key={alternate.lang}
                rel="alternate"
                hrefLang={alternate.lang}
                href={alternate.url}
              />
            ))}
            {defaultAlternateUrl && (
              <link
                rel="alternate"
                hrefLang="x-default"
                href={defaultAlternateUrl}
              />
            )}
            {currentAlternateUrl && (
              <meta property="og:url" content={currentAlternateUrl} />
            )}

            <meta property="og:title" content={metadata.og_title || title} />
            <meta
              property="og:description"
              content={
                metadata.og_description ||
                metadata.description ||
                defaultDescription
              }
            />
            <meta
              property="og:image"
              content={metadata.og_image || globalMetadata.imageFacebook}
            />
            <meta
              name="twitter:title"
              content={metadata.twitter_title || title}
            />
            <meta
              name="twitter:description"
              content={
                metadata.twitter_description ||
                metadata.description ||
                defaultDescription
              }
            />
            <meta
              name="twitter:image"
              content={metadata.twitter_image || globalMetadata.imageTwitter}
            />
          </Helmet>
        );
      }}
    />
  );
};

SEO.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    og_description: PropTypes.string,
    og_image: PropTypes.string,
    og_title: PropTypes.string,
    twitter_description: PropTypes.string,
    twitter_image: PropTypes.string,
    twitter_title: PropTypes.string,
  }).isRequired,
  lang: PropTypes.string.isRequired,
  alternates: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.bool.isRequired,
      lang: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SEO;
