import { style } from '@vanilla-extract/css';
import { media } from '../helpers.css';

const sponsor = style([
  {
    textAlign: 'center',
    maxWidth: '80%',
    ':hover': {
      color: 'red'
    }
  },
  'col-lg-4'
]);

const sponsorLink = style([
  {
    display: 'block',
    maxWidth: 400,
    margin: '2em'
  },
  media.lg({
    maxWidth: 300
  })
]);

export default {
  sponsor,
  sponsorLink
};
