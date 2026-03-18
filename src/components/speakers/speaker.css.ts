import { style } from '@vanilla-extract/css';
import { media } from '../../styles/helpers.css';

export const speaker = style([
  {
    margin: '1em 0 2em 0',
    scrollMarginTop: 100
  },
  media.lg({
    margin: '1em 0 3em 0'
  })
]);

export const speakerHeader = style({
  padding: '0.5em 1em 0.5em 1em',
  maxWidth: 550,
  width: '100%',
  margin: 0,
  color: '#fff',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.45)'
});

export const row = style({
  padding: '1em 0'
});

export const img = style([
  'col-12',
  'col-lg',
  {
    maxWidth: 200,
    width: 200,
    padding: 0,
    margin: '1em',
    borderRadius: 12,
    overflow: 'hidden'
  },
  media.lg({
    marginTop: 0,
    marginBottom: 0
  })
]);

export const description = style(['col-12', 'col-lg', 'flex-grow-1']);
