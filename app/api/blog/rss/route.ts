import { NextResponse } from 'next/server'
import { fetchGhostRss } from '@/lib/ghost/rss'

export async function GET() {
  try {
    const posts = await fetchGhostRss(6) // Get 6 latest posts
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching RSS:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
