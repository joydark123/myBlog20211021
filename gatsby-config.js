module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "All is fake",
    description: "You are not real, I am not real.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    
  ],
};
