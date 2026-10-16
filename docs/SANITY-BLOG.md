# Sanity blog

The original public dataset (`t2bsu7sk`, `production`) still contains the published articles. The site reads published documents only; drafts and future-dated posts are excluded. No documents are migrated or modified by this change.

- `/blog`: server-rendered article list with search.
- `/blog/[slug]`: original Sanity slugs, article metadata, and BlogPosting structured data.
- `/studio`: embedded Sanity Studio. Sign in with the Sanity account that has access to the existing project.
- `/blog/feed.xml`: RSS; `/sitemap.xml` includes published articles.
- `/api/blog/search` and `/api/blog/rss`: restored content APIs, backed by Sanity.

Post, author, category, code, image, and `youTube` schemas preserve the original field names and document types. Article reads revalidate every 60 seconds. New published slugs can render on demand. The Studio uses Sanity's own project authorization; no write token is shipped to the browser.

The existing public project/dataset identifiers are defaults. Override them with the variables in `.env.example` when needed. If changing to a private dataset, set a server-only `SANITY_API_READ_TOKEN` in hosting secrets.

## Editor access

In https://www.sanity.io/manage, select the existing project and verify that the editor's Sanity account is a project member. Add the production and preview frontend origins to the project's API CORS origins, including `http://localhost:3000` for local development. Studio auth should use the Sanity login flow, not a public API write token.

## Deployment boundary

Deploy this Next.js branch to serve the restored routes. `blog.quickstartgenai.com` is still hosted separately on Ghost: its DNS/hosting redirect to `https://quickstartgenai.com/blog` is a separate cutover. Do not delete the Ghost archive; its newer posts may need a separate content migration. This restoration reads the existing Sanity archive and does not claim to import Ghost posts.

## Checks

With the production server on port 3007:

```sh
node scripts/check-book-pages.mjs
node scripts/check-sanity-blog.mjs
```

An authenticated Studio login/edit/publish check remains necessary with the project owner's Sanity account after CORS is configured. The local build and public article reads do not prove editor permissions or publishing access.

## Compatibility

This repository stays on Next.js 14 / React 18. Sanity Studio 3.70.0 and next-sanity 9.5.0 are pinned to compatible releases. The Portable Text editor is overridden to 1.21.5 because newer 1.x releases removed behavior exports used by this Studio version. Use Node 22 for the Sanity CLI.

The current CLI session could read public content but received `sanity.project.cors/read` permission denial when checking project origins. A project administrator must verify CORS and editor membership.
