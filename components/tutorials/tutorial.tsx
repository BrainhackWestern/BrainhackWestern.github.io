import Image from "next/image";
import { CSSProperties } from "react";
import useScreenSize from "../../services/screen-size/use";

interface TutorialProps {
    config: Tutorial;
    color: string;
    side: "left" | "right"
}

export const Tutorial = (props: TutorialProps) => {
    const { state: { largeScreen }} = useScreenSize();

    const reverse = props.side === "right" && largeScreen;

    const headerStyle: CSSProperties = {
        backgroundColor: props.color,
        textAlign: reverse ? "left" : "right",
    }

    const data = [
        <div key="image" className="col-12 col-lg tutorial-img">
            <Image
                src={props.config.image}
                width={250}
                height={250}
            />
        </div>,
        <div key="description" className="col-12 col-lg flex-grow-1">
            <p>{props.config.description}</p>
        </div>
    ]

    return (
        <div className="tutorial">
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