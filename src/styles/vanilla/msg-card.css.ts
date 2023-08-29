import { globalStyle, style } from '@vanilla-extract/css';
import { media } from '../helpers.css';
import { colors, textSize } from '../variables.css';

const msgCard = style({
  textAlign: 'center',
  backgroundColor: colors.background[600],
  borderStyle: 'solid',
  borderColor: colors.highlight,
  borderRadius: 10,
  borderWidth: 5,
  padding: '1em 4em',
  margin: '1em 0'
});

globalStyle(`${msgCard} span`, {
  fontSize: textSize.lg,
  color: colors.fontLight
});

globalStyle(
  `${msgCard} span`,
  media.lg({
    fontSize: textSize.lg,
    color: colors.fontLight
  })
);

export default {
  msgCard
};
