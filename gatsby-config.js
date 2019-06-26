module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        additionalFontWeights: ['200', '200i'],
      },
    },
  ],
};
