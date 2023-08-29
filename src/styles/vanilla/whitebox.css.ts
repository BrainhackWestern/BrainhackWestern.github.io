import { globalStyle, style } from '@vanilla-extract/css';
import { colors, textSize } from '../variables.css';

const whitebox = style([
  {
    backgroundColor: colors.backgroundLight,
    width: '100%',
    padding: '3em 0'
  }
]);

globalStyle(`${whitebox} p, ${whitebox} h2`, {
  color: colors.fontDark
});

globalStyle(`${whitebox} p`, {
  textAlign: 'center',
  fontSize: textSize.lg
});

export default {
  whitebox
};
