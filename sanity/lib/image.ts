import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/lib/client';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};