import { MetadataRoute } from 'next'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await client.fetch(groq`
    *[_type == "post"] {
      "slug": slug.current,
      _updatedAt
    }
  `)

    const baseUrl = 'https://quickstartgenai.com'

    // Base routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ]
    interface Post {
        slug: string;
        _updatedAt: string;
    }

    const postUrls = posts.map((post: Post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...postUrls]
}
