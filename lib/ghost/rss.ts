import Parser from 'rss-parser'

export interface GhostPostItem {
  title: string
  link: string
  isoDate?: string
  description?: string
  author?: string
  categories?: string[]
}

const parser = new Parser()

export async function fetchGhostRss(limit = 5): Promise<GhostPostItem[]> {
  const feedUrl = process.env.NEXT_PUBLIC_GHOST_RSS_URL || 'https://blog.quickstartgenai.com/rss/'
  const feed = await parser.parseURL(feedUrl)
  const items = (feed.items || []).slice(0, limit).map(i => ({
    title: i.title || '',
    link: i.link || '#',
    isoDate: i.isoDate,
    description: i.contentSnippet || i.description || '',
    author: i.creator || 'Team Quickstart',
    categories: i.categories || [],
  }))
  return items
}



