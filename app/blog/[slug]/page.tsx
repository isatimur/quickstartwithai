import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogShell } from "@/components/blog/BlogShell";
import { PostBody } from "@/components/blog/PostBody";
import { getPublishedPost, getPublishedPosts } from "@/lib/sanity/posts";
export const revalidate = 60;
interface Props {
  params: { slug: string };
}
export async function generateStaticParams() {
  return (await getPublishedPosts()).map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost(params.slug);
  if (!post) notFound();
  return {
    title: { absolute: `${post.title} — Quickstart GenAI` },
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt || undefined,
      url: `https://quickstartgenai.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      images: post.imageUrl ? [post.imageUrl] : ["/book-cover.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || undefined,
      images: post.imageUrl ? [post.imageUrl] : ["/book-cover.webp"],
    },
  };
}
export default async function BlogPostPage({ params }: Props) {
  const post = await getPublishedPost(params.slug);
  if (!post) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    mainEntityOfPage: `https://quickstartgenai.com/blog/${post.slug}`,
    author: post.author?.name
      ? { "@type": "Person", name: post.author.name }
      : undefined,
    image: post.imageUrl,
    publisher: {
      "@type": "Organization",
      name: "Quickstart GenAI",
      url: "https://quickstartgenai.com",
    },
  };
  return (
    <BlogShell>
      <main id="main" className="blog-article">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/blog">Engineering blog</a>
        </nav>
        <p className="eyebrow">
          {post.categories.join(" / ") || "QUICKSTART GENAI / ENGINEERING"}
        </p>
        <h1>{post.title}</h1>
        <p className="blog-byline">
          {post.author?.name}
          {post.publishedAt && (
            <>
              {" "}
              ·{" "}
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
            </>
          )}
        </p>
        {post.excerpt && <p className="blog-deck">{post.excerpt}</p>}
        {post.imageUrl && (
          <img
            className="blog-cover"
            src={`${post.imageUrl}?w=1400&auto=format&fit=max`}
            alt={post.imageAlt || ""}
            fetchPriority="high"
          />
        )}
        <PostBody body={post.body || []} />
        <aside className="guide-book-cta">
          <h2>Keep building.</h2>
          <p>Explore Generative AI with Local LLM and its companion code.</p>
          <a className="button" href="/">
            Explore the book ↗
          </a>
        </aside>
        <a className="inline-link" href="/blog">
          ← All articles
        </a>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\u003c"),
        }}
      />
    </BlogShell>
  );
}
