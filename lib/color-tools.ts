import interpolate from 'color-interpolate'
import { adjustHue, lighten, darken } from 'color2k'

export const colorGradient = (colorStart: string, colorStop: string, steps: number) => {
  const palette = interpolate([colorStart, colorStop]);
  return [...Array(steps).keys()].map(i => {
    return palette(i / (steps - 1))
  })
}

export const newColorGradient = (color: string, steps: number) => {
  const palette = interpolate([lighten(color, 0.2), darken(color, 0.2)])
  return [...Array(steps).keys()].map(i => {
    return palette(i / (steps - 1))
  }).map(color => {
    return [color, headerGradient(color)]
  })
}

const headerGradient = (start: string) => {
  return adjustHue(start, -10)
}

export const iterator = <T>(arr: T[]) => {
    let nextIndex = 0
    return {
      next: function() {
        return nextIndex < arr.length ? {
          value: arr[nextIndex++],
          done: false
        } : {
          value: null,
          done: true
        };
      }
    };
  }