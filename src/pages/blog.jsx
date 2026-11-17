import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import Seo from '../components/seo';
import NotFound from '../pages/404';

const hasPosts = (data) => data.allMarkdownRemark.edges.length > 0;

const Index = ({ data }) => {
  if (!hasPosts(data)) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <BlogPosts posts={data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export default Index;

export const Head = ({ data }) => (
  <Seo title={hasPosts(data) ? 'Blog' : 'Not found'} />
);

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
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
