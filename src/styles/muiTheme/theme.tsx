import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
