import Link from 'next/link'
import { NavBar } from '@/components/NavBar'
import { Metadata } from 'next'
import { ArrowLeft, Home, BookOpen, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | Generative AI with Local LLM',
  description: 'The page you are looking for could not be found. Return to our homepage or explore our content.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
            
            <Link
              href="/buy"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Buy the Book
            </Link>
            
            <Link
              href="/faq"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              FAQ
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Popular Pages
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/buy"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Get the Book
                </h3>
                <p className="text-sm text-gray-600">
                  Complete guide to local LLM development
                </p>
              </Link>
              
              <Link
                href="/faq"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-sm text-gray-600">
                  Common questions about our book
                </p>
              </Link>
              
              <Link
                href="https://blog.quickstartgenai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Our Blog
                </h3>
                <p className="text-sm text-gray-600">
                  Latest AI development articles
                </p>
              </Link>
              
              <Link
                href="/privacy-policy"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Privacy Policy
                </h3>
                <p className="text-sm text-gray-600">
                  How we protect your data
                </p>
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Looking for something specific?
            </h3>
            <p className="text-blue-700 mb-4">
              Try searching our FAQ or visit our blog for the latest content.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Search FAQ
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
