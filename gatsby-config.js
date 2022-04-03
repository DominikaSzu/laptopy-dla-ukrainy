module.exports = {
  siteMetadata: {
      title: "Laptopy dla Ukrainy",
    siteUrl: "https://www.yourdomain.tld"
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp", 
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};