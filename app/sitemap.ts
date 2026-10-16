import { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/sanity/posts";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getPublishedPosts()).map((p) => ({
    slug: p.slug,
    _updatedAt: p._updatedAt,
  }));

  const baseUrl = "https://quickstartgenai.com";
  const blogBaseUrl = `${baseUrl}/blog`;

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/buy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: blogBaseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];
  interface Post {
    slug: string;
    _updatedAt: string;
  }

  const postUrls = posts.map((post: Post) => ({
    url: `${blogBaseUrl}/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guideUrls = ["local-llm", "rag", "learning-path"].map((slug) => ({
    url: `${baseUrl}/guides/${slug}/`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...routes, ...guideUrls, ...postUrls];
}
