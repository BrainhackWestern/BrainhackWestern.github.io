import Image from "../image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CSSProperties } from "react";
import { TutorialInfo } from "../../interfaces/tutorial";
import useScreenSize, { screenSizes } from "../../services/screen-size/use";

interface TutorialProps {
  config: TutorialInfo;
  color: string[];
  side: "left" | "right";
}

export const Tutorial = (props: TutorialProps) => {
  const {
    state: { screenSize },
  } = useScreenSize();
  const largeScreen = screenSize >= screenSizes["lg"];

  // We put things in reverse if right side is indicated, but only on large screens
  const reverse = props.side === "right" && largeScreen;
  const grad = !reverse ? props.color.slice().reverse() : props.color;

  const headerStyle: CSSProperties = {
    background: `linear-gradient(100deg, ${grad[0]} , ${grad[1]})`,
    textAlign: reverse ? "left" : "right",
  };

  const description = props.config.description
    ? props.config.description
    : "Description coming soon!";

  const data = [
    props.config.image ? (
      <div key="image" className="col-12 col-lg tutorial-img">
        <Image src={props.config.image} width={250} height={250} alt="" />
      </div>
    ) : null,
    <div key="description" className="col-12 col-lg flex-grow-1 console">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
      {props.config.organizer ? (
        <div>
          <span className="green">Organizer: </span>
          <span>{props.config.organizer}</span>
        </div>
      ) : null}
      {props.config.panelists ? (
        <div>
          <span className="blue">Panelists: </span>
          <br />
          {props.config.panelists.map((panelist) => (
            <>
              <span>&nbsp;&nbsp;- {panelist}</span>
              <br />
            </>
          ))}
        </div>
      ) : null}
    </div>,
  ];

  return (
    <div id={props.config.id} className="tutorial">
      <div
        className="d-flex"
        style={{ justifyContent: reverse ? "flex-end" : "flex-start" }}
      >
        <div className="tutorial-header" style={headerStyle}>
          <h3>{props.config.name}</h3>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        {reverse ? data.reverse() : data}
      </div>
    </div>
  );
};
