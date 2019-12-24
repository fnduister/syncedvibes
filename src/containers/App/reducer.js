import { combineReducers } from "redux";
import headerReducer from "../Header/reducer";
import homepageReducer from "../../pages/HomePage/reducer";
import notificationReducer from "../../components/Notification/reducer";
import searchReducer from "../../components/Search/reducer";

const globalReducer = combineReducers({
  Header: headerReducer,
  homepage: homepageReducer,
  notification: notificationReducer,
  searchValue: searchReducer,
});

export default globalReducer;
