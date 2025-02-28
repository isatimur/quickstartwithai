'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, BookOpen } from 'lucide-react'
import Image from "next/image"

export function LatestNewsSection() {
  return (
    <section 
      aria-labelledby="latest-news-heading" 
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="latest-news-heading" 
            className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800 tracking-tight"
          >
            Latest Book News
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent updates about &quot;Generative AI with Local LLM&quot; book availability and translations
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Google Books Publication Card */}
          <Card className="overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-4px] bg-white rounded-xl border-0 shadow-md">
            <CardContent className="p-0">
              <div className="h-2 bg-blue-500 w-full" aria-hidden="true"></div>
              <div className="p-8 flex flex-col h-full">
                <article>
                  <header className="mb-6">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="inline-block bg-blue-100 text-blue-700 font-medium rounded-full px-3 py-1 text-xs uppercase tracking-wide">
                        New Release
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 tracking-tight flex items-center">
                      Available on Google Books
                      <svg className="w-5 h-5 text-blue-600 ml-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </h3>
                  </header>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Our book &quot;Generative AI with Local LLM&quot; is now available on Google Books, 
                    expanding access to AI enthusiasts and practitioners worldwide.
                  </p>
                </article>
                
                <footer className="flex items-center justify-between mt-auto pt-5">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-blue-600 mr-2" aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-600">Digital Edition</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    onClick={() => window.open("https://www.google.me/books/edition/Generative_AI_with_local_LLM/WDBDEQAAQBAJ?hl=en&gbpv=0", "_blank", "noopener,noreferrer")}
                    aria-label="View Generative AI with Local LLM on Google Books"
                  >
                    View on Google Books
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                </footer>
              </div>
            </CardContent>
          </Card>

          {/* International Edition Card */}
          <Card className="overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-4px] bg-white rounded-xl border-0 shadow-md">
            <CardContent className="p-0">
              <div className="h-2 bg-green-500 w-full" aria-hidden="true"></div>
              <div className="p-8 flex flex-col h-full">
                <article>
                  <header className="mb-6">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="inline-block bg-green-100 text-green-700 font-medium rounded-full px-3 py-1 text-xs uppercase tracking-wide">
                        Coming Soon
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-700 font-medium rounded-full px-3 py-1 text-xs uppercase tracking-wide">
                        Q4 2025
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 tracking-tight">
                      Going Global
                    </h3>
                  </header>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Our AI development book is expanding internationally with a new edition coming in late 2025 
                    through Bombora Publishers, a respected publishing house known for high-quality technical literature.
                  </p>
                </article>
                
                <footer className="flex items-center justify-between mt-auto pt-5">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-green-600 mr-2" aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-600">International Edition</span>
                  </div>
                  
                  <div className="flex items-center">
                    {/* Bombora Publishers Logo */}
                    <Image 
                      src="/images/bombora.png" 
                      alt="Bombora Publishers" 
                      width={120} 
                      height={40} 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </footer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 