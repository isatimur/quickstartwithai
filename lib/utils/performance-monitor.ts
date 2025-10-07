// Advanced performance monitoring and optimization utilities
import { useEffect, useRef, useCallback } from 'react'

// Performance monitoring types
interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
  loadTime?: number // Page load time
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number
}

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

// Core Web Vitals monitoring
export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initWebVitals()
    this.initResourceTiming()
  }

  private initWebVitals() {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime
          this.reportMetric('FCP', fcpEntry.startTime)
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
      this.observers.push(fcpObserver as PerformanceObserver)

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime
        this.reportMetric('LCP', lastEntry.startTime)
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(lcpObserver as PerformanceObserver)

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          const fidEntry = entry as PerformanceEventTiming
          if (fidEntry.processingStart && fidEntry.startTime) {
            this.metrics.fid = fidEntry.processingStart - fidEntry.startTime
            this.reportMetric('FID', this.metrics.fid)
          }
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      this.observers.push(fidObserver as PerformanceObserver)

      // Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          const layoutShift = entry as LayoutShift
          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value
          }
        })
        this.metrics.cls = clsValue
        this.reportMetric('CLS', clsValue)
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver as PerformanceObserver)
    }
  }

  private initResourceTiming() {
    // Time to First Byte
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart
      this.reportMetric('TTFB', this.metrics.ttfb)
    }

    // Page load time
    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now()
      this.reportMetric('Load Time', this.metrics.loadTime)
    })
  }

  private reportMetric(name: string, value: number) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${name}: ${value.toFixed(2)}ms`)
    }
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(name, value)
    }
  }

  private sendToAnalytics(name: string, value: number) {
    // Implement your analytics service here
    // Example: Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_rating: this.getMetricRating(name, value)
      })
    }
  }

  private getMetricRating(name: string, value: number): string {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      'FCP': { good: 1800, needsImprovement: 3000 },
      'LCP': { good: 2500, needsImprovement: 4000 },
      'FID': { good: 100, needsImprovement: 300 },
      'CLS': { good: 0.1, needsImprovement: 0.25 },
      'TTFB': { good: 800, needsImprovement: 1800 }
    }

    const threshold = thresholds[name]
    if (!threshold) return 'unknown'

    if (value <= threshold.good) return 'good'
    if (value <= threshold.needsImprovement) return 'needs-improvement'
    return 'poor'
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  disconnect() {
    this.observers.forEach(observer => observer.disconnect())
  }
}

// React hook for performance monitoring
export function usePerformanceMonitor() {
  const monitorRef = useRef<PerformanceMonitor | null>(null)

  useEffect(() => {
    monitorRef.current = new PerformanceMonitor()
    
    return () => {
      monitorRef.current?.disconnect()
    }
  }, [])

  const getMetrics = useCallback(() => {
    return monitorRef.current?.getMetrics() || {}
  }, [])

  return { getMetrics }
}

// Image optimization utilities
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  height?: number,
  quality: number = 75,
  format: 'webp' | 'avif' | 'jpeg' | 'png' = 'webp'
): string {
  if (src.startsWith('http')) {
    return src
  }
  
  const params = new URLSearchParams()
  if (width) params.set('w', width.toString())
  if (height) params.set('h', height.toString())
  params.set('q', quality.toString())
  params.set('f', format)
  
  return `${src}?${params.toString()}`
}

// Preload critical resources
export function preloadCriticalResources() {
  const criticalResources = [
    { href: '/fonts/GeistVF.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
    { href: '/fonts/GeistMonoVF.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' }
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

// Bundle analysis utilities
export function analyzeBundleSize() {
  if (process.env.NODE_ENV === 'development') {
    const scripts = document.querySelectorAll('script[src]')
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    
    console.group('📦 Bundle Analysis')
    console.log(`Scripts: ${scripts.length}`)
    console.log(`Stylesheets: ${stylesheets.length}`)
    
    scripts.forEach(script => {
      const src = script.getAttribute('src')
      if (src) {
        console.log(`Script: ${src}`)
      }
    })
    
    stylesheets.forEach(link => {
      const href = link.getAttribute('href')
      if (href) {
        console.log(`Stylesheet: ${href}`)
      }
    })
    console.groupEnd()
  }
}

// Performance budget monitoring
export class PerformanceBudget {
  private budgets = {
    js: 250 * 1024, // 250KB
    css: 50 * 1024,  // 50KB
    images: 500 * 1024, // 500KB
    fonts: 100 * 1024   // 100KB
  }

  checkBudget() {
    if (process.env.NODE_ENV === 'development') {
      const resources = performance.getEntriesByType('resource')
      
      const totals = resources.reduce((acc, resource) => {
        const size = (resource as PerformanceResourceTiming).transferSize || 0
        const name = resource.name
        
        if (name.includes('.js')) acc.js += size
        else if (name.includes('.css')) acc.css += size
        else if (name.match(/\.(jpg|jpeg|png|gif|webp|avif)$/)) acc.images += size
        else if (name.match(/\.(woff|woff2|ttf|otf)$/)) acc.fonts += size
        
        return acc
      }, { js: 0, css: 0, images: 0, fonts: 0 })

      console.group('💰 Performance Budget')
      Object.entries(totals).forEach(([type, size]) => {
        const budget = this.budgets[type as keyof typeof this.budgets]
        const percentage = (size / budget) * 100
        const status = percentage > 100 ? '❌' : percentage > 80 ? '⚠️' : '✅'
        
        console.log(`${status} ${type.toUpperCase()}: ${(size / 1024).toFixed(1)}KB / ${(budget / 1024).toFixed(1)}KB (${percentage.toFixed(1)}%)`)
      })
      console.groupEnd()
    }
  }
}

// Memory usage monitoring
export function monitorMemoryUsage() {
  if ('memory' in performance && process.env.NODE_ENV === 'development') {
    const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
    if (memory) {
      console.group('🧠 Memory Usage')
      console.log(`Used: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`)
      console.log(`Total: ${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`)
      console.log(`Limit: ${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`)
      console.groupEnd()
    }
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    preloadCriticalResources()
    analyzeBundleSize()
    
    const budget = new PerformanceBudget()
    setTimeout(() => budget.checkBudget(), 2000)
    
    setTimeout(monitorMemoryUsage, 3000)
  }
}
