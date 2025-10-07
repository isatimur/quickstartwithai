import dynamic from 'next/dynamic'
import generateStructuredData from './structured-data'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SuspenseWrapper, LoadingFallback } from '@/components/LoadingFallback'

// Lazy load components for better performance
const CrossLinkingBlocks = dynamic(() => import('@/components/CrossLinkingBlocks'), {
  loading: () => <LoadingFallback message="Loading navigation..." />
})

const BlogCrossLinking = dynamic(() => import('@/components/BlogCrossLinking'), {
  loading: () => <LoadingFallback message="Loading blog posts..." />
})

const FooterCrossLinking = dynamic(() => import('@/components/FooterCrossLinking'), {
  loading: () => <LoadingFallback message="Loading footer..." />
})

const EnhancedLandingPageComponent = dynamic(
  () => import('@/components/enhanced-landing-page').then(mod => mod.EnhancedLandingPageComponent),
  { 
    ssr: false,
    loading: () => <LoadingFallback message="Loading landing page..." />
  }
)

export default function Page() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Quickstart GenAI",
          "url": "https://quickstartgenai.com",
          "logo": "https://quickstartgenai.com/favicon-32x32.png",
          "sameAs": [
            "https://blog.quickstartgenai.com"
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Generative AI with Local LLM",
          "url": "https://quickstartgenai.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://quickstartgenai.com/faq?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }) }}
      />

      {/* Main Landing Page (without footer) */}
      <ErrorBoundary>
        <SuspenseWrapper>
          <EnhancedLandingPageComponent showFooter={false} />
        </SuspenseWrapper>
      </ErrorBoundary>
      
      {/* Cross-linking Navigation */}
      <ErrorBoundary>
        <SuspenseWrapper>
          <CrossLinkingBlocks />
        </SuspenseWrapper>
      </ErrorBoundary>
      
      {/* Blog Content */}
      <ErrorBoundary>
        <SuspenseWrapper>
          <BlogCrossLinking />
        </SuspenseWrapper>
      </ErrorBoundary>
      
      {/* Single Enhanced Footer */}
      <ErrorBoundary>
        <SuspenseWrapper>
          <FooterCrossLinking />
        </SuspenseWrapper>
      </ErrorBoundary>
    </>
  )
}