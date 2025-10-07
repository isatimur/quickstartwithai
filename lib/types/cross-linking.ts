// Types and interfaces for cross-linking components
export interface CrossLinkItem {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  variant: 'default' | 'secondary' | 'outline'
  external?: boolean
  badge?: string
}

export interface BlogPost {
  title: string
  url: string
  date: string
  excerpt: string
  author?: string
  readTime?: string
  featured?: boolean
}

export interface TopicItem {
  title: string
  description: string
  color: 'blue' | 'green' | 'purple' | 'orange'
  icon: React.ReactNode
  href: string
}

export interface FooterLink {
  name: string
  href: string
  external?: boolean
}

export interface FooterSection {
  title: string
  icon: React.ReactNode
  links: FooterLink[]
}
