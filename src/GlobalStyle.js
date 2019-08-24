import { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { indigo, deepPurple } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: indigo,
    secondary: deepPurple,
    action: {
      hover: "#89b73a"
    },
    default: "red"
  }
});

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin:0px;
  }

  body {
    font-family: 'Roboto','Helvetica Neue', Helvetica, Arial, sans-serif;
    color:#000;
    background-color: #fafafa;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    color:#fff
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export const viewport = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const StyledTheme = {
  breakpoints: viewport
};
