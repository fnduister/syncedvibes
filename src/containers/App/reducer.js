import { combineReducers } from "redux";
import ArticleReducer from "../Article/reducer";

const globalReducer = combineReducers({
  Article: ArticleReducer
});

export default globalReducer;