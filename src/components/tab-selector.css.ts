import { style } from '@vanilla-extract/css';

export const selector = style([
  'd-flex',
  'justify-content-center',
  'align-items-center',
  {
    position: 'absolute',
    width: '100%',
    padding: '0.5em'
  }
]);

export const selected = style([
  {
    fontSize: '30px'
  }
]);

export const choice = style([
  {
    margin: '0.2em'
  }
]);
