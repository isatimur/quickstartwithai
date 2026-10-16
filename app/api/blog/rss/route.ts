import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/sanity/posts";
export const revalidate = 60;
export async function GET() {
  const posts = await getPublishedPosts();
  return NextResponse.json(
    posts
      .slice(0, 6)
      .map((p) => ({
        title: p.title,
        link: `https://quickstartgenai.com/blog/${p.slug}`,
        pubDate: p.publishedAt,
        isoDate: p.publishedAt,
        description: p.excerpt,
        excerpt: p.excerpt,
        image: p.imageUrl,
        author: p.author?.name,
      })),
  );
}
