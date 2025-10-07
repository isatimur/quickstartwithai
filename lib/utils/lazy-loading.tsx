'use client'

import { memo, Suspense, lazy, ComponentType, useState, useEffect, useRef } from 'react'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

interface LazyComponentProps {
  fallback?: React.ReactNode
  delay?: number
}

// Advanced lazy loading with intersection observer
export function createLazyComponent(
  importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>,
  options: LazyComponentProps = {}
) {
  const LazyComponent = lazy(importFunc)
  
  return memo(function LazyWrapper(props: Record<string, unknown>) {
    const { fallback } = options
    
    const DefaultFallback = (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
      </div>
    )
    
    return (
      <Suspense fallback={fallback || DefaultFallback}>
        <LazyComponent {...props} />
      </Suspense>
    )
  })
}

// Intersection Observer hook for lazy loading
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [elementRef, options, hasIntersected])

  return { isIntersecting, hasIntersected }
}

// Lazy image component with progressive loading
export const LazyImage = memo(function LazyImage({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  ...props
}: {
  src: string
  alt: string
  className?: string
  placeholder?: string
  [key: string]: unknown
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const { hasIntersected } = useIntersectionObserver(imgRef, {
    threshold: 0.1,
    rootMargin: '100px',
  })

  useEffect(() => {
    if (hasIntersected) {
      setIsInView(true)
    }
  }, [hasIntersected])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <Image
          src={placeholder}
          alt=""
          fill
          className="object-cover blur-sm"
          aria-hidden="true"
        />
      )}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          fill
          onLoad={handleLoad}
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  )
})

// Lazy section component
export const LazySection = memo(function LazySection({
  children,
  className = '',
  fallback,
  threshold = 0.1,
}: {
  children: React.ReactNode
  className?: string
  fallback?: React.ReactNode
  threshold?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const { hasIntersected } = useIntersectionObserver(sectionRef, {
    threshold,
    rootMargin: '50px',
  })

  useEffect(() => {
    if (hasIntersected) {
      setIsVisible(true)
    }
  }, [hasIntersected])

  return (
    <section ref={sectionRef} className={className}>
      {isVisible ? children : (fallback || <div className="h-32" />)}
    </section>
  )
})

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return

  // Preload critical fonts
  const criticalFonts = [
    '/fonts/GeistVF.woff',
    '/fonts/GeistMonoVF.woff',
  ]

  criticalFonts.forEach(font => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = font
    link.as = 'font'
    link.type = 'font/woff'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  })

  // Preload critical images
  const criticalImages = [
    '/book-cover.webp',
    '/timur_isachenko.webp',
  ]

  criticalImages.forEach(image => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = image
    link.as = 'image'
    document.head.appendChild(link)
  })
}

// Resource hints for external domains
export function addResourceHints() {
  if (typeof window === 'undefined') return

  const domains = [
    'https://blog.quickstartgenai.com',
    'https://leanpub.com',
    'https://fonts.googleapis.com',
  ]

  domains.forEach(domain => {
    const link = document.createElement('link')
    link.rel = 'dns-prefetch'
    link.href = domain
    document.head.appendChild(link)
  })
}
