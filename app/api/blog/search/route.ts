import { NextResponse } from 'next/server'
import { getPaginatedPosts } from '@/lib/content/posts'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('q') || ''
  const page = Number(searchParams.get('page') || '1')
  const pageSize = Number(searchParams.get('pageSize') || '6')

  const { posts, total } = getPaginatedPosts(search, page, pageSize)
  return NextResponse.json({ posts, total })
}


