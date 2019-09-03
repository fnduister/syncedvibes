import React, { Fragment, useState, useEffect } from "react";
import Article from "../../components/Article/Article";
import { connect } from "react-redux";
import { compose } from "redux";
import { Articles } from "./styled";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { getSelectedArticles } from "./selectors";
import {
  toggleAudioFilter,
  toggleNewsFilter,
  toggleVideoFilter
} from "./reducer";
import { objectToArray } from "../../utils/common";

const HomePage = ({ onMobile, articles, settings }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  // const [arrayArticles, setArrayArticles] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  let arrayArticles = [];

  //filtering articles depending on the type selected
  const updateSelectedArticles = type => {
    //if we remove a type
    arrayArticles = objectToArray(articles);

    console.log({ selectedTypes, type, arrayArticles });
    if (selectedTypes.includes(type)) {
      setSelectedTypes(prevTypes =>
        prevTypes.filter(currentType => currentType !== type)
      );
      setCurrentArticles(prevArticles =>
        prevArticles.filter(article => article.type !== type)
      );
    } else {
      //if we add a type
      setSelectedTypes(prevTypes => [...prevTypes, type]);
      console.log({ arrayArticles, articles });

      const newArticlesSelected = arrayArticles.filter(
        article => article.type === type
      );

      setCurrentArticles(prevArticles => [
        ...prevArticles,
        ...newArticlesSelected
      ]);
    }
    //   console.log("remove article", "%c", "background: #222; color: pink");
    //   console.log({ selectedTypesSecond: selectedTypes });
    // } else {
    //   //if we add a type
    //   console.log("add article", "background: #222; color: #bada55");

    //   setSelectedTypes(prevTypes => prevTypes.push(type));
    //   console.log({ arrayArticles, articles });
    // }
  };

  if (!isLoaded(articles, settings)) {
    return <div>Loading...</div>;
  }

  // if (isLoaded(articles, settings)) {
  if (firstRender && articles !== undefined && settings !== undefined) {
    setFirstRender(false);
    arrayArticles = objectToArray(articles);
    setCurrentArticles(arrayArticles);
    setSelectedTypes(settings.types);
  }

  return (
    <Fragment>
      <FilterButtons
        updateSelectedArticles={updateSelectedArticles}
        types={settings.types}
      />
      {isEmpty(articles) ? (
        <div>There's no articles</div>
      ) : (
        <Articles container>
          {console.log("dans le homepage")}
          {currentArticles.map(article => {
            return (
              <Article
                onMobile={onMobile}
                mediaUrl={article.url}
                title={article.title}
                date={article.date}
                views={article.views}
                thumbnail={article.thumbnail}
                type={article.type}
                id={article.key}
                key={article.key}
              />
            );
          })}
        </Articles>
      )}
    </Fragment>
  );
};

// };

const enhance = compose(
  firebaseConnect(() => ["articles", "settings/types"]),
  connect(state => ({
    articles: getSelectedArticles(state),
    settings: state.firebase.data.settings
  }))
);

export default enhance(HomePage);
