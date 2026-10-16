import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/sanity/posts";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = (searchParams.get("q") || "").slice(0, 200).toLowerCase();
  const integer = (value: string | null, fallback: number, max: number) => {
    const n = Number(value);
    return Number.isSafeInteger(n) && n > 0 ? Math.min(n, max) : fallback;
  };
  const page = integer(searchParams.get("page"), 1, 10000);
  const pageSize = integer(searchParams.get("pageSize"), 6, 50);
  const filtered = (await getPublishedPosts()).filter((p) =>
    `${p.title} ${p.excerpt || ""}`.toLowerCase().includes(search),
  );
  return NextResponse.json({
    posts: filtered
      .slice((page - 1) * pageSize, page * pageSize)
      .map((p) => ({
        _id: p._id,
        title: p.title,
        slug: { current: p.slug },
        excerpt: p.excerpt,
        authorName: p.author?.name || "",
        publishedAt: p.publishedAt,
        categories: p.categories,
        imageUrl: p.imageUrl,
      })),
    total: filtered.length,
  });
}
