module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Carbon",
    description: "A Gatsby theme for the carbon design system",
    keywords: "gatsby,theme,carbon",
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        repository: {
          baseUrl:
            "https://github.com/carbon-design-system/gatsby-theme-carbon",
          subDirectory: "/packages/example",
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `ojaysnaps`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "allInstaNode",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "edges",
        // Url to query from
        url: "https://www.instagram.com/",

        // refetch interval in seconds
        refetchInterval: 10,
      },
    },
  ],
};
