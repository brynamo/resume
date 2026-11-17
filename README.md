# resume

Small resume site, built with Gatsby.

## Editing content

All of the copy lives in `siteMetadata` in `gatsby-config.js`. Each section on
the home page renders from one key there, and a section disappears when its key
is removed or left empty.

## Running locally

Requires Node 20 or newer.

```bash
npm install
npm start        # dev server on http://localhost:8000
npm run build    # production build into public/
npm run serve    # preview the production build
```

## Publishing

The live site is served by GitHub Pages from the `public` branch, which holds
the contents of the `public/` folder that `npm run build` produces.
`static/CNAME` and `static/.nojekyll` are copied into every build, so the custom
domain and Gatsby's underscore-prefixed folders survive a publish.

## Blog

Add a folder with an `index.md` under `content/blog/` to publish a post. The
Blog link in the header appears once at least one post exists. Until then the
build prints a warning that the query in `src/templates/blog-post.jsx` is not
run, which is expected.
