import React, { Fragment } from "react";
import Article from "../../components/Article/Article";
import { connect } from "react-redux";
import { compose } from "redux";
import { Articles } from "./styled";
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
    <Articles xs={12} sm={9} container>
      {Object.keys(articles).map(key => {
        return (
          <Article
            onMobile={onMobile}
            content={articles[key].content}
            url={articles[key].url}
            title={articles[key].title}
            date={articles[key].date}
            key={key}
          />
        );
      })}
    </Articles>
  );
};

const enhance = compose(
  firebaseConnect(() => ["articles"]),
  connect(state => ({ articles: state.firebase.data.articles }))
);

export default enhance(HomePage);
