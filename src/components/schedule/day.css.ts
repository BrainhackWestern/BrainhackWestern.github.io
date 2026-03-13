import { style } from '@vanilla-extract/css';
import { colors, textSize, textWeight } from '../../styles/variables.css';

export const dayCol = style({
  maxWidth: '92%',
  width: 340,
  margin: '0 0.25em'
});

export const dayHeading = style({
  fontSize: textSize.lg,
  fontWeight: textWeight.bold,
  color: colors.highlight
});

export const events = style({
  position: 'relative'
});
