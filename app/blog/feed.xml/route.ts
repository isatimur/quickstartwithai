import { getPublishedPosts } from "@/lib/sanity/posts";
export const revalidate = 60;
const xml = (value: string) =>
  value.replace(
    /[<>&"']/g,
    (ch) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[ch]!,
  );
export async function GET() {
  const posts = await getPublishedPosts();
  const items = posts
    .map(
      (post) =>
        `<item><title>${xml(post.title)}</title><link>https://quickstartgenai.com/blog/${xml(post.slug)}</link><guid isPermaLink="true">https://quickstartgenai.com/blog/${xml(post.slug)}</guid><description>${xml(post.excerpt || "")}</description>${post.publishedAt ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ""}</item>`,
    )
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Quickstart GenAI — Engineering Blog</title><link>https://quickstartgenai.com/blog</link><description>Local LLMs, RAG, and AI engineering.</description><language>en</language>${items}</channel></rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    },
  );
}
