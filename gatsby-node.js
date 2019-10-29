const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');
const deepMap = require('deep-map');

const DEFAULT_LANG = 'fr';
const MEDIA_DIR = './static';

function getPagePath({ slug, lang }) {
  // Generate page path
  let pagePath = `/${slug}/`;
  // Should be the home page
  if (!slug) {
    pagePath = '/';
  }
  if (lang !== DEFAULT_LANG) {
    pagePath = `/${lang}${pagePath}`;
  }
  return pagePath;
}

function getPageAlternates({ id, name }, edges) {
  return edges
    .filter(edge => {
      return name === edge.node.fields.name;
    })
    .map(edge => {
      const { lang } = edge.node.fields;
      const { slug } = edge.node.frontmatter;
      const pagePath = getPagePath({
        slug,
        lang,
      });
      return {
        current: edge.node.id === id,
        default: edge.node.fields.lang === DEFAULT_LANG,
        lang,
        path: pagePath,
      };
    });
}

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
      Promise.reject(result.errors);
      return;
    }

    const pageEdges = result.data.allMarkdownRemark.edges.filter(
      edge => edge.node.fields.isPage
    );

    pageEdges.forEach(edge => {
      const { id } = edge.node;
      const { slug } = edge.node.frontmatter;
      const { name, lang } = edge.node.fields;
      const pagePath = getPagePath({ slug, lang });
      const alternates = getPageAlternates({ id, name }, pageEdges);

      // TODO: add facebook redirects

      const page = {
        path: pagePath,
        component: path.resolve(`src/templates/${name}.jsx`),
        context: {
          id,
          name,
          lang,
          alternates,
        },
      };

      createPage(page);
    });
  });
};

function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

function transformAbsoluteMediaFilePath(nodeAbsoluteFilePath, value) {
  // Not a string and not an absolute path
  if (typeof value !== 'string' || value.substr(0, 1) !== '/') {
    return value;
  }

  // Generate absolute path
  const potentialAbsolutePath = path.resolve(
    __dirname,
    path.join(MEDIA_DIR, value)
  );

  // File does not exist
  if (!fileExists(potentialAbsolutePath)) {
    return value;
  }

  // Generate relative path from node file
  const relativePath = path.relative(
    path.join(nodeAbsoluteFilePath, '..'),
    potentialAbsolutePath
  );

  return relativePath;
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Deeply iterate through frontmatter data for absolute paths
    deepMap(
      node.frontmatter,
      transformAbsoluteMediaFilePath.bind(null, node.fileAbsolutePath),
      {
        inPlace: true,
      }
    );

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
