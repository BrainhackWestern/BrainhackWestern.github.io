import { globalStyle, style } from '@vanilla-extract/css';

export const navbar = style({
  backgroundColor: 'rgba(240, 240, 240, 0)',
  transition: 'background-color 0.25s'
});

export const navbarWhite = style({
  backgroundColor: 'rgba(240, 240, 240, 1)'
});

export const navbarSplash = style({
  backgroundColor: 'rgba(240, 240, 240, 0)',
  color: '#f8f9fb',
  fontWeight: 700
});

globalStyle(`${navbarSplash} .nav-link`, {
  color: '#f8f9fb',
  fontWeight: 700
});

globalStyle(`${navbarSplash} .nav-link:hover`, {
  color: '#ffffff'
});

globalStyle(`${navbarSplash} .nav-link:focus`, {
  color: '#ffffff'
});

globalStyle(`${navbarSplash} .navbar-brand`, {
  color: '#f8f9fb',
  fontWeight: 700
});

globalStyle(`${navbarSplash} .navbar-toggler`, {
  borderColor: 'rgba(255, 255, 255, 0.6)'
});

globalStyle(`${navbarSplash} .navbar-toggler-icon`, {
  filter: 'invert(1)'
});

export const registerBtn = style({
  opacity: 1,
  transition: 'opacity 0.25s'
});

export const registerBtnHide = style({
  opacity: 0
});
