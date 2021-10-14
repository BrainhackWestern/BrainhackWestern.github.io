import { ImageLoader } from 'next/image';

export const basePath = process.env.NEXT_PUBLIC_URL || '';

export const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return basePath + src
}
