import { DefaultTheme } from 'styled-components'


const defaultTheme: DefaultTheme = {
  borderRadius: {
    small: "4px",
    medium: "10px",
    // rounded: "50%",
  },
  palette: {
    common: {
      white: "#FFF",
      black: "#000"
    },
    primary: {
      darker: "#C4C4C4",
      main: "#F9F9F9",
      light: ""
    },
    secondary: {
      darker: "",
      main: "rgba(0,0,0,0.15)",
      light: "rgba(0,0,0,0.07)",
    },
  }
}
export default defaultTheme