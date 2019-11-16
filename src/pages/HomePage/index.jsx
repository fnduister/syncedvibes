import React, { Fragment, useState, useEffect } from 'react';
import Article from '../../components/Article/Article';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Articles } from './styled';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { getSelectedArticles } from './selectors';
import { objectToArray } from '../../utils/common';
import moment from 'moment';

const HomePage = ({ onMobile, articles, settings, firebase }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  // const [arrayArticles, setArrayArticles] = useState([]);
  let arrayArticles = [];

  useEffect(() => {
    console.log('TCL: articles', articles, settings);
    if (articles && articles !==undefined && settings !== undefined) {
      arrayArticles = objectToArray(articles);
      setCurrentArticles(arrayArticles);
      setSelectedTypes(settings.types);
    }
  }, [articles, settings]);

  //filtering articles depending on the type selected
  const updateSelectedArticles = (type) => {
    //if we remove a type
    if (articles) {
      arrayArticles = objectToArray(articles);
    }

    if (selectedTypes.includes(type)) {
      setSelectedTypes((prevTypes) => prevTypes.filter((currentType) => currentType !== type));
      setCurrentArticles((prevArticles) => prevArticles.filter((article) => article.type !== type));
    } else {
      //if we add a type
      setSelectedTypes((prevTypes) => [...prevTypes, type]);

      const newArticlesSelected = arrayArticles.filter((article) => article.type === type);

      setCurrentArticles((prevArticles) => [...prevArticles, ...newArticlesSelected]);
    }
  };

  if (!isLoaded(articles, settings)) {
    return <div>Loading...</div>;
  }

  // if (isLoaded(articles, settings)) {

  return (
    <Fragment>
      <FilterButtons updateSelectedArticles={updateSelectedArticles} types={settings.types} />
      {console.log(currentArticles)}
      {isEmpty(articles) ? (
        <div>There's no articles</div>
      ) : (
        <Articles container>
          {console.log('dans le homepage')}
          {currentArticles.map((article) => {
            return (
              <Article
                firebase={firebase}
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
  firebaseConnect(() => [
    { path: 'articles', queryParams: ['orderByChild=date'] },
    { path: 'settings/types' },
  ]),
  connect((state) => ({
    articles: getSelectedArticles(state),
    settings: state.firebase.data.settings,
  })),
);

export default enhance(HomePage);
