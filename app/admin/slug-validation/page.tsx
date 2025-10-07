'use client'

import { useState, useEffect } from 'react'

interface SlugValidationResult {
  filesystemSlugs: string[]
  ghostSlugs: string[]
  missingInGhost: string[]
  missingInFilesystem: string[]
  conflicts: string[]
}

export default function SlugValidationPage() {
  const [result, setResult] = useState<SlugValidationResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateSlugs = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/admin/slug-validation')
      if (!response.ok) throw new Error('Failed to validate slugs')
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    validateSlugs()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Slug Validation</h1>
      
      <button
        onClick={validateSlugs}
        disabled={loading}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Validating...' : 'Refresh Validation'}
      </button>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {result && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded">
              <h2 className="text-xl font-semibold mb-2">Filesystem Slugs ({result.filesystemSlugs.length})</h2>
              <ul className="space-y-1">
                {result.filesystemSlugs.map(slug => (
                  <li key={slug} className="text-sm font-mono bg-white p-2 rounded">
                    {slug}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded">
              <h2 className="text-xl font-semibold mb-2">Ghost Slugs ({result.ghostSlugs.length})</h2>
              <ul className="space-y-1">
                {result.ghostSlugs.map(slug => (
                  <li key={slug} className="text-sm font-mono bg-white p-2 rounded">
                    {slug}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {result.missingInGhost.length > 0 && (
            <div className="p-4 bg-yellow-50 border border-yellow-400 rounded">
              <h2 className="text-xl font-semibold mb-2 text-yellow-800">
                Missing in Ghost ({result.missingInGhost.length})
              </h2>
              <p className="text-yellow-700 mb-2">
                These slugs exist in filesystem but not in Ghost. They will cause 404s when redirected.
              </p>
              <ul className="space-y-1">
                {result.missingInGhost.map(slug => (
                  <li key={slug} className="text-sm font-mono bg-white p-2 rounded">
                    {slug}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.missingInFilesystem.length > 0 && (
            <div className="p-4 bg-orange-50 border border-orange-400 rounded">
              <h2 className="text-xl font-semibold mb-2 text-orange-800">
                Missing in Filesystem ({result.missingInFilesystem.length})
              </h2>
              <p className="text-orange-700 mb-2">
                These slugs exist in Ghost but not in filesystem. Consider adding them.
              </p>
              <ul className="space-y-1">
                {result.missingInFilesystem.map(slug => (
                  <li key={slug} className="text-sm font-mono bg-white p-2 rounded">
                    {slug}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.missingInGhost.length === 0 && result.missingInFilesystem.length === 0 && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              ✅ All slugs are consistent between filesystem and Ghost!
            </div>
          )}
        </div>
      )}
    </div>
  )
}
