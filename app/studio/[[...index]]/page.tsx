'use client';

import { StudioProvider, StudioLayout } from 'sanity';
import config from '@/sanity.config';
import { Suspense } from 'react';

export default function StudioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </Suspense>
  );
}
