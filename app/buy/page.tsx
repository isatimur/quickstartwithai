import { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Buy Generative AI with Local LLM - Available on Leanpub & Google Books',
  description: 'Purchase the complete guide to local LLM development. Available on Leanpub ($19) and Google Books (free). Learn RAG, AI agents, and production architectures.',
  keywords: [
    'buy AI book',
    'purchase local LLM guide',
    'generative AI book',
    'machine learning book',
    'AI development guide',
    'Leanpub book',
    'Google Books',
    'local LLM tutorial',
    'RAG implementation guide',
    'AI agents book'
  ],
  openGraph: {
    title: 'Buy Generative AI with Local LLM - Complete Development Guide',
    description: 'Purchase the comprehensive guide to local LLM development. Available on Leanpub and Google Books.',
    type: 'website',
    url: 'https://quickstartgenai.com/buy',
    images: [{
      url: '/book-cover.webp',
      width: 1200,
      height: 630,
      alt: 'Generative AI with Local LLM - Book Cover'
    }]
  },
  alternates: {
    canonical: 'https://quickstartgenai.com/buy'
  }
}

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Copy of
              <span className="block text-blue-600">Generative AI with Local LLM</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master local LLM development with our comprehensive guide. Learn RAG implementation, 
              AI agents, and production-ready architectures without cloud dependencies.
            </p>
          </div>

          {/* Book Cover */}
          <div className="flex justify-center mb-12">
            <Image 
              src="/book-cover.webp" 
              alt="Generative AI with Local LLM Book Cover"
              width={256}
              height={320}
              className="shadow-2xl rounded-lg"
              priority
            />
          </div>

          {/* Purchase Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Leanpub */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Leanpub Edition</h2>
                <div className="text-4xl font-bold text-blue-600 mb-2">$19</div>
                <p className="text-gray-600 mb-6">Digital Edition</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Complete PDF + EPUB formats
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Lifetime updates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Source code examples
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Community access
                  </li>
                </ul>

                <a 
                  href="https://leanpub.com/quickstartwithai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Buy on Leanpub
                </a>
              </div>
            </div>

            {/* Google Books */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Google Books</h2>
                <div className="text-4xl font-bold text-green-600 mb-2">Free</div>
                <p className="text-gray-600 mb-6">Online Reading</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Read online for free
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Mobile-friendly reading
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Search within book
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Bookmark and notes
                  </li>
                </ul>

                <a 
                  href="https://www.google.me/books/edition/Generative_AI_with_local_LLM/WDBDEQAAQBAJ?hl=en&gbpv=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center"
                >
                  Read on Google Books
                </a>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Core Topics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Local LLM setup and configuration</li>
                  <li>• RAG (Retrieval-Augmented Generation) implementation</li>
                  <li>• AI agents development</li>
                  <li>• Production-ready architectures</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Technologies Covered</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Python and LangChain</li>
                  <li>• llama.cpp and Ollama</li>
                  <li>• Vector databases</li>
                  <li>• Docker and deployment</li>
                  <li>• Real-world case studies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Authors */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Authors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Shamim Bhuiyan</h3>
                <p className="text-gray-600">AI Development Expert with extensive experience in local LLM implementations and production systems.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Timur Isachenko</h3>
                <p className="text-gray-600">Software Architecture Expert specializing in scalable AI applications and enterprise solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
