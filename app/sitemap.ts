import { MetadataRoute } from 'next'
import { getAllPostsMeta } from '@/lib/content/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = getAllPostsMeta().map(p => ({ slug: p.slug.current, _updatedAt: p.publishedAt }))

    const baseUrl = 'https://quickstartgenai.com'
    const blogBaseUrl = 'https://blog.quickstartgenai.com'

    // Base routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/buy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: blogBaseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
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
        url: `${blogBaseUrl}/${post.slug}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...postUrls]
}
