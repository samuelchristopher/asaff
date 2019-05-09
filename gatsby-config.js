module.exports = {
  siteMetadata: {
    title: `Asaff`,
    description: `Asaff group website`,
    author: `@hellosamchris`,
  },
  plugins: [
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Asaff`,
        short_name: `Asaff`,
        start_url: `/`,
        background_color: `#CACAC8`,
        theme_color: `#272C77`,
        display: `minimal-ui`,
        icon: `src/images/asaff-logo-blue@2x.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
