'use client'

import { Suspense } from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingFallbackProps {
  message?: string
}

export function LoadingFallback({ message = "Loading..." }: LoadingFallbackProps) {
  return (
    <div className="min-h-[200px] flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-8">
      <div className="text-center">
        <Loader2 className="h-8 w-8 text-blue-500 mx-auto mb-4 animate-spin" />
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  )
}

interface SuspenseWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function SuspenseWrapper({ children, fallback }: SuspenseWrapperProps) {
  return (
    <Suspense fallback={fallback || <LoadingFallback />}>
      {children}
    </Suspense>
  )
}
