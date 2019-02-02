import { combineReducers } from "redux";
import headerReducer from "../Header/reducer";

const globalReducer = combineReducers({
  Header: headerReducer
});

export default globalReducer;
