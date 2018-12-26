import { createActions, handleActions, combineActions } from "redux-actions";

const defaultState = {
  openMenu: false,
  websiteTitle: "",
  websiteSubtitle: ""
};

export const { toggleMenu } = createActions("TOGGLE_MENU");

const headerReducer = handleActions(
  {
    [toggleMenu]: state => ({
      ...state,
      openMenu: !state.openMenu
    })
  },
  defaultState
);

export default headerReducer;
