import { style } from '@vanilla-extract/css';

export const schedule = style({
  backgroundColor: '#404040',
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
  left: 0
});

export const hourSep = style({
  width: '100%',
  margin: 0
});

export const days = style({
  position: 'relative'
});
