import Image from "next/image"

import { imageLoader } from "../utils/image-loader"

interface ImageProps {
    imgClass?: string;
    img: StaticImageData;
    title: string;
    children: React.ReactNode;
}

export const AboutRow = (props: ImageProps) => <>
    <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-start">
            <Image src={props.img} className="img" alt="" loader={imageLoader}/>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    </div>
</>