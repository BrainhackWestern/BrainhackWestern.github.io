import { style } from "@vanilla-extract/css";
import { css } from "../helpers.css";
import { textSize } from "../variables.css";

const footer = style([])

css(footer, {
  h3: {
    textAlign: 'left',
  },

  p: {
    paddingBottom: '2em',
    width: '100%',
  }
})

const copyright = style([{
  padding: 0,
  margin: 0,
  marginTop: '1em',
  textAlign: 'right',
  fontSize: textSize.sm
}])

export default {
  footer,
  copyright,
}