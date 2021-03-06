/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";
import globalReducer from "./containers/App/reducer";
import { firebaseReducer } from "react-redux-firebase";

/**
 * Merges the main reducer with the router state and dynamically injected reducer
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    global: globalReducer,
    ...injectedReducers
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
