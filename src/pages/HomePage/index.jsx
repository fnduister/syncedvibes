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
  const [images, setImages] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  // const [arrayArticles, setArrayArticles] = useState([]);
  let arrayArticles = [];

  useEffect(() => {
    console.log('TCL: articles', articles, settings);
    if (articles && articles !== undefined && settings !== undefined) {
      setImages(
        firebase
          .storage()
          .ref()
          .child('gifs'),
      );

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
      {isEmpty(articles) ? (
        <div>There's no articles</div>
      ) : (
        <Articles container>
          {currentArticles
            .map(({ key, value }) => {
              return (
                <Article
                  firebase={firebase}
                  onMobile={onMobile}
                  mediaUrl={value.url}
                  title={value.title}
                  date={value.date}
                  image={images.child(value.thumbnail)}
                  views={value.views}
                  thumbnail={value.thumbnail}
                  type={value.type}
                  id={value.key}
                  key={key}
                />
              );
            })
            .reverse()}
        </Articles>
      )}
    </Fragment>
  );
};

// };

const enhance = compose(
  firebaseConnect(() => [
    { path: 'articles', queryParams: ['orderByChild=date', 'limitToFirst=20'] },
    { path: 'settings/types' },
  ]),
  connect((state) => ({
    articles: state.firebase.ordered.articles,
    settings: state.firebase.data.settings,
  })),
);

export default enhance(HomePage);
