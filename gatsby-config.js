module.exports = {
  siteMetadata: {
    title: 'Swedish Tech Makers',
    siteUrl: `https://www.swedishtechmakers.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-117499442-4',
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
