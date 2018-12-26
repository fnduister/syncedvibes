import { combineReducers } from "redux";
import ArticleReducer from "../Article/reducer";
import headerReducer from "../Header/reducer";

const globalReducer = combineReducers({
  Article: ArticleReducer,
  Header: headerReducer
});

export default globalReducer;
