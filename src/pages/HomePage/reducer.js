import { createActions, handleActions, combineActions } from "redux-actions";

const defaultState = {
  videoFilter: false,
  audioFilter: false,
  newsFilter: false
};

export const {
  toggleVideoFilter,
  toggleNewsFilter,
  toggleAudioFilter
} = createActions(
  "TOGGLE_VIDEO_FILTER",
  "TOGGLE_AUDIO_FILTER",
  "TOGGLE_NEWS_FILTER"
);

const homepageReducer = handleActions(
  {
    [toggleVideoFilter]: state => ({
      ...state,
      videoFilter: !state.videoFilter
    }),
    [toggleAudioFilter]: state => ({
      ...state,
      audioFilter: !state.audioFilter
    }),
    [toggleNewsFilter]: state => ({
      ...state,
      newsFilter: !state.newsFilter
    }),
  },
  defaultState
);

export default homepageReducer;
