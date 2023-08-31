import { style } from '@vanilla-extract/css';
import { textSize, textWeight } from '../../styles/variables.css';

export const link = style({
  color: 'inherit'
});

export const event = style({
  position: 'absolute',
  backgroundColor: '#2d1e33',
  padding: '0.5em',
  boxShadow: '2px 5px 10px rgb(0, 0, 0, 0.8)'
});

export const eventName = style({
  fontSize: textSize.sm,
  fontWeight: textWeight.bold,
  marginBottom: 0
});

export const time = style({
  fontSize: textSize.sm,
  marginBottom: 0
});

export const room = style({
  fontSize: textSize.sm,
  height: '1.5em'
});

export const moreInfo = style({
  position: 'absolute',
  bottom: '0.2rem',
  right: '0.5rem',
  margin: 0,
  fontSize: textSize.xs,
  fontStyle: 'italic'
});
