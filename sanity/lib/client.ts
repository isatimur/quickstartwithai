import { createClient } from '@sanity/client'
import type { SanityClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
