import { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: deepPurple,
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
    default:'#fff'
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
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color:#fff;
    background-color: #fafafa;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
