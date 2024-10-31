import dynamic from 'next/dynamic'

const EnhancedLandingPageComponent = dynamic(
  () => import('@/components/enhanced-landing-page').then(mod => mod.EnhancedLandingPageComponent),
  { ssr: false }
)

export default function Page() {
  return <EnhancedLandingPageComponent />
}