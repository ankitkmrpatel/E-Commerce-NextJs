import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  userCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const image_builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return image_builder.image(source);
};
