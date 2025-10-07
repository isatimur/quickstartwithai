// Data constants for cross-linking components
import type { CrossLinkItem, BlogPost, TopicItem, FooterSection } from '@/lib/types/cross-linking'

export const crossLinkItems: CrossLinkItem[] = [
  {
    title: "Get the Book",
    description: "Complete guide to local LLM development",
    href: "/buy",
    icon: null, // Will be set in component
    variant: "default",
    badge: "Popular"
  },
  {
    title: "Meet Authors",
    description: "Learn about our AI development experts",
    href: "/#authors",
    icon: null,
    variant: "secondary"
  },
  {
    title: "FAQ",
    description: "Common questions about our book",
    href: "/faq",
    icon: null,
    variant: "outline"
  },
  {
    title: "Latest Blog",
    description: "Read our latest AI development articles",
    href: "https://blog.quickstartgenai.com",
    icon: null,
    variant: "outline",
    external: true
  }
]

export const blogPosts: BlogPost[] = [
  {
    title: "Update on Our Website & Publishing Direction",
    url: "https://blog.quickstartgenai.com/update-website-publishing-direction",
    date: "10/1/2025",
    excerpt: "Latest updates on our publishing strategy and website improvements",
    author: "Team Quickstart",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "Modern AI Integrations: MCP Server Meets REST API and Local LLMs — Part 3",
    url: "https://blog.quickstartgenai.com/modern-ai-integrations-mcp-part3",
    date: "6/3/2025",
    excerpt: "Complete guide to MCP agent integration with local LLMs and RESTful inventory service",
    author: "Timur Isachenko",
    readTime: "12 min read",
    featured: true
  },
  {
    title: "Modern AI Integrations: MCP Server Meets REST API and Local LLMs, Part 2",
    url: "https://blog.quickstartgenai.com/modern-ai-integrations-mcp-part2",
    date: "6/1/2025",
    excerpt: "Advanced REST API integration patterns for AI applications with MCP compliance",
    author: "Timur Isachenko",
    readTime: "10 min read"
  },
  {
    title: "Modern AI Integrations: MCP Server Meets REST API and Local LLMs, Part 1",
    url: "https://blog.quickstartgenai.com/modern-ai-integrations-mcp-part1",
    date: "5/31/2025",
    excerpt: "Introduction to MCP server architecture and local LLM integration with FastAPI",
    author: "Timur Isachenko",
    readTime: "7 min read"
  },
  {
    title: "Google Agent-to-Agent (A2A) Protocol Explained — with Real Working Examples",
    url: "https://blog.quickstartgenai.com/google-agent-to-agent-protocol-explained",
    date: "4/29/2025",
    excerpt: "Practical guide to Google's A2A protocol with real working examples for developers",
    author: "Timur Isachenko",
    readTime: "8 min read"
  },
  {
    title: "Web crawling for RAG with CrawlAI",
    url: "https://blog.quickstartgenai.com/web-crawling-for-rag-with-crawlai",
    date: "1/16/2025",
    excerpt: "Learn how to use Crawl4AI and Ollama for efficient web crawling and data extraction for RAG systems",
    author: "Timur Isachenko",
    readTime: "6 min read"
  }
]

export const topicItems: TopicItem[] = [
  {
    title: "RAG Implementation",
    description: "Learn retrieval-augmented generation techniques",
    color: "blue",
    icon: null,
    href: "https://blog.quickstartgenai.com/tag/rag/"
  },
  {
    title: "AI Agents",
    description: "Build intelligent autonomous systems",
    color: "green",
    icon: null,
    href: "https://blog.quickstartgenai.com/tag/ai-agent/"
  },
  {
    title: "Local LLMs",
    description: "Deploy AI models without cloud dependencies",
    color: "purple",
    icon: null,
    href: "https://blog.quickstartgenai.com/tag/local-llm/"
  }
]

export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    icon: null,
    links: [
      { name: "Features", href: "/#features" },
      { name: "Authors", href: "/#authors" },
      { name: "Articles", href: "https://blog.quickstartgenai.com", external: true },
      { name: "Buy Book", href: "/buy" }
    ]
  },
  {
    title: "Connect",
    icon: null,
    links: [
      { name: "X.com", href: "https://x.com", external: true },
      { name: "LinkedIn", href: "https://linkedin.com", external: true },
      { name: "GitHub", href: "https://github.com", external: true }
    ]
  },
  {
    title: "Legal",
    icon: null,
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" }
    ]
  },
  {
    title: "Join our Mailing List",
    icon: null,
    links: []
  }
]
