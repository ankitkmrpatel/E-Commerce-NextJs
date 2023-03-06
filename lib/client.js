import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '190vo6ys',
  dataset: 'production',
  apiVersion: '2022-03-10',
  userCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const image_builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return image_builder.image(source);
};
