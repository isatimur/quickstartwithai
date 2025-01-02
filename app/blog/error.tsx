'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="max-w-md text-center">
                <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
                <p className="mb-8 text-gray-600">
                    We apologize for the inconvenience. Please try again later.
                </p>
                <Button onClick={reset} variant="outline">
                    Try again
                </Button>
            </div>
        </div>
    )
} 