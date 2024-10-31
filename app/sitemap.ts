import { MetadataRoute } from 'next'

type ChangeFreq = 'weekly' | 'daily' | 'monthly' | 'always' | 'hourly' | 'yearly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://quickstartgenai.com'

    // Core pages
    const mainPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as ChangeFreq,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.7,
        },
    ]

    // FAQ Categories
    const faqCategories = [
        'basics',
        'technical',
        'applications',
        'ethics',
        'development'
    ].map(category => ({
        url: `${baseUrl}/faq/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFreq,
        priority: 0.6,
    }))

    // Book sections
    const bookSections = [
        'features',
        'authors',
        'testimonials',
        'sample-chapter'
    ].map(section => ({
        url: `${baseUrl}/#${section}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.9,
    }))

    // Additional resources
    const resources = [
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.5,
        }
    ]

    return [
        ...mainPages,
        ...faqCategories,
        ...bookSections,
        ...resources
    ]
}
