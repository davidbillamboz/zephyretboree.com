const MAIN_SITE_URL = 'https://zephyretboree.com';
const LOCALHOST = 'http://localhost:8001'; // TODO: should automatically fetch that

const {
  URL: SITE_URL = MAIN_SITE_URL,
  DEPLOY_PRIME_URL = SITE_URL,
  CONTEXT: NODE_ENV = process.env.NODE_ENV || 'development',
} = process.env;

const isProduction = NODE_ENV === `production`;
const isDev = NODE_ENV === `development`;

let siteUrl;
if (isDev) {
  siteUrl = LOCALHOST;
} else {
  siteUrl = isProduction ? SITE_URL : DEPLOY_PRIME_URL;
}

const siteMetadata = {
  siteUrl,
  titleTemplate: '%s - Zéphyr & Borée',
  description: {
    fr: 'Zéphyr & Borée : et si on utilisait le vent de nouveau ?',
    en: 'Zéphyr & Borée: Low carbon shipping',
  },
  facebookImage: 'images/social_facebook.jpg',
  twitterImage: 'images/social_twitter.jpg',
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.jsx`),
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // By default, the displayName of a component will be prefixed with the filename
        // in order to make the component name as unique as possible.
        fileName: false,
        displayName: false,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Zéphyr & Borée',
        short_name: 'Zéphyr&Borée',
        start_url: '/',
        lang: 'fr',
        background_color: '#ffffff',
        theme_color: '#00a2de',
        display: 'standalone',
        icon: 'src/images/favicon.svg',
        legacy: false, // this will not add apple-touch-icon links to <head>
        localize: [
          {
            start_url: '/en/',
            lang: 'en',
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-149700755-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/en/404'],
      },
    },
  ],
};
