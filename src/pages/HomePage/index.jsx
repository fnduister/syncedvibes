import React, { Fragment } from "react";
import Article from "../../components/Article/Article";
import { connect } from "react-redux";
import { compose } from "redux";
import { Articles } from "./styled";
import { withStateHandlers } from "recompose";
import SortArticles from "../../components/SortArticles/SortArticles";
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  withFirebase
} from "react-redux-firebase";
import {
  toggleAudioFilter,
  toggleNewsFilter,
  toggleVideoFilter
} from "./reducer";

const HomePage = ({
  onMobile,
  articles,
  filters,
  toggleAudioFilterHandler,
  toggleNewsFilterHandler,
  toggleVideoFilterHandler
}) => {
  if (!isLoaded(articles)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(articles)) {
    return <div>There's no articles</div>;
  }

  console.log({ filters });

  return (
    <Fragment>
      <SortArticles
        toggleAudioFilterHandler
        toggleNewsFilterHandler
        toggleVideoFilterHandler
        filters
      />
      <Articles xs={10} sm={12} lg={10} container>
        {Object.keys(articles).map(key => {
          return (
            <Article
              onMobile={onMobile}
              mediaUrl={articles[key].url}
              title={articles[key].title}
              date={articles[key].date}
              views={articles[key].views}
              thumbnail={articles[key].thumbnail}
              type={articles[key].type}
              id={key}
              key
            />
          );
        })}
      </Articles>
    </Fragment>
  );
};

const mapActions = {
  toggleAudioFilterHandler: () => toggleVideoFilter(),
  toggleNewsFilterHandler: () => toggleNewsFilter(),
  toggleVideoFilterHandler: () => toggleVideoFilter()
};

const enhance = compose(
  firebaseConnect(() => ["articles"]),
  connect(
    state => ({
      articles: state.firebase.data.articles,
      filters: state.global.homepage
    }),
    mapActions
  )
);

export default enhance(HomePage);
