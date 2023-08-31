import { style } from '@vanilla-extract/css';
import { colors } from '../styles/variables.css';

export const page = style({
  position: 'relative',
  minHeight: '100vh',
  margin: 0,
  width: '100%',
  backgroundColor: colors.backgroundMain,
  overflow: 'hidden'
});
