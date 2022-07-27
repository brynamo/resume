module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://brynamo.me/`,
    // Your Name
    name: 'Bryan Morgan',
    // Main Site Title
    title: `Bryan Morgan | Engineering Manager / ML Engineer`,
    // Description that goes under your name in main bio
    description: `Ready to party w/ havarti`,
    // Optional: Twitter account handle
    // author: `@brynamo`,
    // Optional: Github account URL
    github: `https://github.com/brynamo`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/brynamo/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'InferKnow',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Yoga',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'LinkedIn Experiment',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hydrobase',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://www.amazon.jobs/en/teams/airplanes',
      },
      {
        name: 'PlayStation',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://www.playstation.com/en-us/',
      },
      {
        name: 'UC Berkeley',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://www.ischool.berkeley.edu/courses/info/290/ddwps',
      },
      {
        name: 'Center for the Collaborative Classroom -- Full-Stack Developer, May 2015 - December 2017',
        description: 'This is going to be some super awesome copy about how we sold a ton of product to someone',
        link: 'https://www.collaborativeclassroom.org/',
      },
      {
        name: 'International Computer Science Center',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'http://teachingprivacy.icsi.berkeley.edu',
      },
      {
        name: "Be'Chol Lashon",
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://globaljews.org/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingId: `G-5KPGMFN1V2`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
