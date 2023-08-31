import { style } from '@vanilla-extract/css';
import { css } from '../styles/helpers.css';
import { textSize } from '../styles/variables.css';

const footer = style([]);

css(footer, {
  h3: {
    textAlign: 'left'
  },

  p: {
    paddingBottom: '2em',
    width: '100%'
  }
});

const copyright = style([
  {
    padding: 0,
    margin: 0,
    marginTop: '1em',
    textAlign: 'right',
    fontSize: textSize.sm
  }
]);

const styles = {
  footer,
  copyright
};

export default styles;
