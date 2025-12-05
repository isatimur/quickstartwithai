'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Sparkles, Newspaper, Rocket, ArrowRight, Bell } from 'lucide-react'
import Image from "next/image"

export function LatestNewsSection() {
  return (
    <section 
      aria-labelledby="latest-news-heading" 
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>What&apos;s New</span>
          </div>
          <h2 
            id="latest-news-heading" 
            className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 tracking-tight"
          >
            News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exciting milestones, new platforms, and upcoming projects from the authors
          </p>
        </header>

        {/* Featured Announcement - Bombora Publication */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-200/50 shadow-xl">
            <CardContent className="p-0">
              <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 w-full"></div>
              <div className="p-8 sm:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                      <Image 
                        src="/images/bombora.png" 
                        alt="Bombora Publishers" 
                        width={180} 
                        height={60} 
                        className="relative h-14 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 bg-amber-500 text-white font-bold rounded-full px-4 py-1.5 text-sm uppercase tracking-wide shadow-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        Now Available
                      </span>
                      <span className="inline-block bg-white/80 text-amber-700 font-medium rounded-full px-3 py-1 text-xs uppercase tracking-wide border border-amber-200">
                        Major Milestone
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
                      Published by Bombora Publishers! 🎉
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We&apos;re thrilled to announce that our book is now officially published by <strong>Bombora Publishers</strong> — 
                      one of the most respected technical publishing houses. This marks a huge milestone in making 
                      practical AI knowledge accessible to developers worldwide.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg"
                      onClick={() => window.open("https://leanpub.com/quickstartwithai", "_blank", "noopener,noreferrer")}
                    >
                      Get Your Copy <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Two Column Grid for Other News */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* New Blog Platform Card */}
          <Card className="overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-4px] bg-white rounded-xl border-0 shadow-md group">
            <CardContent className="p-0">
              <div className="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 w-full"></div>
              <div className="p-6 flex flex-col h-full">
                <article className="flex-1">
                  <header className="mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Newspaper className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="inline-block bg-purple-100 text-purple-700 font-medium rounded-full px-3 py-1 text-xs uppercase tracking-wide mb-3">
                      New Platform
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      Blog Has Moved!
                    </h3>
                  </header>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We&apos;ve upgraded to a new CMS! Visit <strong>blog.quickstartgenai.com</strong> for the latest articles, tutorials, and book updates.
                  </p>
                </article>
                <footer className="pt-4 mt-auto">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-between text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    onClick={() => window.open("https://blog.quickstartgenai.com", "_blank", "noopener,noreferrer")}
                  >
                    <span className="flex items-center gap-1.5">
                      <Bell className="h-3.5 w-3.5" /> Subscribe Now
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </footer>
              </div>
            </CardContent>
          </Card>

          {/* Next Project Card */}
          <Card className="overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-4px] bg-white rounded-xl border-0 shadow-md group">
            <CardContent className="p-0">
              <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 w-full"></div>
              <div className="p-6 flex flex-col h-full">
                <article className="flex-1">
                  <header className="mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Rocket className="h-6 w-6 text-emerald-600" />
                    </div>
                    <span className="inline-block bg-emerald-100 text-emerald-700 font-medium rounded-full px-3 py-1 text-xs uppercase tracking-wide mb-3">
                      Coming Soon
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      What&apos;s Next?
                    </h3>
                  </header>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We&apos;re working on something new! Check out <strong>beyond9to6.com</strong> — our upcoming project for developers ready to level up.
                  </p>
                </article>
                <footer className="pt-4 mt-auto">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-between text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                    onClick={() => window.open("https://beyond9to6.com", "_blank", "noopener,noreferrer")}
                  >
                    Explore Project
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </footer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscribe CTA Banner */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Stay Updated with Our Journey
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Subscribe to our blog for new articles on AI development, book updates, and early access to our upcoming projects.
              </p>
              <Button 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8"
                onClick={() => window.open("https://blog.quickstartgenai.com", "_blank", "noopener,noreferrer")}
              >
                <Bell className="mr-2 h-5 w-5" />
                Subscribe to Blog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 