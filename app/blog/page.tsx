import type { Metadata } from "next";
import Link from "next/link";
import { BlogShell } from "@/components/blog/BlogShell";
import { getPublishedPosts } from "@/lib/sanity/posts";
export const revalidate = 60;
export const metadata: Metadata = {
  title: { absolute: "Engineering Blog — Quickstart GenAI" },
  description:
    "Practical articles on local LLMs, RAG, AI agents, and application development by the Quickstart GenAI authors.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
  openGraph: {
    title: "Engineering Blog — Quickstart GenAI",
    type: "website",
    url: "https://quickstartgenai.com/blog",
  },
};
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const posts = await getPublishedPosts();
  const q =
    typeof searchParams.q === "string"
      ? searchParams.q.trim().slice(0, 200)
      : "";
  const shown = q
    ? posts.filter((p) =>
        `${p.title} ${p.excerpt || ""}`.toLowerCase().includes(q.toLowerCase()),
      )
    : posts;
  return (
    <BlogShell>
      <main id="main" className="blog-index">
        <p className="eyebrow">QUICKSTART GENAI / ENGINEERING BLOG</p>
        <h1>
          Ideas worth
          <br />
          <em>building on.</em>
        </h1>
        <p className="blog-deck">
          Practical notes on local models, retrieval, agents, and the
          applications you can build with them.
        </p>
        <form action="/blog" role="search" className="blog-search">
          <label htmlFor="blog-query">Search articles</label>
          <div>
            <input
              id="blog-query"
              name="q"
              type="search"
              defaultValue={q}
              maxLength={200}
              placeholder="RAG, agents, local LLMs…"
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <p className="blog-count">
          {shown.length} {shown.length === 1 ? "article" : "articles"}
          {q ? ` matching “${q}”` : ""}
        </p>
        <div className="blog-grid">
          {shown.map((post) => (
            <article key={post._id}>
              {post.imageUrl && (
                <Link
                  href={`/blog/${post.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={`${post.imageUrl}?w=800&auto=format&fit=max`}
                    alt={post.imageAlt || ""}
                    loading="lazy"
                  />
                </Link>
              )}
              <div>
                <p className="small-label">
                  {post.categories.join(" / ") || "ENGINEERING"}
                </p>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                {post.excerpt && <p>{post.excerpt}</p>}
                <p className="blog-byline">
                  {post.author?.name}
                  {post.publishedAt && (
                    <>
                      {" "}
                      ·{" "}
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-GB",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            timeZone: "UTC",
                          },
                        )}
                      </time>
                    </>
                  )}
                </p>
                <Link className="inline-link" href={`/blog/${post.slug}`}>
                  Read article ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
        {!shown.length && (
          <p className="blog-empty">
            {q
              ? "No articles match this search. Try another topic."
              : "No published articles yet."}
          </p>
        )}
      </main>
    </BlogShell>
  );
}
