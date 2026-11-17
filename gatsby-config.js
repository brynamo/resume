// All of the copy on the site lives in `siteMetadata` below. Each section on the
// home page renders from one key, and a section disappears when its key is
// removed or left empty.
module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://brynamo.me/`,
    // Your Name
    name: 'Bryan Morgan',
    // Main Site Title
    title: `Bryan Morgan | Engineering Manager / ML Engineer`,
    // Tagline that goes under your name in the header (also the meta description)
    description: `Engineering Manager / ML Engineer`,
    // Optional: shown next to the tagline
    location: `Seattle, WA`,
    // Optional: Twitter account handle, only used for the twitter:creator meta tag
    author: `@brynamo`,
    // Optional: Github account URL
    github: `https://github.com/brynamo`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/brynamo/`,
    // Content of the About Me section
    about: `I build and lead the teams behind production ML and data systems: real-time detection at hundreds of thousands of events per second, LLM features taken to production with guardrails and evaluation, a modern warehouse stack (Snowflake, dbt, Databricks) serving ~1,000 self-serve users, and platforms protecting millions of enterprise users under FedRAMP High, HIPAA, and IRAP. A player-coach still in the code daily, I pair hands-on depth with delivery discipline. I’ve led staff engineers at every company since 2016.`,
    // Experience, most recent first. `name` is required. `jobTitle`, `startEnd`,
    // `location`, `link`, `description` and `highlights` (the bullets) are optional.
    experience: [
      {
        name: 'Playlist (Mindbody, ClassPass, Booker, Kite & EGYM)',
        jobTitle: 'Engineering Manager, Data Platform',
        startEnd: 'Apr 2026 – Present',
        location: 'Seattle, WA',
        highlights: [
          'Head Playlist’s 10-engineer data platform org (doubled from 5), processing ~40 TB daily across a ~200 TB estate—Fivetran ingestion, dbt transformation, the Snowflake warehouse, and Databricks streaming—powering analytics for all five Playlist brands',
          'Shipped governed natural-language analytics over the Snowflake warehouse through a hosted AWS MCP gateway I architected—per-user OAuth identity propagation keeps RBAC and masking per person—opening self-serve data to ~1,000 employees with a 95% return rate',
          'Built “TeamOS” myself with AI—Claude skills and agents that institutionalize how the team runs and how other teams work with us—balancing consistency, best practices, and speed',
        ],
      },
      {
        name: 'Career Break',
        jobTitle: 'Family & Applied GenAI',
        startEnd: 'Oct 2025 – Apr 2026',
        location: 'Seattle, WA',
        highlights: [
          'Built fully local RAG systems (embeddings, retrieval, on-device LLM inference) so family and friends can privately query personal ebook and PDF libraries',
        ],
      },
      {
        name: 'Box — Shield Threat Protection & Shield ML',
        jobTitle: 'Engineering Manager',
        startEnd: 'Jan 2023 – Oct 2025',
        location: 'Seattle, WA',
        highlights: [
          'Led four teams across the US and Poland—20+ engineers including two staff and a direct-report engineering manager—protecting 4.8M enterprise users',
          'Rebuilt Shield ML from the ground up, turning an inherited team with no ML background into six engineers shipping production ML, and established Box’s ML career track with HR',
          'Re-architected model serving from 12-hour batch scoring to real-time streaming inference (Apache Beam, PyTorch, GCP Dataflow)—holding a sub-second customer-experience SLA at hundreds of thousands of events per second, powering Box’s first preventative threat capability: ransomware detection',
          'Generated supervised training datasets from detonated malware, gating challenger-to-champion promotion on catching novel samples—replacing “scream-test” releases and cutting model release cycles by ~6 months',
          'Created the automated threat-response platform—detections that once required human intervention now trigger automatic action (severing connections, sandboxing accounts)—7B files annually, 3M+ alerts weekly, 99.9% availability for 1,000+ enterprises, and on-call alerts cut 15x to under 200 per sprint',
          'Shipped Shield’s first production LLM feature, AI Threat Summary—customer-facing generative security summaries grounded in structured detection output, with safety guardrails and evaluation, to 3,000+ customers',
          'Partnered with the CTO and VPs of Security and Enterprise & Governance on two malware-scanning migrations—a vendor switch (negotiating multi-million-dollar contracts) and an on-prem-to-GCP move (10K+ requests/sec)—cutting scan turnaround from 45 minutes to under 5 while holding FedRAMP High, HIPAA, and IRAP compliance',
          'Lifted OKR delivery from 50% to 90% and sustained it for seven straight quarters through disciplined Scrum—shipping critical features 2x faster, including an agent-based security-analysis POC that redirected org strategy in a month',
        ],
      },
      {
        name: 'Amazon Air — Data Application',
        jobTitle: 'Engineering Manager / ML Engineer',
        startEnd: 'Oct 2020 – Nov 2022',
        location: 'Seattle, WA',
        link: 'https://www.amazon.jobs/en/teams/airplanes',
        highlights: [
          'Turned around a year-delayed, mission-critical logistics platform—building the team from scratch and shipping greenfield on AWS in 12 months—processing 450K packages across 200 daily flights and enabling $20M in daily routing decisions at 99.99% uptime',
          'Orchestrated integration across 7 stakeholder groups—executives, external aviation providers, ground crews, data engineering, BI, and support—improving delivery-estimate accuracy 30% for 1,000+ daily users and 300K+ customers',
          'Architected the platform (Lambda, DynamoDB, WAF) with full Infrastructure-as-Code governance, auto-scaling, and 5-second real-time processing—cutting costs 40% across 70 global destinations',
        ],
      },
      {
        name: 'Sony Interactive Entertainment (PlayStation)',
        jobTitle: 'Data Science Manager',
        startEnd: 'Apr 2020 – Oct 2020',
        location: 'San Mateo, CA',
        link: 'https://www.playstation.com/en-us/',
        highlights: [
          'Led a 5-person data science team as player-coach through the PS5 launch—defining KPI frameworks for the platform transition and averting a launch-window data-lake failure',
          'Owned recommendation systems processing social graphs and gameplay patterns for 150M MAU, delivering a 23% lift in PlayStation Store engagement',
        ],
      },
      {
        name: 'Sony Interactive Entertainment (PlayStation)',
        jobTitle: 'Sr. Data Scientist & Sr. Technical Program Manager',
        startEnd: 'Mar 2018 – Apr 2020',
        location: 'San Francisco, CA',
        link: 'https://www.playstation.com/en-us/',
        highlights: [
          'Drove a performance framework to 100% adoption across 750 engineers as product owner and lead data scientist of PlayStation’s performance org—zero OS-level degradations reached customers',
          'Built hierarchical predictive models with automated CI/CD testing (1,000 daily tests) that prevented 100% of degradations across 23 system applications, ending 3-month development freezes for 350 engineers',
          'Architected real-time telemetry processing 24B events daily from 100M+ devices at under 15 seconds of latency, with hardware-embedded monitoring for fleet-wide remote debugging',
        ],
      },
      {
        name: 'Sony Interactive Entertainment (PlayStation)',
        jobTitle: 'Technical Program Manager',
        startEnd: 'Jul 2016 – Mar 2018',
        location: 'San Francisco, CA',
        link: 'https://www.playstation.com/en-us/',
        highlights: [
          'PlayStation Music product owner: delivered in-game background music and grew social discovery from zero to 100K MAU, coordinating system-level Spotify integration across Stockholm, San Francisco, and Tokyo',
        ],
      },
    ],
    // Education. `name` is required. `startEnd`, `description` and `link` are optional.
    education: [
      {
        name: 'UC Berkeley — Master of Information & Data Science',
        startEnd: '2018 – 2020',
        description: 'Machine Learning emphasis',
        link: 'https://ischoolonline.berkeley.edu/data-science/',
      },
      {
        name: 'UC Berkeley — Master of Information Management & Systems',
        startEnd: '2014 – 2016',
        link: 'https://www.ischool.berkeley.edu/programs/mims',
      },
      {
        name: 'University of Michigan — BFA, Photojournalism & Web Design',
        startEnd: '2005 – 2009',
        link: 'https://stamps.umich.edu/',
      },
    ],
    // Skills, they must have `name` and a list of `items`.
    skills: [
      {
        name: 'Core Competencies',
        items: [
          'Engineering Management',
          'Manager of Managers',
          'Real-Time ML Systems',
          'Data & ML Platform Architecture',
          'LLM Guardrails & Evaluation',
          'Threat & Anomaly Detection',
          'Reliability & Observability',
          'AI-Accelerated Engineering',
          'Metrics-Driven Delivery',
        ],
      },
      {
        name: 'ML & GenAI',
        items: [
          'PyTorch',
          'TensorFlow',
          'scikit-learn',
          'RAG',
          'Vector Search & Embeddings',
          'LLM Evals & Guardrails',
          'MCP',
          'Claude Code & Cursor',
        ],
      },
      {
        name: 'Data & Streaming',
        items: [
          'Snowflake',
          'dbt',
          'Fivetran',
          'Databricks',
          'Spark',
          'Kafka',
          'Apache Beam',
          'GCP Dataflow',
          'BigQuery',
        ],
      },
      {
        name: 'Languages, Cloud & Operations',
        items: [
          'Python',
          'SQL',
          'TypeScript',
          'JavaScript',
          'AWS',
          'GCP',
          'Kubernetes',
          'Docker',
          'CI/CD',
          'Pulumi & Terraform',
          'Grafana',
          'Splunk',
        ],
      },
    ],
    // Optional: content of the Leadership Philosophy section
    leadership: `Servant leadership in practice: open communication, realistic commitments, fierce protection of team focus, and customer value as the test of every technical decision.`,
    // Optional: heading and entries of the talks and community section.
    // Entries must have `name` and `description`.
    communityTitle: `Talks, Papers & Community`,
    community: [
      {
        name: 'Conference Presenter',
        description: 'Microsoft MLADS, Spring 2021',
      },
      {
        name: 'Co-author, IEEE MultiMedia',
        description:
          '“Teaching Privacy: Multimedia Making a Difference,” 22(1), 2015',
      },
      {
        name: 'The Mountaineers',
        description: 'Chapter Communications Director, 2025 – Present',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'InferKnow',
        description:
          "Provide California's Emergency Coordinators with the Best Information to Quickly Save Lives and Property.",
        link: 'https://github.com/brynamo/resume/blob/main/src/documents/inferknow.pdf',
      },
      {
        name: 'Yoda',
        description:
          'A privacy-preserving solution that facilitates virtual guided yoga practice. Trained and running inference on the edge.',
        link: 'https://github.com/brynamo/resume/blob/main/src/documents/yoda.pdf',
      },
      {
        name: 'Supporting Nature Conservancy w/ Computer Vision',
        description:
          'Automatically classify fish from on-ship cameras to support sustainable fishing practices and automate fish catch documentation.',
        link: 'https://github.com/brynamo/resume/blob/main/src/documents/natureConservancy.pdf',
      },
      {
        name: 'LinkedIn Experiment',
        description:
          'Does your photo matter on LinkedIn? Evaluating the impact of images in LinkedIn profile interest.',
        link: 'https://github.com/brynamo/resume/blob/main/src/documents/linkedIn.pdf',
      },
      {
        name: 'Hydrobase',
        description:
          'Low cost Aeroponic grow system to support urban agriculture.',
        link: 'https://www.ischool.berkeley.edu/sites/default/files/projects/hydrobasefinalreport.pdf',
      },
    ],
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) => {
                const url = new URL(node.fields.slug, site.siteMetadata.siteUrl)
                  .href;
                return {
                  title: node.frontmatter.title,
                  description: node.frontmatter.description || node.excerpt,
                  date: node.frontmatter.date,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': node.html }],
                };
              }),
            query: `
              {
                allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      description
                      date
                    }
                  }
                }
              }
            `,
            output: `/rss.xml`,
            title: `Bryan Morgan | Blog`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-5KPGMFN1V2`], // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bryan Morgan`,
        short_name: `Bryan Morgan`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
