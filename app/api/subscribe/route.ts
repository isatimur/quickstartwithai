import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'

// Generate JWT token for Ghost Admin API
async function generateGhostJWT(apiKey: string) {
  const [id, secret] = apiKey.split(':')
  const secretBuffer = Buffer.from(secret, 'hex')
  
  const jwt = await new SignJWT({
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (5 * 60), // 5 minutes
    aud: '/admin/'
  })
    .setProtectedHeader({ alg: 'HS256', kid: id })
    .sign(secretBuffer)
  
  return jwt
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Ghost Members API integration
    const ghostApiUrl = process.env.GHOST_API_URL || 'https://blog.quickstartgenai.com'
    const ghostApiKey = process.env.GHOST_ADMIN_API_KEY

    if (!ghostApiKey) {
      console.error('Ghost Admin API key not configured')
      return NextResponse.json(
        { error: 'Newsletter service temporarily unavailable' },
        { status: 503 }
      )
    }

    // Generate JWT token for Ghost API
    const token = await generateGhostJWT(ghostApiKey)

    // Subscribe to Ghost newsletter
    const response = await fetch(`${ghostApiUrl}/ghost/api/admin/members/`, {
      method: 'POST',
      headers: {
        'Authorization': `Ghost ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        members: [{
          email: email,
          subscribed: true,
          newsletters: [{
            id: '68dbd79727558900014c1b5f'
          }]
        }]
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Ghost API error:', errorData)
      
      // Handle specific Ghost API errors
      if (response.status === 422) {
        return NextResponse.json(
          { error: 'Email address is already subscribed' },
          { status: 422 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: response.status }
      )
    }

    const result = await response.json()
    console.log('Successfully subscribed:', result)

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to our newsletter!',
        member: result.members?.[0]
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 