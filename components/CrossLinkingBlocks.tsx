'use client'

import { memo } from 'react'
import Link from 'next/link'
import { 
  BookOpen, 
  Users, 
  HelpCircle, 
  ExternalLink, 
  Star,
  ArrowRight,
  Sparkles,
  Zap,
  Cpu
} from 'lucide-react'
import { crossLinkItems, topicItems } from '@/lib/constants/cross-linking-data'
import { cn } from '@/lib/utils'

// Icon mapping
const iconMap = {
  "Get the Book": <BookOpen className="h-8 w-8" />,
  "Meet Authors": <Users className="h-8 w-8" />,
  "FAQ": <HelpCircle className="h-8 w-8" />,
  "Latest Blog": <ExternalLink className="h-8 w-8" />,
}

const topicIconMap = {
  "RAG Implementation": <Sparkles className="h-6 w-6" />,
  "AI Agents": <Zap className="h-6 w-6" />,
  "Local LLMs": <Cpu className="h-6 w-6" />,
}

// Premium Card Component
const PremiumCard = ({ item, index }: { item: any, index: number }) => {
  // Determine gradient based on index for visual variety
  const gradients = [
    "from-blue-600/20 to-indigo-600/20",
    "from-purple-600/20 to-pink-600/20",
    "from-emerald-600/20 to-teal-600/20",
    "from-orange-600/20 to-amber-600/20",
  ]
  
  const borderGradients = [
    "group-hover:border-blue-500/50",
    "group-hover:border-purple-500/50",
    "group-hover:border-emerald-500/50",
    "group-hover:border-orange-500/50",
  ]

  const iconColors = [
    "text-blue-600",
    "text-purple-600",
    "text-emerald-600",
    "text-orange-600",
  ]

  return (
    <Link 
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex flex-col h-full p-8 overflow-hidden transition-all duration-500",
        "bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl",
        borderGradients[index % 4]
      )}
    >
      {/* Dynamic Background Gradient on Hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br",
        gradients[index % 4]
      )} />
      
      {/* Glassy overlay for depth */}
      <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-40 transition-opacity duration-500 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-6 flex items-start justify-between">
          <div className={cn(
            "p-4 rounded-2xl bg-gray-50 group-hover:bg-white/80 transition-colors duration-300 shadow-inner",
            iconColors[index % 4]
          )}>
            {item.icon}
          </div>
          
          {item.badge && (
            <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-black text-white rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">
          {item.title}
        </h3>
        
        <p className="text-gray-500 text-lg leading-relaxed mb-8 flex-grow group-hover:text-gray-800 transition-colors duration-300">
          {item.description}
        </p>

        {/* Action Button Area */}
        <div className="flex items-center text-sm font-bold tracking-wide uppercase">
          <span className={cn(
            "mr-3 transition-colors duration-300",
            iconColors[index % 4]
          )}>
            {item.title === "Get the Book" ? "Purchase Now" : "Explore"}
          </span>
          <div className={cn(
            "p-2 rounded-full bg-gray-100 group-hover:bg-white transition-all duration-300 transform group-hover:translate-x-2",
            iconColors[index % 4]
          )}>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
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
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} 
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[128px] -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Explore the Ecosystem</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            Everything you need to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              master AI development
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Deep dive into our comprehensive resources designed to take you from concept to production.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {itemsWithIcons.map((item, index) => (
            <PremiumCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Topic Deep Dive Section */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
          <div className="relative flex justify-center mb-16">
            <span className="bg-gray-50 px-8 text-gray-400 text-sm font-medium tracking-widest uppercase">
              Core Competencies
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topicsWithIcons.map((topic, index) => (
              <a 
                key={index}
                href={topic.href}
                className="group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-bl-[100px] -mr-8 -mt-8 transition-colors duration-300 group-hover:from-blue-50 group-hover:to-indigo-50" />
                
                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-gray-50 w-fit rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {topic.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-6 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {topic.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    View Articles <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})
