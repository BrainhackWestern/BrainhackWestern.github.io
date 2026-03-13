import { style } from '@vanilla-extract/css';
import { colors, textSize, textWeight } from '../../styles/variables.css';

export const schedule = style({
  backgroundColor: colors.background[400],
  backgroundImage:
    'linear-gradient(rgba(70, 70, 70, 0.45), rgba(70, 70, 70, 0.45)), linear-gradient(120deg, #87569c 0%, #3a84b9 38%, #00aed4 58%, #07b5aa 78%, #69b971 100%)',
  backgroundBlendMode: 'multiply',
  position: 'relative',
  marginBottom: '2em'
});

export const hourLines = style({
  position: 'absolute',
  right: 0,
  left: 0,
  top: 0
});

export const hourLine = style({
  position: 'absolute',
  right: 0,
  left: 0,
  color: colors.fontLight,
  fontSize: textSize.md,
  fontWeight: textWeight.bold
});

export const hourSep = style({
  width: '100%',
  margin: 0,
  borderColor: colors.highlight,
  opacity: 0.55
});

export const days = style({
  position: 'relative'
});
