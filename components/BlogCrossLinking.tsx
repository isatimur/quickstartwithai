'use client'

import { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Loader2, Clock, ChevronRight, Sparkles } from 'lucide-react'

interface BlogPost {
  title: string
  url: string
  date: string
  excerpt: string
  author: string
  readTime: string
  featured?: boolean
  category?: string
}

interface RSSItem {
  title?: string
  link?: string
  isoDate?: string
  description?: string
  author?: string
  categories?: string[]
}

export default memo(function BlogCrossLinking() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/api/blog/rss')
        if (!response.ok) throw new Error('Failed to fetch blog posts')
        const data: RSSItem[] = await response.json()
        
        const transformedPosts: BlogPost[] = data.map((item, index) => ({
          title: item.title || 'Untitled',
          url: item.link || '#',
          date: item.isoDate ? new Date(item.isoDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent',
          excerpt: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : 'Read more...',
          author: item.author || 'Team Quickstart',
          readTime: `${Math.ceil((item.description?.length || 1000) / 1000)} min read`,
          featured: index === 0,
          category: item.categories?.[0] || 'AI Development'
        }))
        
        setBlogPosts(transformedPosts)
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setBlogPosts([
          {
            title: "Update on Our Website & Publishing Direction",
            url: "https://blog.quickstartgenai.com/update-on-our-website-publishing-direction/",
            date: "October 1, 2025",
            excerpt: "We're excited to announce a major strategic shift in how we deliver content. Read about our new partnership with Bombora Publishers and what it means for you.",
            author: "Team Quickstart",
            readTime: "5 min read",
            featured: true,
            category: "Announcements"
          },
          {
            title: "Your AI is a Caged Genius. Here's How to Set It Free.",
            url: "https://blog.quickstartgenai.com/your-ai-is-a-caged-genius-heres-how-to-set-it-free/",
            date: "June 27, 2025",
            excerpt: "Most AI agents are limited by rigid tool chains. Discover the architecture patterns that allow for true autonomy and creative problem solving.",
            author: "Timur Isachenko",
            readTime: "8 min read",
            featured: false,
            category: "AI Agents"
          },
          {
             title: "RAG vs Long Context Windows: The Definitive Guide",
             url: "https://blog.quickstartgenai.com",
             date: "June 15, 2025",
             excerpt: "With context windows growing larger, do we still need RAG? We analyze the cost, latency, and accuracy trade-offs.",
             author: "Shamim Bhuiyan",
             readTime: "12 min read",
             featured: false,
             category: "Architecture"
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
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Loader2 className="h-10 w-10 animate-spin text-gray-900 mx-auto mb-4" />
          <p className="text-gray-500 font-medium tracking-wide">Curating latest insights...</p>
        </div>
      </section>
    )
  }

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 4)

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-100 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <span className="h-px w-8 bg-black"></span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">Engineering Blog</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight leading-[0.9]">
              Latest <span className="text-gray-400 font-serif italic font-normal">Insights</span>
            </h2>
          </div>
          <div className="mb-2">
             <Link 
               href="https://blog.quickstartgenai.com" 
               target="_blank"
               className="group flex items-center text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors"
             >
               View Archive 
               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Featured Article - Takes up 7 columns */}
          <div className="lg:col-span-7 group cursor-pointer">
            {featuredPost && (
              <Link href={featuredPost.url} target="_blank" className="block h-full">
                <div className="relative h-full flex flex-col justify-between">
                  {/* Decorative background for featured item */}
                  <div className="absolute inset-0 bg-gray-50 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-8">
                      <span className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">
                        Featured Story
                      </span>
                      <span className="text-sm font-medium text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-2" /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-900 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-200 group-hover:border-gray-300 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Written By</span>
                        <span className="font-serif text-lg text-gray-900 italic">{featuredPost.author}</span>
                      </div>
                      <div className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                        <ArrowRight className="h-5 w-5 text-gray-900 group-hover:text-white transform -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Recent List - Takes up 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 pl-4">
              Recent Stories
            </h4>
            
            {recentPosts.map((post, index) => (
              <Link 
                key={index} 
                href={post.url} 
                target="_blank"
                className="group/item block p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {post.category || 'Article'}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover/item:text-blue-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-gray-900 group-hover/item:translate-x-2 transition-transform duration-300">
                  Read Article <ChevronRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            ))}

            {/* Newsletter Mini-CTA */}
            <div className="mt-8 p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-4">
                   <Sparkles className="h-5 w-5 text-yellow-400" />
                   <span className="text-sm font-bold uppercase tracking-wider text-gray-300">Weekly Intel</span>
                 </div>
                 <h4 className="text-xl font-bold mb-2">Join the Inner Circle</h4>
                 <p className="text-gray-400 text-sm mb-6">Get exclusive deep dives into local LLM systems delivered to your inbox.</p>
                 
                 <Button asChild className="w-full bg-white text-black hover:bg-gray-200 font-bold">
                   <Link href="https://blog.quickstartgenai.com" target="_blank">
                     Subscribe Now
                   </Link>
                 </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
})
