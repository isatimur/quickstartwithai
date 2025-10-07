// Advanced Service Worker for optimal performance
const CACHE_NAME = 'quickstart-genai-v1'
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'
const API_CACHE = 'api-v1'

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/fonts/GeistVF.woff',
  '/fonts/GeistMonoVF.woff',
  '/book-cover.webp',
  '/timur_isachenko.webp',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
]

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/blog/rss',
  '/api/subscribe',
]

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(CRITICAL_RESOURCES)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== API_CACHE) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Handle different types of requests
  if (url.pathname.startsWith('/api/')) {
    // API requests - Network First with Cache Fallback
    event.respondWith(handleApiRequest(request))
  } else if (url.pathname.match(/\.(js|css|woff|woff2|png|jpg|jpeg|webp|svg)$/)) {
    // Static assets - Cache First
    event.respondWith(handleStaticAsset(request))
  } else if (url.pathname.startsWith('/_next/static/')) {
    // Next.js static files - Cache First
    event.respondWith(handleStaticAsset(request))
  } else {
    // HTML pages - Network First with Cache Fallback
    event.respondWith(handlePageRequest(request))
  }
})

// API request handler - Network First
async function handleApiRequest(request) {
  const cache = await caches.open(API_CACHE)
  
  try {
    // Try network first
    const networkResponse = await fetch(request)
    
    // Cache successful responses
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone()
      cache.put(request, responseClone)
    }
    
    return networkResponse
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline response for API calls
    return new Response(
      JSON.stringify({ error: 'Offline - API unavailable' }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// Static asset handler - Cache First
async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone()
      cache.put(request, responseClone)
    }
    
    return networkResponse
  } catch (error) {
    // Return a fallback for critical assets
    if (request.url.includes('/fonts/')) {
      return new Response('', { status: 404 })
    }
    throw error
  }
}

// Page request handler - Network First
async function handlePageRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE)
  
  try {
    // Try network first
    const networkResponse = await fetch(request)
    
    // Cache successful responses
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone()
      cache.put(request, responseClone)
    }
    
    return networkResponse
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page
    return cache.match('/') || new Response('Offline', { status: 503 })
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'newsletter-sync') {
    event.waitUntil(syncNewsletterSubscriptions())
  }
})

// Sync newsletter subscriptions when back online
async function syncNewsletterSubscriptions() {
  try {
    const cache = await caches.open('newsletter-queue')
    const requests = await cache.keys()
    
    for (const request of requests) {
      try {
        const response = await fetch(request)
        if (response.ok) {
          await cache.delete(request)
        }
      } catch (error) {
        console.log('Failed to sync newsletter subscription:', error)
      }
    }
  } catch (error) {
    console.log('Newsletter sync failed:', error)
  }
}

// Push notification handler
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: '/android-chrome-192x192.png',
      badge: '/android-chrome-192x192.png',
      tag: 'newsletter-update',
      data: data.url,
      actions: [
        {
          action: 'open',
          title: 'Read More'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ]
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
  }
})

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data || '/')
    )
  }
})