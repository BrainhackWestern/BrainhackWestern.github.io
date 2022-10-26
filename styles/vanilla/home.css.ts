import { globalStyle, style } from "@vanilla-extract/css";
import { media } from "../helpers.css";
import { colors, textSize } from "../variables.css";

const app = style({
  position: "relative",
  minHeight: "100vh",
  margin: 0,
  width: "100%",
  backgroundColor: colors.backgroundMain,
});

const center = style([
  {
    textAlign: 'center'
  }
])

const window = style([
  "d-flex",
  "flex-row",
  "justify-content-start",
  "container-fluid",
  {
    height: "100vh",
    padding: "2em",
  },
]);

const splash = style({
  position: "relative",
  background:
    "radial-gradient(ellipse 200% 100% at 50% 100%, #240051  0%, #68CDFF 32%, #dbffe9 85%)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0% 0%",
  backgroundSize: "100% 100%",
});

const backgroundImg = style([
  {
    position: "absolute",
    overflow: "hidden",
    maxHeight: "95vh",
    maxWidth: 1300,
    width: "100%",
    right: 0,
    top: "5vh",
    zIndex: 0,
  },
  media.xl({
    width: "65%",
  }),
]);

globalStyle("img", {
  width: "100%",
});

globalStyle("hr", {
  borderWidth: 1,
  borderColor: "#707070",
  width: "50%",
  margin: "3em",
});

globalStyle("h3", {
  textAlign: "center",
});

const titleCol = {
  container: style([
    {
      zIndex: 1
    },
    "col-12",
    "col-lg-4",
    "d-flex",
    "flex-column",
    "justify-content-end",
    "align-items-center",
  ]),

  button: style([
    {
      alignSelf: "center",
      fontSize: textSize.heading.sm,
    },
  ]),
};


const mapFrame = style([
  {
    width: "100%",
    height: "20em",
  },
  media.lg({
    height: "35em",
  }),
]);

const contentSpace = style([
  {
    paddingTop: "5em",
    paddingBottom: "3em",
  },
]);

export default {
  app,
  window,
  splash,
  backgroundImg,
  titleCol,
  mapFrame,
  contentSpace,
  center,
};
