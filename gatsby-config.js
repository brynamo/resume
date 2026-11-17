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
    about: `Hands-on ML engineer and engineering leader: a decade of turning ambiguous problems into production ML – sub-second time-series anomaly detection on streaming events, LLM features shipped with guardrails and evaluation, fully local RAG systems, and challenger/champion pipelines that cut model release cycles by ~6 months. Equally at home in startup-speed and enterprise-compliance modes, and still in the code daily. I’ve led staff engineers at every company since 2016.`,
    // Experience, most recent first. `name` is required. `jobTitle`, `startEnd`,
    // `location`, `link`, `description` and `highlights` (the bullets) are optional.
    experience: [
      {
        name: 'Playlist (Mindbody, ClassPass, Booker, Kite & EGYM)',
        jobTitle: 'Engineering Manager, Data Platform',
        startEnd: 'Apr 2026 – Present',
        location: 'Seattle, WA',
        highlights: [
          'Head Playlist’s 10-engineer data platform org (grown from 8) processing ~40 TB daily across a ~200 TB estate – Fivetran ingestion, dbt transformation, the Snowflake warehouse, and Databricks streaming – powering analytics for all five Playlist brands',
          'Launched a natural-language analytics platform pairing Claude with the Snowflake warehouse, opening governed self-serve data access to ~1,000 employees',
          'Raised quarterly OKR delivery from 40% to over 80% in my first quarter by stabilizing sprint priorities and instituting metrics-driven planning and review',
          'Built “TeamOS” myself with AI – Claude skills and agents that institutionalize how the team runs and how other teams work with us – balancing consistency, best practices, and speed',
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
        name: 'Box – Shield Threat Protection & Shield ML',
        jobTitle: 'Engineering Manager',
        startEnd: 'Jan 2023 – Oct 2025',
        location: 'Seattle, WA',
        highlights: [
          'Led four teams across the US and Poland – 20+ engineers, including two staff engineers and a direct-report engineering manager – protecting 4.8M enterprise users',
          'Re-architected model serving from 12-hour batch scoring to real-time streaming inference (Apache Beam, PyTorch, GCP Dataflow) – holding a sub-second customer-experience SLA at hundreds of thousands of events per second, powering Box’s first preventative threat capability: ransomware detection',
          'Generated supervised training datasets from detonated malware, gating challenger-to-champion promotion on catching novel samples – replacing reactive “scream-test” releases and cutting model release cycles by ~6 months',
          'Rebuilt Shield ML from the ground up, turning an inherited team with no ML background into six engineers shipping production ML, and established Box’s ML career track with HR',
          'Ran the automated threat-response platform – 7B files scanned annually, 3M+ security alerts weekly, 99.9% availability for 1,000+ enterprises – while cutting on-call alert volume 15x, from 3,000+ to under 200 per sprint',
          'Shipped Shield’s first production LLM feature, AI Threat Summary – customer-facing generative security summaries with safety guardrails and evaluation',
          'Partnered with the CTO and VPs of Security and Enterprise & Governance on the on-prem-to-GCP malware-scanning migration (10K+ requests/sec) – scan turnaround cut from 45 minutes to under 5 – negotiating multi-million-dollar vendor contracts and holding FedRAMP High, HIPAA, and IRAP compliance',
          'Lifted OKR delivery from 50% to 90% and sustained it for seven consecutive quarters through disciplined Scrum – shipping critical features 2x faster, including an agent-based security-analysis POC that redirected org strategy within a month',
        ],
      },
      {
        name: 'Amazon Air – Data Application',
        jobTitle: 'Engineering Manager / ML Engineer',
        startEnd: 'Oct 2020 – Nov 2022',
        location: 'Seattle, WA',
        link: 'https://www.amazon.jobs/en/teams/airplanes',
        highlights: [
          'Turned around a year-delayed, mission-critical logistics platform – greenfield AWS delivery in 12 months – processing 450K packages across 200 daily flights and enabling $20M in daily routing decisions at 99.99% uptime',
          'Orchestrated integration across 7 stakeholder groups – executives, external aviation providers, ground crews, data engineering, BI, and support – improving delivery-estimate accuracy 30% for 1,000+ daily users and 300K+ customers',
          'Architected the platform (Lambda, DynamoDB, WAF) with full Infrastructure-as-Code governance, auto-scaling, and 5-second real-time processing – cutting costs 40% across 70 global destinations',
        ],
      },
      {
        name: 'Sony Interactive Entertainment (PlayStation)',
        jobTitle: 'Data Science Manager',
        startEnd: 'Apr 2020 – Oct 2020',
        location: 'San Mateo, CA',
        link: 'https://www.playstation.com/en-us/',
        highlights: [
          'Led a 5-person data science team as player-coach through the PS5 launch – defining KPI frameworks for a 150M-user platform and averting a launch-window data-lake failure before production impact',
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
          'Drove a performance framework to 100% adoption across 750 engineers as product owner and lead data scientist of PlayStation’s performance org – zero OS-level degradations reached customers',
          'Built hierarchical predictive models with automated CI/CD testing (1,000 daily tests) that prevented 100% of performance degradations across 23 system applications, ending 3-month development freezes for 350 engineers',
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
          'Product owner for PlayStation Music: delivered in-game background music and grew social music discovery from zero to 100K monthly active users, coordinating system-level Spotify integration across Stockholm, San Francisco, and Tokyo teams',
        ],
      },
    ],
    // Education. `name` is required. `startEnd`, `description` and `link` are optional.
    education: [
      {
        name: 'UC Berkeley – Master of Information & Data Science',
        startEnd: '2018 – 2020',
        description: 'Machine Learning emphasis',
        link: 'https://ischoolonline.berkeley.edu/data-science/',
      },
      {
        name: 'UC Berkeley – Master of Information Management & Systems',
        startEnd: '2014 – 2016',
        link: 'https://www.ischool.berkeley.edu/programs/mims',
      },
      {
        name: 'University of Michigan – BFA, Photojournalism & Web Design',
        startEnd: '2005 – 2009',
        link: 'https://stamps.umich.edu/',
      },
    ],
    // Skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Core Competencies',
        description:
          'Time-Series & Anomaly Detection, Real-Time Model Serving, GenAI: RAG & LLM Evaluation, MLOps & CI/CD for ML, Python & PyTorch, Model Validation & Reproducibility, Ambiguity to Production, Cloud ML (GCP & AWS), Technical Leadership',
      },
      {
        name: 'ML & GenAI',
        description:
          'Python, PyTorch, TensorFlow, scikit-learn, LangChain, LangGraph, RAG, Vector Search & Embeddings, LLM Evals & Guardrails, Vertex AI, Weights & Biases, Claude & Cursor',
      },
      {
        name: 'Data & Streaming',
        description:
          'Apache Beam, GCP Dataflow, Kafka, Spark, Snowflake, dbt, Fivetran, Databricks, SQL',
      },
      {
        name: 'Cloud & Operations',
        description:
          'GCP, AWS, Kubernetes, Docker, CI/CD, Infrastructure-as-Code, Grafana, Splunk, Chronosphere',
      },
    ],
    // Optional: content of the Leadership Philosophy section
    leadership: `Servant leadership in practice: open communication, realistic commitments, fierce protection of team focus, and customer value as the test of every technical decision.`,
    // Optional: Speaking & Community, they must have `name` and `description`.
    community: [
      {
        name: 'Conference Presenter',
        description: 'Microsoft MLADS, Spring 2021',
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
