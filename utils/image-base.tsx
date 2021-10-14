import React from 'react';
import Image from 'next/image';

const basePath = process.env.PUBLIC_URL;

export const ImageBase: typeof Image = (props) => {
    if (typeof props.src === "string") {
        props.src = props.src?.startsWith('/')
            ? `${basePath || ''}${props.src}`
            : props.src;
    } else {
        (props.src as StaticImageData).src = (basePath || '') + (props.src as StaticImageData).src;
    }
    return <Image {...props}></Image>;
};
