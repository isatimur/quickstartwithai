'use client'

import { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BlogPostCard } from '@/components/ui/blog-post-card'
import { ArrowRight, Loader2 } from 'lucide-react'

interface BlogPost {
  title: string
  url: string
  date: string
  excerpt: string
  author: string
  readTime: string
  featured?: boolean
}

export default memo(function BlogCrossLinking() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/api/blog/rss')
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }
        const data = await response.json()
        
        // Transform RSS data to our BlogPost format
        const transformedPosts: BlogPost[] = data.map((item: Record<string, unknown>, index: number) => ({
          title: item.title || 'Untitled',
          url: item.link || '#',
          date: item.isoDate && typeof item.isoDate === 'string' ? new Date(item.isoDate).toLocaleDateString() : 'Recent',
          excerpt: item.description && typeof item.description === 'string' ? 
            item.description.replace(/<[^>]*>/g, '').substring(0, 120) + '...' : 
            'Read more about this article...',
          author: item.author || 'Team Quickstart',
          readTime: '5 min read',
          featured: index < 2 // First 2 posts are featured
        }))
        
        setBlogPosts(transformedPosts)
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setError('Failed to load blog posts')
        
        // Fallback to hardcoded posts if RSS fails
        setBlogPosts([
          {
            title: "Update on Our Website & Publishing Direction",
            url: "https://blog.quickstartgenai.com/update-on-our-website-publishing-direction/",
            date: "10/1/2025",
            excerpt: "Latest updates on our publishing strategy and website improvements",
            author: "Team Quickstart",
            readTime: "5 min read",
            featured: true
          },
          {
            title: "Your AI is a Caged Genius. Here's How to Set It Free.",
            url: "https://blog.quickstartgenai.com/your-ai-is-a-caged-genius-heres-how-to-set-it-free/",
            date: "6/27/2025",
            excerpt: "Learn how to unlock the full potential of AI agents and move beyond rigid tool chains",
            author: "Team Quickstart",
            readTime: "8 min read",
            featured: true
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest from our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI development and local LLM implementation
            </p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-3 text-gray-600">Loading latest articles...</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest from our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights on AI development and local LLM implementation
          </p>
          {error && (
            <p className="text-sm text-orange-600 mt-2">
              Showing cached content. {error}
            </p>
          )}
        </div>

        <div className="space-y-6 mb-12">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want More AI Insights?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our complete blog archive with in-depth tutorials, case studies, and the latest developments in AI technology.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="https://blog.quickstartgenai.com" target="_blank" rel="noopener noreferrer">
                Visit Our Blog <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})