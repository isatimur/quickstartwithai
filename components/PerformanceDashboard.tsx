'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number
}

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  loadTime?: number
}

interface PerformanceScore {
  score: number
  label: string
  color: string
}

export function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return

    setIsVisible(true)

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming
          if (fidEntry.processingStart && fidEntry.startTime) {
            setMetrics(prev => ({ 
              ...prev, 
              fid: fidEntry.processingStart - fidEntry.startTime 
            }))
          }
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as LayoutShift
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev, 
              cls: (prev.cls || 0) + clsEntry.value 
            }))
          }
        }
      })
    })

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now()
      setMetrics(prev => ({ ...prev, loadTime }))
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const getScore = (metric: keyof PerformanceMetrics, value?: number): PerformanceScore => {
    if (!value) return { score: 0, label: 'No data', color: 'bg-gray-500' }

    switch (metric) {
      case 'fcp':
        if (value <= 1800) return { score: 100, label: 'Excellent', color: 'bg-green-500' }
        if (value <= 3000) return { score: 75, label: 'Good', color: 'bg-yellow-500' }
        return { score: 25, label: 'Needs Improvement', color: 'bg-red-500' }
      
      case 'lcp':
        if (value <= 2500) return { score: 100, label: 'Excellent', color: 'bg-green-500' }
        if (value <= 4000) return { score: 75, label: 'Good', color: 'bg-yellow-500' }
        return { score: 25, label: 'Needs Improvement', color: 'bg-red-500' }
      
      case 'fid':
        if (value <= 100) return { score: 100, label: 'Excellent', color: 'bg-green-500' }
        if (value <= 300) return { score: 75, label: 'Good', color: 'bg-yellow-500' }
        return { score: 25, label: 'Needs Improvement', color: 'bg-red-500' }
      
      case 'cls':
        if (value <= 0.1) return { score: 100, label: 'Excellent', color: 'bg-green-500' }
        if (value <= 0.25) return { score: 75, label: 'Good', color: 'bg-yellow-500' }
        return { score: 25, label: 'Needs Improvement', color: 'bg-red-500' }
      
      case 'ttfb':
        if (value <= 800) return { score: 100, label: 'Excellent', color: 'bg-green-500' }
        if (value <= 1800) return { score: 75, label: 'Good', color: 'bg-yellow-500' }
        return { score: 25, label: 'Needs Improvement', color: 'bg-red-500' }
      
      case 'loadTime':
        if (value <= 2000) return { score: 100, label: 'Excellent', color: 'bg-green-500' }
        if (value <= 4000) return { score: 75, label: 'Good', color: 'bg-yellow-500' }
        return { score: 25, label: 'Needs Improvement', color: 'bg-red-500' }
      
      default:
        return { score: 0, label: 'Unknown', color: 'bg-gray-500' }
    }
  }

  const formatValue = (metric: keyof PerformanceMetrics, value?: number): string => {
    if (!value) return 'N/A'
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'ttfb':
      case 'loadTime':
        return `${value.toFixed(0)}ms`
      case 'fid':
        return `${value.toFixed(0)}ms`
      case 'cls':
        return value.toFixed(3)
      default:
        return value.toString()
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="bg-white/95 backdrop-blur-sm border shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-900">
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Object.entries(metrics).map(([key, value]) => {
            const score = getScore(key as keyof PerformanceMetrics, value)
            return (
              <div key={key} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700 uppercase">
                    {key}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">
                      {formatValue(key as keyof PerformanceMetrics, value)}
                    </span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs px-2 py-0.5 ${score.color} text-white`}
                    >
                      {score.label}
                    </Badge>
                  </div>
                </div>
                <Progress 
                  value={score.score} 
                  className="h-1.5"
                />
              </div>
            )
          })}
          
          {Object.keys(metrics).length === 0 && (
            <div className="text-center text-xs text-gray-500 py-4">
              Collecting performance data...
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Performance optimization suggestions
export function PerformanceSuggestions() {
  const suggestions = [
    {
      category: 'Images',
      items: [
        'Use WebP/AVIF formats for better compression',
        'Implement lazy loading for below-the-fold images',
        'Optimize image sizes for different screen densities',
      ]
    },
    {
      category: 'JavaScript',
      items: [
        'Enable code splitting and dynamic imports',
        'Remove unused dependencies',
        'Minify and compress JavaScript bundles',
      ]
    },
    {
      category: 'Caching',
      items: [
        'Implement service worker for offline caching',
        'Set appropriate cache headers',
        'Use CDN for static assets',
      ]
    },
    {
      category: 'Core Web Vitals',
      items: [
        'Optimize Largest Contentful Paint (LCP)',
        'Minimize Cumulative Layout Shift (CLS)',
        'Reduce First Input Delay (FID)',
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Performance Optimization Suggestions</h3>
      {suggestions.map((section) => (
        <div key={section.category} className="space-y-2">
          <h4 className="font-medium text-gray-800">{section.category}</h4>
          <ul className="space-y-1">
            {section.items.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
