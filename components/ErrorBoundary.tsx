'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error('Error:', error)
    }, [error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="max-w-md text-center">
                <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
                <p className="mb-8 text-gray-600">
                    We apologize for the inconvenience. Please try again later.
                </p>
                <button
                    onClick={reset}
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                    Try again
                </button>
            </div>
        </div>
    )
} 