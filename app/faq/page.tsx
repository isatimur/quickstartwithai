import { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'FAQ - Generative AI with Local LLM Book Questions',
  description: 'Frequently asked questions about our Generative AI with Local LLM book. Learn about content, pricing, formats, and how to get started with local LLM development.',
  keywords: [
    'AI book FAQ',
    'local LLM questions',
    'generative AI book help',
    'machine learning book FAQ',
    'AI development guide questions',
    'RAG implementation FAQ',
    'AI agents tutorial questions'
  ],
  openGraph: {
    title: 'FAQ - Generative AI with Local LLM',
    description: 'Get answers to common questions about our comprehensive local LLM development guide.',
    type: 'website',
    url: 'https://quickstartgenai.com/faq'
  },
  alternates: {
    canonical: 'https://quickstartgenai.com/faq'
  }
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is this book about?",
      answer: "Generative AI with Local LLM is a comprehensive guide that teaches you how to build AI applications using local language models without relying on cloud services. It covers RAG implementation, AI agents development, and production-ready architectures."
    },
    {
      question: "Who is this book for?",
      answer: "This book is designed for software developers, AI engineers, and technical professionals who want to learn practical AI development with local LLMs. It's suitable for both beginners and experienced developers looking to expand their AI skills."
    },
    {
      question: "What technologies are covered?",
      answer: "The book covers Python, LangChain, llama.cpp, Ollama, vector databases, Docker, and various AI frameworks. It includes real-world examples and production-ready code implementations."
    },
    {
      question: "Where can I buy the book?",
      answer: "You can purchase the book on Leanpub for $19 (PDF + EPUB formats with lifetime updates) or read it for free on Google Books. Both options provide access to the complete content."
    },
    {
      question: "Do I need prior AI experience?",
      answer: "While some programming experience is helpful, the book is designed to be accessible to developers new to AI. It provides step-by-step instructions and explains concepts clearly with practical examples."
    },
    {
      question: "What makes this book different?",
      answer: "This book focuses specifically on local LLM development, avoiding cloud dependencies. It provides practical, production-ready implementations and real-world case studies that you can immediately apply to your projects."
    },
    {
      question: "Are there code examples included?",
      answer: "Yes, the book includes extensive code examples, complete implementations, and downloadable source code. All examples are tested and production-ready."
    },
    {
      question: "Will the book be updated?",
      answer: "Yes, Leanpub purchasers receive lifetime updates as the AI landscape evolves. We regularly update content to reflect the latest developments in local LLM technology."
    },
    {
      question: "Can I use this for commercial projects?",
      answer: "Absolutely! The book teaches you to build production-ready applications that you can use in commercial projects. All code examples are provided with appropriate licenses for commercial use."
    },
    {
      question: "How long does it take to complete?",
      answer: "The book contains approximately 300 pages of content. Depending on your pace and experience level, you can expect to spend 2-4 weeks working through the material and implementing the examples."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our Generative AI with Local LLM book
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Contact us at contact@quickstartgenai.com or visit our blog for more resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@quickstartgenai.com"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="https://blog.quickstartgenai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Visit Our Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}