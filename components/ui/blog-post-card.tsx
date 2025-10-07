'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, ExternalLink } from 'lucide-react'
import type { BlogPost } from '@/lib/types/cross-linking'

interface BlogPostCardProps {
  post: BlogPost
}

export const BlogPostCard = memo(function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                <Link 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h3>
              {post.featured && (
                <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  Featured
                </Badge>
              )}
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                )}
                {post.author && (
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                )}
              </div>
              
              <Link 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform"
              >
                Read More <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
})
