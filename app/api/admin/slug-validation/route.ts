import { NextResponse } from 'next/server'
import { validateSlugConsistency } from '@/lib/validation/slug-checker'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const result = await validateSlugConsistency()
    return NextResponse.json(result)
  } catch {
    return NextResponse.json(
      { error: 'Failed to validate slug consistency' },
      { status: 500 }
    )
  }
}
