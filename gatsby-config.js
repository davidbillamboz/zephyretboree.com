module.exports = {
  siteMetadata: {
    siteUrl: 'https://zephyretboree.com',
    titleTemplate: '%s - Zéphyr & Borée',
    descriptionFr: 'Zéphyr & Borée : et si on utilisait le vent de nouveau ?',
    descriptionEn: 'Zéphyr & Borée : Low carbon shipping',
    imageFacebook: 'https://zephyretboree.com/images/social_facebook.jpg',
    imageTwitter: 'https://zephyretboree.com/images/social_twitter.jpg',
  },
  plugins: [
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        cmsConfig: `/static/admin/config.yml`,
      },
    },
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
        // purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/en/404'],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        enableIdentityWidget: true,
        // modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
