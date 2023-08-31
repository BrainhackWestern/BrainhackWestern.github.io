import { style } from '@vanilla-extract/css';
import { media } from '../styles/helpers.css';
import { colors, textSize } from '../styles/variables.css';

export const msgCard = style({
  textAlign: 'center',
  backgroundColor: colors.background[600],
  borderStyle: 'solid',
  borderColor: colors.primary,
  borderRadius: 10,
  borderWidth: 5,
  padding: '1em 4em',
  margin: '1em 0'
});


export const content = style([
  {
    fontSize: textSize.md,
    color: colors.fontLight
  },
  media.lg({
    fontSize: textSize.lg,
    color: colors.fontLight
  })
])

