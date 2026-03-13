import { style } from '@vanilla-extract/css';
import { colors, textSize, textWeight } from '../../styles/variables.css';

export const link = style({
  color: 'inherit'
});

export const event = style({
  position: 'absolute',
  backgroundColor: '#3a84b9',
  borderLeft: `3px solid ${colors.primary}`,
  padding: '0.4em',
  boxShadow: `2px 5px 10px ${colors.backgroundTransparent}`
});

export const eventName = style({
  fontSize: textSize.md,
  fontWeight: textWeight.bold,
  marginBottom: 0
});

export const room = style({
  fontSize: '0.9rem',
  height: '1.3em'
});

export const moreInfo = style({
  position: 'absolute',
  bottom: '0.2rem',
  right: '0.5rem',
  margin: 0,
  fontSize: textSize.sm,
  fontStyle: 'italic'
});
