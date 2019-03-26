module.exports = {
  proxy: {
    prefix: "/api",
    url: "http://localhost:3001/send/",
  },
  siteMetadata: {
    title: `iVision Web Studio`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c9wwlh14qotu`,
        accessToken:`3860dd4f1ea56eeaf893b451f5ff26559d29fd8f02c4f8eb23d341e50364a0c4`,
      },
    },
    
  ],
}