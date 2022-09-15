import interpolate from 'color-interpolate'

export const colorGradient = (colorStart: string, colorStop: string, steps: number) => {
  const palette = interpolate([colorStart, colorStop]);
  return [...Array(steps).keys()].map(i => {
    return palette(i / (steps - 1))
  })
}

export const colorIterator = (colors: string[]) => {
    let nextIndex = 0
    return {
      next: function() {
        return nextIndex < colors.length ? {
          value: colors[nextIndex++],
          done: false
        } : {
          done: true
        };
      }
    };
  }