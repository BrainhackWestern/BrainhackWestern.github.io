import { style } from '@vanilla-extract/css';

export const navbar = style({
  backgroundColor: 'rgba(240, 240, 240, 0)',
  transition: 'background-color 0.25s'
});

export const navbarWhite = style({
  backgroundColor: 'rgba(240, 240, 240, 1)'
});

export const registerBtn = style({
  opacity: 1,
  transition: 'opacity 0.25s'
});
export const registerBtnHide = style({
  opacity: 0
});
