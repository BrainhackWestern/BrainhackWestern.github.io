import { globalStyle, style, StyleRule } from '@vanilla-extract/css';
import { css, media } from '../styles/helpers.css';
import { colors } from '../styles/variables.css';

const growthBox = (x: number, y: string | number): StyleRule => {
  return {
    position: 'relative',
    width: `${x + 100}%`,
    left: `-${x / 2}%`,
    paddingRight: `${x / 2}%`,
    paddingLeft: `${x / 2}%`,
    paddingTop: y,
    paddingBottom: y
  };
};
// const button_background = `linear-gradient(90deg, rgba(12, 110, 100, 1) 0%, rgba(44, 76, 129, 1) 53%, rgba(132, 10, 171, 1) 100%)`
const button_background = `linear-gradient(90deg, #8602ff 0%, #344dff 53%, #00b038 100%)`;
export const backCard = style([
  {
    marginBottom: '2em'
  },
  media.lg(growthBox(13, '1em')),
  media.lg({
    boxShadow: '1px 1px 20px 10px black',
    marginBottom: '4em',
    background: button_background,
    transform: 'skew(10deg, -1deg)'
  })
]);
export const frontCard = style([
  {
    background: colors.backgroundLight,
    paddingTop: '2em',
    paddingBottom: '2em'
  },
  media.lg(growthBox(10, '2em')),
  media.lg({
    boxShadow: '1px 1px 10px 3px rgba(0,0,0,0.4)'
  })
]);

css(frontCard, {
  '> *': media.lg({
    transform: 'skew(-10deg, 1deg)'
  }),
  p: {
    color: colors.fontDark
  },
  h2: {
    color: colors.fontDark
  }
});
