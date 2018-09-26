module.exports = {
  siteMetadata: {
    title: 'Talkpush',
    description: 'Let your talent talk | Recruitment Chatbot Platform',
    metaKeywords: 'Talkpush, Chat Application, Recruitment Platform, Messaging, Recruitment Chatbot',
    image: './og-image.jpg',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-46858485-2',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1690886631131130',
      },
    },
  ],
}
