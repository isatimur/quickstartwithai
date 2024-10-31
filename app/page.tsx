import dynamic from 'next/dynamic'
import generateStructuredData from './structured-data'

const EnhancedLandingPageComponent = dynamic(
  () => import('@/components/enhanced-landing-page').then(mod => mod.EnhancedLandingPageComponent),
  { ssr: false }
)

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <EnhancedLandingPageComponent />
    </>
  )
}