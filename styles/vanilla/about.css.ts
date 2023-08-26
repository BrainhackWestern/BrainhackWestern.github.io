import { globalStyle, style } from '@vanilla-extract/css';
import { media } from '../helpers.css';
import { shadow } from '../mixins.css';
import home from './home.css';

const container = style(['container-lg', home.contentSpace]);

globalStyle(`${container} .row`, {
  paddingBottom: '4em'
});

globalStyle(`${container} h2, ${container} p`, {
  textAlign: 'center'
});

const imgWrapper = style([
  'col-lg-6',
  'd-flex',
  'justify-content-center',
  'align-items-start'
]);

const img = style([
  {
    maxWidth: '80%',
    margin: '3em'
  }
]);

globalStyle(`${img} > span`, shadow);

const description = style([
  'col-lg-6',
  'd-flex',
  'flex-column',
  'justify-content-center'
]);

const alignRight = style(
  media.lg({
    textAlign: 'right'
  })
);

const alignLeft = style(
  media.lg({
    textAlign: 'left'
  })
);

export default {
  container,
  imgWrapper,
  img,
  alignRight,
  alignLeft,
  description
};
