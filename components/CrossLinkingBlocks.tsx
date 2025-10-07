'use client'

import { memo } from 'react'
import { CrossLinkCard } from '@/components/ui/cross-link-card'
import { TopicCard } from '@/components/ui/topic-card'
import { crossLinkItems, topicItems } from '@/lib/constants/cross-linking-data'
import { 
  BookOpen, 
  Users, 
  HelpCircle, 
  ExternalLink, 
  Star
} from 'lucide-react'

// Icon mapping
const iconMap = {
  "Get the Book": <BookOpen className="h-6 w-6" />,
  "Meet Authors": <Users className="h-6 w-6" />,
  "FAQ": <HelpCircle className="h-6 w-6" />,
  "Latest Blog": <ExternalLink className="h-6 w-6" />,
}

const topicIconMap = {
  "RAG Implementation": <Star className="h-5 w-5" />,
  "AI Agents": <Users className="h-5 w-5" />,
  "Local LLMs": <BookOpen className="h-5 w-5" />,
}

export default memo(function CrossLinkingBlocks() {
  // Add icons to data
  const itemsWithIcons = crossLinkItems.map(item => ({
    ...item,
    icon: iconMap[item.title as keyof typeof iconMap] || null
  }))

  const topicsWithIcons = topicItems.map(topic => ({
    ...topic,
    icon: topicIconMap[topic.title as keyof typeof topicIconMap] || null
  }))

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full border border-blue-100 mb-6">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-semibold text-sm">Explore More</span>
            <Star className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Discover Your AI Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of local LLM development with our comprehensive resources and expert guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {itemsWithIcons.map((item, index) => (
            <div key={index} className="group">
              <CrossLinkCard item={item} />
            </div>
          ))}
        </div>

        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-8 py-3 rounded-full border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 font-semibold text-sm">Related Topics</span>
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Master These Key Areas
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {topicsWithIcons.map((topic, index) => (
                <div key={index} className="group">
                  <TopicCard topic={topic} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})