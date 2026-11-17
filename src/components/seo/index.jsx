import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

// Rendered from each page's `Head` export (Gatsby Head API). The <html lang>
// attribute is set in gatsby-ssr.js.
const Seo = ({ description, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const author = site.siteMetadata?.author;

  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      {author && <meta name="twitter:creator" content={author} />}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  );
};

export default Seo;
