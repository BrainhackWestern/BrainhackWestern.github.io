import { style } from "@vanilla-extract/css";

const navbar = style([
  "navbar",
  "navbar-expand-lg",
  "navbar-light",
  {
    backgroundColor: "rgba(240, 240, 240, 0)",
    transition: "background-color 0.25s",
  },
]);

const navbarWhite = style({
  backgroundColor: "rgba(240, 240, 240, 1)",
});

export default {
  navbar,
  navbarWhite,
};
