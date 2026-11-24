# resume

Small resume site, built with Gatsby.

## Editing content

All of the copy lives in `siteMetadata` in `gatsby-config.js`. Each section on
the home page renders from one key there, and a section disappears when its key
is removed or left empty.

## Running locally

Requires Node 22.12 or newer (22 or 24).

```bash
npm install
npm start        # dev server on http://localhost:8000
npm run build    # production build into public/
npm run serve    # preview the production build
```

## Publishing

GitHub publishes the site whenever main changes. The workflow in
`.github/workflows/publish.yml` builds every pull request as a check. On every
push to main, which is what merging a pull request does, it builds the site
again and replaces the contents of the `public` branch with the result. GitHub
Pages serves that branch at brynamo.me, so the live site changes a minute or two
after a merge.

- **Settings that must stay as they are:** Settings, Pages, Build and
  deployment: Source "Deploy from a branch", branch `public`, folder `/ (root)`,
  custom domain brynamo.me, Enforce HTTPS on.
- **Rolling back:** open the merged pull request on GitHub, press Revert, and
  merge the revert. That publishes the previous version the same way.
- **Publishing again without a change:** Actions, Build and publish, Run
  workflow.
- **What each publish guarantees:** every published file is replaced, so nothing
  from an older build survives. `static/CNAME` and `static/.nojekyll` are copied
  into every build, and `scripts/check-build.sh` stops the publish if either is
  missing or if the build contains an email address other than the one set in
  `gatsby-config.js`.

## Blog

Add a folder with an `index.md` under `content/blog/` to publish a post. The
Blog link in the header appears once at least one post exists. Until then the
build prints a warning that the query in `src/templates/blog-post.jsx` is not
run, which is expected.
