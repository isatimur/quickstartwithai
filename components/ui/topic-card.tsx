'use client'

import { memo } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { TopicItem } from '@/lib/types/cross-linking'

interface TopicCardProps {
  topic: TopicItem
}

const colorClasses = {
  blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-900',
  green: 'from-green-50 to-green-100 border-green-200 text-green-900',
  purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-900',
  orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-900'
}

const iconColorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500'
}

export const TopicCard = memo(function TopicCard({ topic }: TopicCardProps) {
  return (
    <div 
      className={`text-center p-6 rounded-xl bg-gradient-to-br ${colorClasses[topic.color]} border hover:shadow-lg transition-all duration-300 hover:scale-105`}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${iconColorClasses[topic.color]} text-white mb-4`}>
        {topic.icon}
      </div>
      <h4 className={`font-semibold mb-3`}>
        {topic.title}
      </h4>
      <p className={`text-sm mb-4`}>
        {topic.description}
      </p>
      <Link 
        href={topic.href}
        className={`text-${topic.color}-600 hover:text-${topic.color}-700 text-sm font-medium flex items-center justify-center`}
      >
        Explore Guides <ArrowRight className="ml-1 h-3 w-3" />
      </Link>
    </div>
  )
})
