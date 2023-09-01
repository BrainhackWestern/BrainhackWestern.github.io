import { globalStyle } from '@vanilla-extract/css';
import { css } from './helpers.css';
import { colors, textSize, textWeight } from './variables.css';
import { montserrat, quicksand } from './fonts';

css('', {
  'html, body': {
    padding: 0,
    margin: 0,
    // ...montserrat.style,
  },

  a: {
    textDecoration: 'none',
    color: colors.primaryLight
  },

  '*': {
    boxSizing: 'border-box'
  },

  body: {
    // ...montserrat.style,
    padding: 0,
    margin: 0,
    fontSize: textSize.md,
    color: colors.fontLight
  },

  'h1, h2, h3, h4, h5, h6': {
    // ...quicksand.style,
    fontWeight: textWeight.normal,
    color: colors.fontLight
  },

  h1: {
    fontSize: textSize.heading.md
  },

  h2: {
    fontSize: textSize.heading.md
  },

  h3: {
    fontSize: textSize.heading.sm
  },

  // @include bootstrap.media-breakpoint-up(xxl) {
  //   h1 {
  //     font-size: variables.$text_xlarge;
  //   }
  // }

});

globalStyle('img', {
  width: '100%'
});

globalStyle('hr', {
  borderWidth: 1,
  borderColor: '#707070',
  width: '50%',
  margin: '3em'
});

globalStyle('h3', {
  textAlign: 'center'
});

export default {};
