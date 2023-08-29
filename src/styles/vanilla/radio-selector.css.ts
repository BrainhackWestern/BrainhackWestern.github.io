import { StyleRule, style } from '@vanilla-extract/css';

import { pseudoblock } from '../mixins.css';

const button_background =
  'linear-gradient(90deg, rgba(12,110,100,1) 0%, rgba(44,76,129,1) 53%, rgba(132,10,171,1) 100%)';
const selector = style([
  'd-flex',
  'justify-content-center',
  'align-items-center',
  {
    position: 'absolute',
    width: '100%',
    padding: '0.5em'
  }
]);

const selected = style([
  {
    fontSize: '30px'
  }
]);

const choice = style([
  {
    margin: '0.2em'
  }
]);

const label = style([
  // 'button',
  // {
  //   selectors: {
  //     [`${selected}.&::before`]: pseudoblock(5),
  //     [`${selected}.&::after`]: {
  //       ...pseudoblock(0),
  //       background: button_background,
  //       zIndex: 1,
  //       // borderRadius: 14,
  //     }
  //   }
  // }
]);

export default {
  selector,
  label,
  choice,
  selected
};
