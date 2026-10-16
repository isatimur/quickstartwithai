import "server-only";
import { cache } from "react";
import type { PortableTextBlock } from "@portabletext/types";
import { projectId, dataset, apiVersion } from "@/sanity/env";

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  _updatedAt: string;
  author: { name: string; imageUrl?: string } | null;
  imageUrl?: string;
  imageAlt?: string;
  categories: string[];
  body: PortableTextBlock[];
}
const projection = `{_id,title,"slug":slug.current,excerpt,publishedAt,_updatedAt,
  "author":author->{name,"imageUrl":image.asset->url},"imageUrl":mainImage.asset->url,
  "imageAlt":mainImage.alt,"categories":coalesce(categories[]->title,[]),body}`;
const published = `_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && (!defined(publishedAt) || publishedAt <= now())`;

async function query<T>(
  groq: string,
  params: Record<string, string> = {},
): Promise<T> {
  const url = new URL(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`,
  );
  url.searchParams.set("query", groq);
  url.searchParams.set("perspective", "published");
  for (const [key, value] of Object.entries(params))
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  const token = process.env.SANITY_API_READ_TOKEN;
  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    next: { revalidate: 60, tags: ["sanity-posts"] },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok)
    throw new Error(`Sanity content request failed (${response.status})`);
  const data: { result: T } = await response.json();
  return data.result;
}
export const getPublishedPosts = cache(async () =>
  query<Omit<BlogPost, "body">[]>(
    `*[${published}] | order(publishedAt desc, _createdAt desc) ${projection.replace(",body}", "}")}`,
  ),
);
export const getPublishedPost = cache(async (slug: string) =>
  query<BlogPost | null>(
    `*[${published} && slug.current == $slug][0] ${projection}`,
    { slug },
  ),
);
