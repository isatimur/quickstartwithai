import { fetchGhostRss } from '@/lib/ghost/rss'
import { getAllPostsMeta } from '@/lib/content/posts'

export interface SlugValidationResult {
  filesystemSlugs: string[]
  ghostSlugs: string[]
  missingInGhost: string[]
  missingInFilesystem: string[]
  conflicts: string[]
}

export async function validateSlugConsistency(): Promise<SlugValidationResult> {
  try {
    // Get filesystem slugs
    const filesystemPosts = getAllPostsMeta()
    const filesystemSlugs = filesystemPosts.map(p => p.slug.current)
    
    // Get Ghost slugs from RSS
    const ghostPosts = await fetchGhostRss(50) // Get more posts to check
    const ghostSlugs = ghostPosts.map(post => {
      // Extract slug from Ghost URL (e.g., "https://blog.quickstartgenai.com/some-slug" -> "some-slug")
      const url = new URL(post.link)
      return url.pathname.replace(/^\//, '').replace(/\/$/, '') || 'index'
    })
    
    // Find discrepancies
    const missingInGhost = filesystemSlugs.filter(slug => !ghostSlugs.includes(slug))
    const missingInFilesystem = ghostSlugs.filter(slug => !filesystemSlugs.includes(slug))
    
    // Conflicts would be same slug but different content (harder to detect without content comparison)
    const conflicts: string[] = []
    
    return {
      filesystemSlugs,
      ghostSlugs,
      missingInGhost,
      missingInFilesystem,
      conflicts
    }
  } catch (error) {
    console.error('Error validating slug consistency:', error)
    return {
      filesystemSlugs: [],
      ghostSlugs: [],
      missingInGhost: [],
      missingInFilesystem: [],
      conflicts: []
    }
  }
}

// Utility to check if a specific slug exists in Ghost
export async function checkSlugInGhost(slug: string): Promise<boolean> {
  try {
    const ghostPosts = await fetchGhostRss(50)
    const ghostSlugs = ghostPosts.map(post => {
      const url = new URL(post.link)
      return url.pathname.replace(/^\//, '').replace(/\/$/, '') || 'index'
    })
    return ghostSlugs.includes(slug)
  } catch (error) {
    console.error('Error checking slug in Ghost:', error)
    return false
  }
}
