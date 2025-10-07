// Application constants
export const APP_CONFIG = {
  name: 'Quickstart GenAI',
  description: 'Generative AI with Local LLM - Complete Development Guide',
  url: 'https://quickstartgenai.com',
  blogUrl: 'https://blog.quickstartgenai.com',
  authors: [
    { name: 'Shamim Bhuiyan', linkedin: 'https://linkedin.com/in/shamim-bhuiyan' },
    { name: 'Timur Isachenko', linkedin: 'https://linkedin.com/in/timur-isachenko' }
  ],
  social: {
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  book: {
    title: 'Generative AI with Local LLM',
    subtitle: 'Complete Development Guide',
    leanpubUrl: 'https://leanpub.com/quickstartwithai',
    googleBooksUrl: 'https://www.google.me/books/edition/Generative_AI_with_local_LLM/WDBDEQAAQBAJ?hl=en&gbpv=0',
    isbn: '978-1-234567-89-0',
    pages: '300',
    publishedDate: '2024-12-01'
  }
} as const

export const SEO_CONFIG = {
  defaultTitle: 'Generative AI with Local LLM - Complete Development Guide',
  titleTemplate: '%s | Generative AI with Local LLM',
  defaultDescription: 'Master local LLM development with our comprehensive guide. Learn RAG implementation, AI agents, and production-ready architectures. Available on Leanpub and Google Books.',
  keywords: [
    'local LLM development',
    'AI application development', 
    'RAG implementation',
    'AI agents tutorial',
    'generative AI guide',
    'LLM inference',
    'practical AI development',
    'machine learning for developers',
    'local AI deployment',
    'AI without cloud',
    'Python AI development',
    'LangChain tutorial',
    'llama.cpp guide',
    'AI application architecture',
    'enterprise AI development',
    'AI book',
    'machine learning book',
    'artificial intelligence guide',
    'local language models',
    'offline AI development'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Generative AI with Local LLM',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Generative AI with Local LLM - Book Cover'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative AI - Local LLM Development Guide',
    description: 'Master Generative AI development with local LLM inference. A practical guide for developers.',
    images: ['/og-image.jpg']
  }
} as const

export const PERFORMANCE_CONFIG = {
  lazyLoadThreshold: 100, // pixels from viewport
  debounceDelay: 300, // ms
  throttleDelay: 100, // ms
  imageQuality: 75,
  maxImageWidth: 1200
} as const
