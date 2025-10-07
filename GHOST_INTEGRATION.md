# Ghost Newsletter Integration Setup

## Required Environment Variables

Add these to your `.env.local` file:

```bash
# Ghost Blog URL (your blog domain)
GHOST_API_URL=https://blog.quickstartgenai.com

# Ghost Admin API Key
# Get this from your Ghost admin panel: Settings > Integrations > Add custom integration
GHOST_ADMIN_API_KEY=your_ghost_admin_api_key_here
```

## How to Get Your Ghost Admin API Key

1. **Login to Ghost Admin**: Go to `https://blog.quickstartgenai.com/ghost/`
2. **Navigate to Settings**: Click on "Settings" in the left sidebar
3. **Go to Integrations**: Click on "Integrations" tab
4. **Add Custom Integration**: Click "Add custom integration"
5. **Copy Admin API Key**: Copy the "Admin API Key" (starts with `ghost-admin-`)
6. **Add to Environment**: Paste it as `GHOST_ADMIN_API_KEY` in your `.env.local`

## What This Integration Does

- **Subscribes users** to your Ghost newsletter when they sign up on your main website
- **Manages subscribers** through Ghost's built-in member management
- **Sends newsletters** from `blog.quickstartgenai.com` domain
- **Handles duplicates** - prevents duplicate subscriptions
- **Provides feedback** - shows success/error messages to users

## Testing the Integration

1. **Start your development server**: `npm run dev`
2. **Test subscription**: Use the footer subscription form
3. **Check Ghost Admin**: Verify the subscriber appears in Ghost admin panel
4. **Send test newsletter**: Create and send a test newsletter from Ghost

## Troubleshooting

- **503 Error**: Ghost Admin API key not configured
- **422 Error**: Email already subscribed (this is handled gracefully)
- **Network Error**: Check Ghost API URL and internet connection
