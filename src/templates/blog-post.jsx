import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import Seo from '../components/seo';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-light',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
      <p className={classes.date}>Posted on {post.frontmatter.date}</p>
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
};

export default BlogPost;

export const Head = ({ data }) => (
  <Seo
    title={data.markdownRemark.frontmatter.title}
    description={
      data.markdownRemark.frontmatter.description || data.markdownRemark.excerpt
    }
  />
);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        email
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
  }
`;
