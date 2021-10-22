module.exports = {
  siteMetadata: {
    siteUrl: "https://cranky-spence-362162.netlify.app",
    title: "ZhengYu's blog",
    description: "Da Jia Hao means hello in Chinese.",
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
