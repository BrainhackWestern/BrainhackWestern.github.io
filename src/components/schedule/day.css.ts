import { style } from '@vanilla-extract/css';
import { textSize, textWeight } from '../../styles/variables.css';

export const dayCol = style({
  maxWidth: '80%',
  width: 320,
  margin: '0 0.5em'
});

export const dayHeading = style({
  fontSize: textSize.lg,
  fontWeight: textWeight.bold
});

export const events = style({
  position: 'relative'
});
