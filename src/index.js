import React from "react";
import ReactDOM from "react-dom";
import history from "./utils/history";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
