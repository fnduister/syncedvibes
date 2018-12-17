import { createActions, handleActions, combineActions } from "redux-actions";

const defaultState = {
  author: {},
  date: 0,
  content: {},
  title: {}
};

const { updateArticle, createArticle } = createActions(
  "UPDATE_ARTICLE",
  "CREATE_ARTICLE"
);

const ArticleReducer = handleActions(
  {
    [updateArticle]: (
      state,
      { payload: { author, date, content, title } }
    ) => ({ ...state }),
    [createArticle]: state => ({ ...state })
  },
  defaultState
);

export default ArticleReducer;
