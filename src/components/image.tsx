import NextImage, { ImageProps } from 'next/image';
import { isString } from 'lodash';

const basePath = process.env.NEXT_PUBLIC_URL;

const Image = (props: ImageProps) => {
  return (
    <NextImage
      {...props}
      src={isString(props.src) && basePath ? basePath + props.src : props.src}
    />
  );
};

export default Image;
