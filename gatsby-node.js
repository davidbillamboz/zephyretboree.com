const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const DEFAULT_LANG = 'fr';

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              name
              isPage
              slug
              fullSlug
              lang
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      // eslint-disable-next-line no-console
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pageEdges = result.data.allMarkdownRemark.edges.filter(
      edge => edge.node.fields.isPage
    );

    pageEdges.forEach(edge => {
      // console.error(edge);

      const { id } = edge.node;
      const { name, slug, fullSlug, lang } = edge.node.fields;

      // TODO: add alternates urls
      // TODO: add facebook redirects

      createPage({
        path: fullSlug,
        component: path.resolve(`src/templates/page.jsx`),
        // component: path.resolve(`src/templates/page-${name}.jsx`),
        // additional data can be passed via context
        context: {
          id,
          slug,
          fullSlug,
          lang,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  // TODO: filter on page
  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode });

    const parts = filePath.split('/');
    const lang = parts[1];
    const name = parts.slice(2, -1).join('-') || 'index';

    // Add field name
    createNodeField({
      name: `name`,
      node,
      value: name,
    });

    // Add field lang
    createNodeField({
      name: `lang`,
      node,
      value: lang,
    });

    const isPage = !['header', 'footer'].includes(name);

    if (isPage) {
      const slug = `/${parts.slice(2).join('/')}`;
      const fullSlug =
        lang !== DEFAULT_LANG ? filePath : `/${parts.slice(2).join('/')}`;

      // Add field isPage
      createNodeField({
        name: `isPage`,
        node,
        value: isPage,
      });

      // Add field slug
      createNodeField({
        name: `slug`,
        node,
        value: slug,
      });

      // Add field fullSlug
      createNodeField({
        name: `fullSlug`,
        node,
        value: fullSlug,
      });
    }
  }
};
