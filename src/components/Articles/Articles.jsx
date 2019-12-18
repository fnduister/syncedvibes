import React, { Fragment, useState, useEffect, useRef } from 'react';
import Article from '../../components/Article/Article';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Container } from './styled';
import debounce from 'lodash.debounce';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
// import { getSelectedArticles } from './selectors';
import { objectToArray } from '../../utils/common';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';

const Articles = ({
  changeStartArticles,
  onMobile,
  articles,
  firebase,
  setSelectedTypes,
  type,
  selectedTypes,
}) => {
  const [images, setImages] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const firstUpdate = useRef(true);
  const articlesRef = useRef();
  let arrayArticles = [];

  useEffect(() => {
    console.log('TCL: articles', articles);
    if (articles && articles !== undefined) {
      setImages(
        firebase
          .storage()
          .ref()
          .child('gifs'),
      );
      if(firstUpdate.current){
        setCurrentArticles([]);
        firstUpdate.current = false;
      }
      arrayArticles = objectToArray(articles);
      console.log('TCL: arrayArticles', arrayArticles);
      updateSelectedArticles(arrayArticles.slice(1).reverse());
    }
  }, [articles]);

  window.onscroll = debounce(() => {
    // Bails early if:
    // * there's an error
    // * it's already loading
    // * there's nothing left to load
    if (isLoading || !hasMore) return;
    // Checks that the page has scrolled to the bottom
    if (
      articlesRef.current &&
      articlesRef.current.clientHeight < document.documentElement.scrollTop
    ) {
      loadMoreArticles();
    }
  }, 100);

  const loadMoreArticles = () => {
    console.log(articles[0].key);
    changeStartArticles(articles[0].value.date);
  };

  const updateSelectedArticles = (newArray) => {
    setCurrentArticles((prevArticles) => [...prevArticles, ...newArray]);
  };

  //filtering articles depending on the type selected
  //   const filterArticles = (type) => {
  //     //if we remove a type
  //     if (articles) {
  //       arrayArticles = objectToArray(articles);
  //     }

  //     if (selectedTypes.includes(type)) {
  //       setSelectedTypes((prevTypes) => prevTypes.filter((currentType) => currentType !== type));
  //       setCurrentArticles((prevArticles) => prevArticles.filter((article) => article.type !== type));
  //     } else {
  //       //if we add a type
  //       setSelectedTypes((prevTypes) => [...prevTypes, type]);
  //       const newArticlesSelected = arrayArticles.filter((article) => article.type === type);
  //       setCurrentArticles((prevArticles) => [...prevArticles, ...newArticlesSelected]);
  //     }
  //   };

  if (!isLoaded(articles)) {
    return <CircularProgress size='50' color='secondary' />;
  }

  return (
    <Fragment>
      {isEmpty(articles) ? (
        <div>There's no articles</div>
      ) : (
        <Container ref={articlesRef} container>
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
            })}
        </Container>
      )}
    </Fragment>
  );
};

// };

const enhance = compose(
  firebaseConnect(({ startAt, limit, queries }) => {
  console.log("TCL: queries", queries)
    return [
      {
        path: 'articles',
        type: 'once',
        queryParams: queries,
      },
    ];
  }),
  connect((state) => ({
    articles: state.firebase.ordered.articles,
  })),
);

export default enhance(Articles);
