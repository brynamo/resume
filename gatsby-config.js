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
    about: `I believe everyone should be passionate about their work, always striving to do better and be better. With my background, I understand the multidimensional aspects of data and development, fostering collaboration and helping drive innovation excellence. As the digital and real worlds become even more closely connected, we need elegant solutions that enhance life...not complicate it. This is the challenge I am focused on solving.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'InferKnow',
        description:
          "Provide California's Emergency Coordinators with the Best Information to Quickly Save Lives and Property",
        link: 'https://github.com/brynamo/resume/blob/main/src/documents/inferknow.pdf',
      },
      {
        name: 'Yoda',
        description:
          'A privacy-preserving solution that facilitates virtual guided yoga practice. Trained and running inference on the edge.',
        link: 'https://github.com/brynamo/resume/blob/main/src/documents/yoda.pdf',
      },
      {
        name: 'Computer Vision for Automated Fish Detection',
        description:
          'CV To help fish',
        link: 'https://github.com/brynamo/resume/blob/main/src/documents/natureConservancy.pdf',
      },
      {
        name: 'LinkedIn Experiment',
        description:
          'Does your photo matter on LinkedIn?',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hydrobase',
        description:
          "Let's make some guac!",
        link: 'https://www.ischool.berkeley.edu/sites/default/files/projects/hydrobasefinalreport.pdf',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon',
        startEnd: 'Oct 2020 -- Present',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://www.amazon.jobs/en/teams/airplanes',
      },
      {
        name: 'PlayStation',
        startEnd: 'July 2016 -- Oct 2020',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://www.playstation.com/en-us/',
      },
      {
        name: 'UC Berkeley',
        startEnd: 'January 2016 -- May 2016',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://www.ischool.berkeley.edu/courses/info/290/ddwps',
      },
      {
        name: 'Workday',
        startEnd: 'May 2015 -- Aug 2015',
        description: 'This is going to be some super awesome copy about how we sold a ton of product to someone',
        link: 'https://www.workday.com/',
      },
      {
        name: 'Center for the Collaborative Classroom',
        startEnd: 'Jan 2014 -- Jan 2015',
        description: 'This is going to be some super awesome copy about how we sold a ton of product to someone',
        link: 'https://www.collaborativeclassroom.org/',
      },
      {
        name: 'International Computer Science Center',
        startEnd: 'Mar 2013 -- Aug 2015',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'http://teachingprivacy.icsi.berkeley.edu',
      },
      {
        name: "Be'Chol Lashon",
        startEnd: 'Oct 2011 -- Mar 2013',
        description: 'This was an interesting experience',
        link: 'https://globaljews.org/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Applications',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Data',
        description: 'MongoDB, PostreSQL, MySQL, DynamoDB, Druid, Data Lake Arch.',
      },
      {
        name: 'Data Science + Machine Learning',
        description:
          'SageMaker, Jupyter, Anaconda, Pandas, Numpy, dbt',
      },
      {
        name: 'Certifications',
        description:
          'Scrum Master, Product Owner, IBM Cloud, AWS Arch, AWS Data Science, AWS ML',
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
      resolve: `gatsby-plugin-google-analytics`,
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
