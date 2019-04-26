import { combineReducers } from "redux";
import headerReducer from "../Header/reducer";
import homepageReducer from "../../pages/HomePage/reducer";
const globalReducer = combineReducers({
  Header: headerReducer,
  homepage: homepageReducer
});

export default globalReducer;
