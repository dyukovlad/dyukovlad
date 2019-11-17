module.exports = {
  siteMetadata: {
    title: `Dyukovlad | Front-end developer`,
    description: `I’m Dyukovlad, a 31 years old self-taught Front-end developer, from Russia.`,
    author: `@dyukovlad`,
    siteUrl: `https://dyukovlad.ru`,
    social: {
      twitter: 'dyukovlad',
      instagram: 'dyukovlad',
      linkedin: 'dyukovlad',
      facebook: 'dyukovlad',
      github: 'dyukovlad',
      email: 'dyukovlad@gmail.com',
    },
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
          name: `Dyukovlad | Front-end developer`,
          short_name: `Dyukovlad`,
          icon: `src/images/icon.png`,
          start_url: `/`,
          background_color: `#212121`,
          theme_color: `#127EB1`,
          display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-less`,
    {
        resolve: `gatsby-plugin-intl`,
        options: {
          // language JSON resource path
          path: `${__dirname}/src/intl`,
          // supported language
          languages: [`en`, `ru`],
          // language file path
          defaultLanguage: `en`,
          redirect: true,
        },
      },
  ],
}
