import { ImageLoader } from 'next/image';

const nonOptimizedLoader: ImageLoader = ({ src }) => {
  return src;
};

export default nonOptimizedLoader;
