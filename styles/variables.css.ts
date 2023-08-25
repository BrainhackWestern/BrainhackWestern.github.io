const background = {
  0: '#f0f0f0',
  100: "#a5a5a5",
  200: "#787878",
  300: "#4b4b4b",
  400: "#1e1e1e",
  500: "#1b1b1b",
  600: "#151515",
  700: "#0f0f0f",
  800: "#090909",
  900: "#030303",
}

export const colors = {
  highlight: "#8004fd",
  highlightDark: '#5902b0',
  highlightLight: '#a204ff',

  background,

  backgroundMain: background[400],
  backgroundLight: background[0],
  backgroundTransparent: "rgba(30, 30, 30, 0.7)",

  fontLight: "#f9f9f9",
  fontDark: "#1e1e1e",
}

export const textSize = {
  base: 16,
  heading: {
    xl: "4.5rem",
    lg: "3.5rem",
    md: "2.5rem",
    sm: "2rem",
  },

  lg: "1.5rem",
  md: "1rem",
  sm: "0.8rem",
  xs: "0.6rem"
}

export const textWeight = {
  normal: 400,
  light: 100,
  bold: 700,
}

export const font = {
  body: ["Montserrat", "Segoe UI", "sans-serif"],
  heading: ["Quicksand", "Segoe UI", "sans-serif"]
}
