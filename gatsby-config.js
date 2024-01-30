/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `dawrina`,
    siteUrl: `https://dawrina.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dawrina',
        short_name: `dawrina`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
        ignore: [`**/\.*`]
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          "@components": "./components",
          "@atoms": "./components/atoms",
          "@molecules": "./components/molecules",
          "@organisms": "./components/organisms",
          "@templates": "./components/templates",
          "@images": "./images",
          "@pages": "./pages",
          //'@styles': './styles',
          //'@utils': './utils',
          //'@hooks': './hooks',
          //'@context': './context',
          //'@config': './config',
          //'@constants': './constants',
          //'@data': './data',
          // '@helpers': './helpers',
          // '@hooks': './hooks',
          //  '@layouts': './layouts',
          static: {
            root: "./public", // <- will used as this alias' root dir
            alias: "./static", // <- will become ./public/static
          },
        },
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      name: `ourservice`,
      options: {
        name: `ourservice`,
        path: `${__dirname}/src/content/ourservice`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // ssr: false
        // displayName: false,
        // minify: false
      },
    },
    // security
    // {
    //   resolve: `gatsby-plugin-security-headers`,
    //   options: {
    //     // All modern browsers support these
    //     defaultSrc: ["'self'"],
    //     // IE10+ supports these
    //     scriptSrc: ["'self'"],
    //     styleSrc: ["'self'"],
    //     // Webpack 2.x and HtmlWebpackPlugin 2.x
    //     // styleSrc: ["'self'", "'unsafe-inline'"],
    //     // Webpack 2.x and HtmlWebpackPlugin 2.x
    //     // styleSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    //     // IE10+ supports these
    //     fontSrc: ["'self'"],
    //     // IE10+ supports these
    //     imgSrc: ["'self'"],
    //     // IE10+ supports these
    //     mediaSrc: ["'self'"],
    //     // IE10+ supports these
    //     objectSrc: ["'none'"],
    //     // IE10+ supports these
    //     frameSrc: ["'none'"],
    //     // IE10+ supports these
    //     sandboxSrc: ["'self'"],
    //     // IE10+ supports these
    //     // formAction: ["'self'"],
    //     // IE10+ supports these
    //     // frameAncestors: ["'none'"],
    //     // IE10+ supports these
    //     // pluginTypes: ["'none'"],
    //     // IE10+ supports these
    //     // reportUri: ["'self'"],
    //     // IE10+ supports these
    //     // upgradeInsecureRequests: ["'self'"],
    //     // IE10+ supports these
    // } }
    // analytics
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-LM4HZZECPP",
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-TV636MP",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-198235726-1",
          "G-LM4HZZECPP"//, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true//,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
  ],
};
