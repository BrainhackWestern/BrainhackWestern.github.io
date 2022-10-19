import { isString } from "lodash";
import NextImage, { ImageLoader, ImageProps } from "next/image";
import { basePath } from "../utils/image-loader";

const nonOptimizedLoader: ImageLoader = ({ src }) => {
  return src;
};


const Image =
  process.env.NEXT_PUBLIC_LOADER == "custom"
    ? (props: ImageProps) => {
        return (
          <NextImage
            {...props}
            src={isString(props.src) ? basePath + props.src : props.src}
            loader={nonOptimizedLoader}
          />
        );
      }
    : (props: ImageProps) => <NextImage {...props} />;

export default Image;
