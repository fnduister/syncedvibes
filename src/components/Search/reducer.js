import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  searchValue: '',
};

export const { setSearchValue } = createActions('SET_SEARCH_VALUE');

const searchReducer = handleActions(
  {
    [setSearchValue]: (state, { payload }) => {
      return {
        ...state,
        value: payload,
      };
    },
  },
  defaultState,
);

export default searchReducer;
