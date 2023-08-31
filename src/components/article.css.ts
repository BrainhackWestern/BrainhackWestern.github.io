import { style } from '@vanilla-extract/css';
import { css } from '../styles/helpers.css';
import { colors, textSize } from '../styles/variables.css';

export const article = style([]);

css(article, {
  h1: {
    padding: '2em 0 1em 0'
  },
  'h1::before': {
    content: '#',
    display: 'inline',
    color: colors.primary
  },
  h3: {
    display: 'inline-block',
    textAlign: 'left',
    background: colors.primaryDark,
    padding: '0.5em 1em',
    fontSize: textSize.lg
  },
  section: {
    marginBottom: '2em'
  }
});

