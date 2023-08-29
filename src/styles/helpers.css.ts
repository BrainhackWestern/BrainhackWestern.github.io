import { globalStyle, StyleRule } from '@vanilla-extract/css';

const make_breakpoint = (size: number) => (style: StyleRule) => ({
  '@media': {
    [`screen and (min-width: ${size}px)`]: style
  }
});

export const media = {
  sm: make_breakpoint(576),
  md: make_breakpoint(768),
  lg: make_breakpoint(992),
  xl: make_breakpoint(1200),
  xxl: make_breakpoint(1400)
};

export function css(selector: string, styles: { [rule: string]: StyleRule }) {
  Object.keys(styles).forEach((rule) => {
    globalStyle(`${selector} ${rule}`, styles[rule]);
  });
}
