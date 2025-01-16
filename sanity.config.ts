'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { markdownSchema } from 'sanity-plugin-markdown'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from '@/sanity/env'
import {schema} from '@/sanity/schemaTypes'
import {structure} from '@/sanity/structure'
import {defineDocuments, presentationTool} from "@sanity/presentation";

const SANITY_STUDIO_PREVIEW_URL = (
    process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
)

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
    unsplashImageAsset(),
    markdownSchema(),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/blog/:slug',
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
      },
    }),
  ],
  document: {
    //@ts-expect-error Sanity Studio is not typed
    productionUrl: async (prev: string, context: any) => prev,
  },
})
