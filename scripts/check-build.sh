#!/usr/bin/env bash
# Checks a fresh build in public/ before it is published. Run after `npm run build`.
set -euo pipefail
cd "$(dirname "$0")/.."

fail() { echo "check-build: $*" >&2; exit 1; }

[ -f public/index.html ] || fail "public/index.html is missing"
[ -f public/.nojekyll ] || fail "public/.nojekyll is missing (GitHub Pages would hide the _gatsby folder)"
[ "$(cat public/CNAME)" = "brynamo.me" ] || fail "public/CNAME must contain brynamo.me, or the custom domain is lost"

# The only email address allowed on the site is the one in gatsby-config.js.
allowed="$(node -p "require('./gatsby-config.js').siteMetadata.email || ''")"
found="$(grep -rhoE '[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}' public \
  --include='*.html' --include='*.json' --include='*.xml' --include='*.js' --include='*.webmanifest' | sort -u || true)"
unexpected="$(printf '%s\n' "$found" | grep -vxF -e "$allowed" -e '' || true)"
[ -z "$unexpected" ] || fail "unexpected email addresses in the build: $(echo $unexpected)"

echo "check-build: OK, $(find public -type f | wc -l | tr -d ' ') files, email addresses found: ${found:-none}"
