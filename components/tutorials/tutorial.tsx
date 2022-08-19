import Image from "../image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CSSProperties } from "react";
import { TutorialInfo } from "../../interfaces/tutorial";
import useScreenSize, { screenSizes } from "../../services/screen-size/use";

interface TutorialProps {
    config: TutorialInfo;
    color: string;
    side: "left" | "right"
}

export const Tutorial = (props: TutorialProps) => {
    const { state: { screenSize }} = useScreenSize();
    const largeScreen = screenSize >= screenSizes['lg']

    // We put things in reverse if right side is indicated, but only on large screens
    const reverse = props.side === "right" && largeScreen;

    const headerStyle: CSSProperties = {
        backgroundColor: props.color,
        textAlign: reverse ? "left" : "right",
    }

    const description = props.config.description ? 
        props.config.description :
        "Description coming soon!"

    const data = [
        <div key="image" className="col-12 col-lg tutorial-img">
            <Image
                src={props.config.image}
                width={250}
                height={250}
            />
        </div>,
        <div key="description" className="col-12 col-lg flex-grow-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
        </div>
    ]

    return (
        <div id={props.config.id} className="tutorial">
            <div className="d-flex" style={{justifyContent: reverse ? "flex-end" : "flex-start"}}>
                <div className="tutorial-header" style={headerStyle}>
                    <h3>{props.config.name}</h3>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                {
                    reverse ?
                        data.reverse() :
                        data
                }
            </div>
        </div>
    )
}