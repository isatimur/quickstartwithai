// Performance utilities for monitoring and optimization
export function measurePerformance<T extends (...args: unknown[]) => unknown>(
  fn: T,
  name: string
): T {
  return ((...args: Parameters<T>) => {
    const start = performance.now()
    const result = fn(...args)
    const end = performance.now()
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`⏱️ ${name}: ${(end - start).toFixed(2)}ms`)
    }
    
    return result
  }) as T
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Image optimization utilities
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  height?: number,
  quality: number = 75
): string {
  if (src.startsWith('http')) {
    return src
  }
  
  const params = new URLSearchParams()
  if (width) params.set('w', width.toString())
  if (height) params.set('h', height.toString())
  params.set('q', quality.toString())
  
  return `${src}?${params.toString()}`
}

// SEO utilities
export function generateMetaDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text
  
  const truncated = text.substring(0, maxLength - 3)
  const lastSpace = truncated.lastIndexOf(' ')
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...'
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
