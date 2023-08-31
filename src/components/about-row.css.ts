import { globalStyle, style } from '@vanilla-extract/css';
import { media } from '../styles/helpers.css';
import { shadow } from '../styles/mixins.css';

const row = style({
  paddingBottom: '4em'
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

const styles = {
  imgWrapper,
  row,
  img,
  alignRight,
  alignLeft,
  description
};

export default styles;
