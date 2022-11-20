import { StyleRule } from "@vanilla-extract/css";

export const shadow: StyleRule = ({
  boxShadow: '0 16px 30px rgb(0,0,0,0.9)'
})

export const pseudoblock  = (offset: number | string): StyleRule => {
  return {
    content: '',
    display: 'block',
    position: 'absolute',
    top: offset,
    bottom: offset,
    left: offset,
    right: offset,

  }
}