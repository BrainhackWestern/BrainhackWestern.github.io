import NextImage, { ImageLoader, ImageProps } from "next/image";

const nonOptimizedLoader: ImageLoader = ({ src }) => {
  return src;
};

const Image =
  process.env.NEXT_PUBLIC_LOADER == "custom"
    ? (props: ImageProps) => {
        return <NextImage {...props} loader={nonOptimizedLoader} />;
      }
    : (props: ImageProps) => <NextImage {...props} />;

export default Image;
