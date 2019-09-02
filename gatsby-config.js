module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ishavbhatt143`,
      },
      {
        name: `github`,
        url: `https://github.com/Ishavbhatt`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/ishav_bhatt143/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ishav-bhatt-a3484b192/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/Ishavbhatt143`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ishav Bhatt`,
        short_name: `Ishav`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
