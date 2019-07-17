import React from "react";
import "typeface-roboto";
import ReactDOM from "react-dom";
import history from "./utils/history";
import { create } from "jss";
// import JssProvider from "react-jss/lib/JssProvider";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { createGenerateClassName, jssPreset } from "@material-ui/styles";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import firebase, { rrfConfig } from "./utils/firebase/firebase";
import App from "./containers/App/App.jsx";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle, theme, StyledTheme } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

// const generateClassName = createGenerateClassName();
// const jss = create({
//   ...jssPreset(),
//   insertionPoint: "insertion-point-jss"
// });

const initialState = {};
const store = configureStore(initialState, history);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      {/* <JssProvider jss={jss} generateClassName={generateClassName}> */}
      <ThemeProvider theme={StyledTheme}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <App />
          <GlobalStyle />
        </MuiThemeProvider>
      </ThemeProvider>
      {/* </JssProvider> */}
    </ReactReduxFirebaseProvider>
  </Provider>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
