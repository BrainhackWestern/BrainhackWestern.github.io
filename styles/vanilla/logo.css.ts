import { globalStyle, style } from "@vanilla-extract/css"
import { colors, textSize } from "../variables.css"

const dates = style({
  textAlign: 'center',
  background: `linear-gradient(120deg, #320066 20%, #04147b 30%, #024d1e)`,
  padding: '0.5em 2em',
  margin: '0.5em 0',
  fontSize: textSize.lg,
  fontWeight: "bolder",
  color: colors.fontLight,
})

export default {
  dates,
}