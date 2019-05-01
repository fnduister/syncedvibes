import { createActions, handleActions, combineActions } from "redux-actions";

const defaultState = {
  open: false,
  variant: "success",
  message: ""
};

export const { openNotification, closeNotification } = createActions(
  { OPEN_NOTIFICATION: (message, variant) => ({ message, variant }) },
  "CLOSE_NOTIFICATION"
);

const notificationReducer = handleActions(
  {
    [openNotification]: (state, action) => {
      console.log({ action });
      return {
        ...state,
        open: !state.open,
        message: action.payload.message,
        variant: action.payload.variant
      };
    },
    [closeNotification]: state => ({
      ...state,
      open: !state.open
    })
  },
  defaultState
);

export default notificationReducer;
