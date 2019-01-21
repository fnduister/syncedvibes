import React, { Fragment } from "react";
import Article from "../../containers/Article/Article";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStateHandlers } from "recompose";
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  withFirebase
} from "react-redux-firebase";

const HomePage = ({ onMobile, articles }) => {
  if (!isLoaded(articles)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(articles)) {
    return <div>Todos List Is Empty</div>;
  }

  return (
    <Fragment>
      {Object.keys(articles).map(key => {
        return (
          <Article
            onMobile={onMobile}
            url={articles[key].url}
            title={articles[key].title}
            time={articles[key].time}
            key={key}
          />
        );
      })}
    </Fragment>
  );
};

const enhance = compose(
  firebaseConnect(() => ["articles"]),
  connect(state => ({ articles: state.firebase.data.articles }))
);

export default enhance(HomePage);
