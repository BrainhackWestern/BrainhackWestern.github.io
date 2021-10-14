import Image from "next/image"

interface ImageProps {
    imgClass?: string;
    img: StaticImageData;
    title: string;
    children: React.ReactNode;
}

export const AboutRow = (props: ImageProps) => <>
    <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-start">
            <div className="img">
                <img src={props.img.src} alt="" />
            </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    </div>
</>