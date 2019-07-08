import React, { Fragment, Component } from "react";
import Article from "../../components/Article/Article";
import { connect } from "react-redux";
import { compose } from "redux";
import { Articles } from "./styled";
import SortArticles from "../../components/SortArticles/SortArticles";
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { getSelectedArticles } from "./selectors";
import {
  toggleAudioFilter,
  toggleNewsFilter,
  toggleVideoFilter
} from "./reducer";

class HomePage extends Component {
  // componentWillUpdate
  render() {
    const {
      onMobile,
      articles,
      filters,
      toggleAudioFilterHandler,
      toggleNewsFilterHandler,
      toggleVideoFilterHandler
    } = this.props;

    if (!isLoaded(articles)) {
      return <div>Loading...</div>;
    }
    
    return (
      <Fragment>
        <SortArticles
          toggleAudioFilterHandler={toggleAudioFilterHandler}
          toggleNewsFilterHandler={toggleNewsFilterHandler}
          toggleVideoFilterHandler={toggleVideoFilterHandler}
          filters={filters}
        />
        {isEmpty(articles) ? (
          <div>There's no articles</div>
        ) : (
          <Articles container>
            {console.log("dans le homepage")}
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
                  key={key}
                />
              );
            })}
          </Articles>
        )}
      </Fragment>
    );
  }
}

const mapActions = {
  toggleAudioFilterHandler: () => toggleAudioFilter(),
  toggleNewsFilterHandler: () => toggleNewsFilter(),
  toggleVideoFilterHandler: () => toggleVideoFilter()
};

const enhance = compose(
  firebaseConnect(() => ["articles"]),
  connect(
    state => ({
      articles: getSelectedArticles(state),
      filters: state.global.homepage
    }),
    mapActions
  )
);

export default enhance(HomePage);
