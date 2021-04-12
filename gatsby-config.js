const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  siteMetadata: {
    title: `brad carter.`,
    description: `Portfolio for Brad Carter - Frontend Developer based in Austin, TX.`,
    author: `Brad Carter`,
    image: `/images/bradcart-opengraph.png`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://use.typekit.net/bbp3rrs.css"],
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brad Carter | Frontend Developer`,
        short_name: `Brad Carter`,
        start_url: `/`,
        background_color: `#080808`,
        theme_color: `#F0F5F3`,
        display: `fullscreen`,
        icon: `src/images/bradcart-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
