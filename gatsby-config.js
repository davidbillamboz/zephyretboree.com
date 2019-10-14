module.exports = {
  siteMetadata: {
    siteUrl: 'https://zephyretboree.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.jsx`),
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Zéphyr & Borée',
    //     short_name: 'Zéphyr&Borée',
    //     start_url: '/',
    //     lang: 'fr',
    //     background_color: '#ffffff',
    //     theme_color: '#00a2de',
    //     display: 'standalone',
    //     icon: 'src/images/favicon.svg',
    //     legacy: false, // this will not add apple-touch-icon links to <head>
    //     localize: [
    //       {
    //         start_url: '/en/',
    //         lang: 'en',
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-storyblok',
    //   options: {
    //     accessToken: 'cjV25v8I5zlIvOuNQ43jMwtt',
    //     homeSlug: 'home',
    //     version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    //   },
    // },
    'gatsby-transformer-sharp',
    // 'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-styled-components',
    //   options: {
    //     // By default, the displayName of a component will be prefixed with the filename
    //     // in order to make the component name as unique as possible.
    //     fileName: false,
    //     displayName: false,
    //   },
    // },
    // 'gatsby-plugin-sass',
    // {
    //   resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     // purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {},
    // },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     exclude: ['/en/404', '/storyblok/editor'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        enableIdentityWidget: true,
      },
    },
  ],
};
