import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect legacy blog paths to Ghost subdomain with 301 status
  if (pathname.startsWith('/blog')) {
    const blogUrl = new URL('https://blog.quickstartgenai.com')
    
    // Preserve the path after /blog
    if (pathname === '/blog') {
      // Just redirect /blog to blog homepage
      blogUrl.pathname = '/'
    } else {
      // Redirect /blog/slug to blog.quickstartgenai.com/slug
      blogUrl.pathname = pathname.replace('/blog', '')
    }
    
    return NextResponse.redirect(blogUrl, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
