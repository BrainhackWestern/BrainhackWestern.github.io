import { globalStyle, style } from '@vanilla-extract/css';
import { media } from '../helpers.css';
import { textSize, textWeight } from '../variables.css';

const tutorialDay = style({
  maxWidth: 920,
  margin: '0 auto',
  marginBottom: '1em'
});

globalStyle(`${tutorialDay} h3`, {
  fontSize: textSize.lg
});

const tutorialDayName = style({
  fontWeight: textWeight.bold,
  textAlign: 'left'
});

const tutorial = style([
  {
    margin: '1em 0 2em 0'
  },
  media.lg({
    margin: '1em 0 3em 0'
  })
]);

const tutorialHeader = style({
  padding: '1em 2em 1em 2em',
  maxWidth: 550,
  width: '100%'
});

globalStyle(`${tutorialHeader} h3`, {
  textAlign: 'inherit',
  margin: 0
});

const row = style([
  'row',
  'align-items-center',
  'justify-content-center',
  {
    padding: '1em 0'
  }
]);

const img = style([
  'col-12',
  'col-lg',
  {
    maxWidth: 250
  }
]);

const description = style(['col-12', 'col-lg', 'flex-grow-1', 'console']);

export default {
  tutorialDay,
  tutorialDayName,
  tutorial,
  tutorialHeader,
  img,
  row,
  description
};
