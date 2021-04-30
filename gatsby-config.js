module.exports = {
 
      siteMetadata: {
        title : `Chandeep Portfolio`,
        description : `Welcome to my website.The aim of this website is to create a platform to interact and discuss the new opportunities and tech trends available in market. It is a great platform for people or creaters whow are willing to collaborate and create a future that is good for everyone', // e.g: Welcome to my website`,
        author : `Chandeep`,
        siteUrl : `https://chandeep.netlify.app`,
       
        
        // socialLinks {
        //   twitter
        //   linkedin
        //   facebook
        //   stackOverflow
        //   github
        //   instagram
        //   pinterest
        //   youtube
        //   email
        //   phone
        //   fax
        //   address
        // }
        keywords : ` `,
        organization: {
          name :`conestoga `,
          url :`https://www.conestogac.on.ca`,
        }
      },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-YRQZQXTSTL",
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    } ,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-next-seo',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
