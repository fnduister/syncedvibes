import React from "react";
import "typeface-roboto";
import ReactDOM from "react-dom";
import history from "./utils/history";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle, theme, StyledTheme } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: "insertion-point-jss"
});

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={StyledTheme}>
        <MuiThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </MuiThemeProvider>
      </ThemeProvider>
    </JssProvider>
  </Provider>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
