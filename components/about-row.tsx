import Image, { StaticImageData } from "next/image"
import useScreenSize, { screenSizes } from "../services/screen-size/use"

interface ImageProps {
    imgClass?: string;
    img: StaticImageData;
    title: string;
    children: React.ReactNode;
    reverse?: boolean;
}

export const AboutRow = (props: ImageProps) => {
    const { state: { screenSize } } = useScreenSize();
    const largeScreen = screenSize >= screenSizes['lg']
    const alignClass = props.reverse ? "about_align_right" : "about_align_left"
    const content = [
        <div key="image" className="col-lg-6 d-flex justify-content-center align-items-start">
            <div className="img">
                <Image src={props.img} alt="" />
            </div>
        </div>,
        <div key="description" className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className={alignClass}>{props.title}</h2>
            <p className={alignClass}>{props.children}</p>
        </div>
    ]
    return (
        <div className="row">
            {props.reverse && largeScreen ? content.reverse() : content}
        </div>
    )
}