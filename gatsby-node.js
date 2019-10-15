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
            frontmatter {
              slug
            }
            fields {
              name
              isPage
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
      const { id } = edge.node;
      const { slug } = edge.node.frontmatter;
      const { name, lang } = edge.node.fields;

      // Generate page path
      let pagePath = `/${slug}/`;
      // Should be the home page
      if (!slug) {
        pagePath = '/';
      }
      if (lang !== DEFAULT_LANG) {
        pagePath = `/${lang}${pagePath}`;
      }

      // TODO: add alternates urls
      // TODO: add facebook redirects

      const page = {
        path: pagePath,
        component: path.resolve(`src/templates/${name}.jsx`),
        // additional data can be passed via context
        context: {
          id,
          name,
          lang,
        },
      };

      createPage(page);
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // convert image paths for gatsby images
  // TODO: document WTF
  // fmImagesToRelative(node);

  // TODO: filter on page
  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode });

    const parts = filePath.split('/').filter(part => !!part);

    const type = parts.shift();
    const lang = parts.pop();
    const isPage = type === 'pages';
    const name = `${isPage ? 'page-' : ''}${parts.join('-')}`;

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

    // Add field isPage
    createNodeField({
      name: `isPage`,
      node,
      value: isPage,
    });
  }
};
