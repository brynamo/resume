import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionCommunity from '../components/section-community';
import SectionEducation from '../components/section-education';
import SectionExperience from '../components/section-experience';
import SectionLeadership from '../components/section-leadership';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import Seo from '../components/seo';

const hasItems = (list) => Array.isArray(list) && list.length > 0;

const Index = ({ data }) => {
  const metadata = data.site.siteMetadata;
  const {
    about,
    experience,
    education,
    skills,
    leadership,
    community,
    projects,
  } = metadata;
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <Header metadata={metadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {hasItems(experience) && <SectionExperience experience={experience} />}
      {hasItems(education) && <SectionEducation education={education} />}
      {hasItems(skills) && <SectionSkills skills={skills} />}
      {leadership && <SectionLeadership leadership={leadership} />}
      {hasItems(community) && <SectionCommunity community={community} />}
      {hasItems(projects) && <SectionProjects projects={projects} />}
    </Layout>
  );
};

export default Index;

export const Head = () => <Seo />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        location
        about
        author
        github
        linkedin
        leadership
        experience {
          name
          jobTitle
          startEnd
          location
          description
          highlights
          link
        }
        education {
          name
          startEnd
          description
          link
        }
        skills {
          name
          description
        }
        community {
          name
          description
          link
        }
        projects {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 5) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
