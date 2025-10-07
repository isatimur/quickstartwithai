'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { NavBar } from '@/components/NavBar'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
          <NavBar />
          
          <main className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              {/* Error Illustration */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-4">
                  <AlertTriangle className="h-12 w-12 text-red-600" />
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded"></div>
              </div>

              {/* Error Message */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Something went wrong
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mb-8 p-4 bg-gray-100 rounded-lg text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Error Details:</h3>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {error.message}
                  </pre>
                  {error.digest && (
                    <p className="text-xs text-gray-500 mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={reset}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Try Again
                </button>
                
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </div>

              {/* Help Section */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Need Help?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/faq"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      Check FAQ
                    </h3>
                    <p className="text-sm text-gray-600">
                      Find answers to common questions
                    </p>
                  </Link>
                  
                  <Link
                    href="mailto:contact@quickstartgenai.com"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      Contact Support
                    </h3>
                    <p className="text-sm text-gray-600">
                      Get help from our support team
                    </p>
                  </Link>
                </div>
              </div>

              {/* Status Information */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  System Status
                </h3>
                <p className="text-blue-700 mb-4">
                  If this error persists, please check our status page or contact support.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-blue-600">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Website: Operational
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Blog: Operational
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
