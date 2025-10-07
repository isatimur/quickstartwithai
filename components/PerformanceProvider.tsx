'use client'

import { useEffect, memo, ReactNode } from 'react'
import { initPerformanceMonitoring, usePerformanceMonitor } from '@/lib/utils/performance-monitor'

interface PerformanceProviderProps {
  children: ReactNode
}

export const PerformanceProvider = memo(function PerformanceProvider({ children }: PerformanceProviderProps) {
  const { getMetrics } = usePerformanceMonitor()

  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring()

    // Register service worker
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('✅ Service Worker registered:', registration.scope)
        })
        .catch(error => {
          console.error('❌ Service Worker registration failed:', error)
        })
    }

    // Preload critical resources
    preloadCriticalResources()

    // Monitor performance metrics
    const interval = setInterval(() => {
      const metrics = getMetrics()
      if (Object.keys(metrics).length > 0) {
        console.log('📊 Current Performance Metrics:', metrics)
      }
    }, 10000) // Check every 10 seconds

    return () => {
      clearInterval(interval)
    }
  }, [getMetrics])

  return <>{children}</>
})

// Preload critical resources
function preloadCriticalResources() {
  const criticalResources = [
    { href: '/fonts/GeistVF.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
    { href: '/fonts/GeistMonoVF.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
    { href: '/android-chrome-192x192.png', as: 'image' },
    { href: '/android-chrome-512x512.png', as: 'image' }
  ]

  criticalResources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource.href
    link.as = resource.as
    if (resource.type) link.type = resource.type
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin
    document.head.appendChild(link)
  })
}

// Performance optimization hook
export function usePerformanceOptimization() {
  useEffect(() => {
    // Optimize scroll performance
    let ticking = false
    
    function updateScrollPosition() {
      // Throttled scroll handling
      ticking = false
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition)
        ticking = true
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true })
    
    // Optimize resize performance
    let resizeTimeout: NodeJS.Timeout
    function handleResize() {
      // Debounced resize handling
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        // Handle resize
      }, 250)
    }
    
    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', requestTick)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])
}

// Bundle analyzer component (development only)
export function BundleAnalyzer() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Analyze bundle size
      const scripts = document.querySelectorAll('script[src]')
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
      
      console.group('📦 Bundle Analysis')
      console.log(`Scripts: ${scripts.length}`)
      console.log(`Stylesheets: ${stylesheets.length}`)
      
      let totalScriptSize = 0
      let totalStyleSize = 0
      
      scripts.forEach(script => {
        const src = script.getAttribute('src')
        if (src) {
          console.log(`Script: ${src}`)
          // Estimate size based on URL patterns
          if (src.includes('_next/static')) {
            totalScriptSize += 100000 // Estimate 100KB per script
          }
        }
      })
      
      stylesheets.forEach(link => {
        const href = link.getAttribute('href')
        if (href) {
          console.log(`Stylesheet: ${href}`)
          totalStyleSize += 50000 // Estimate 50KB per stylesheet
        }
      })
      
      console.log(`Estimated Total Script Size: ${(totalScriptSize / 1024).toFixed(1)}KB`)
      console.log(`Estimated Total Style Size: ${(totalStyleSize / 1024).toFixed(1)}KB`)
      console.groupEnd()
    }
  }, [])

  return null
}
