import { globalStyle, style } from "@vanilla-extract/css";
import EmailForm from "../../components/email-form";
import { css } from "../helpers.css";
import { colors, font, textSize } from "../variables.css";

const content = style([])

css(content, {
  h1: {
    padding: '2em 0 1em 0',
  },
  "h1::before": {
    content: '#',
    display: 'inline',
    color: colors.hightlight
  },
  h3: {
    display: 'inline-block',
    textAlign: 'left',
    background: colors.highlightDark,
    padding: '0.5em 1em',
    fontSize: textSize.lg
  },
  section: {
    marginBottom: '2em',
  }
})

export default {
  content
}