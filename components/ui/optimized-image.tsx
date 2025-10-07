'use client'

import { memo, useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { getOptimizedImageUrl } from '@/lib/utils/performance-monitor'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  className?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
  onLoad?: () => void
  onError?: () => void
}

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  className = '',
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  style,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, isInView])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])

  // Generate optimized src
  const optimizedSrc = getOptimizedImageUrl(src, width, height, quality)

  if (hasError) {
    return (
      <div 
        ref={imgRef}
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    )
  }

  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={`bg-gray-100 animate-pulse ${className}`}
        style={{ width, height, ...style }}
      />
    )
  }

  return (
    <div ref={imgRef} className={`relative ${className}`} style={style}>
      <Image
        src={optimizedSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        fill={fill}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  )
})

// Preload critical images
export function preloadImage(src: string, width?: number, height?: number) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = getOptimizedImageUrl(src, width, height)
  document.head.appendChild(link)
}

// Image optimization hook
export function useImageOptimization() {
  const preloadImages = useCallback((images: Array<{ src: string; width?: number; height?: number }>) => {
    images.forEach(({ src, width, height }) => {
      preloadImage(src, width, height)
    })
  }, [])

  return { preloadImages }
}
