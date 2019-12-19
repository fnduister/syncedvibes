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
  changeQueryArticles,
  onMobile,
  articles,
  firebase,
  setSelectedTypes,
  type,
  selectedTypes,
}) => {
  const [images, setImages] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const firstUpdate = useRef(true);
  const articlesRef = useRef();

  useEffect(() => {
    let arrayArticles = [];
    console.log('TCL: articles', articles);
    if (articles && articles !== undefined) {
      setImages(
        firebase
          .storage()
          .ref()
          .child('gifs'),
      );
      arrayArticles = objectToArray(articles).slice(1).reverse();
      setAllArticles((prevArticles) => [...prevArticles, ...arrayArticles]);
      updateCurrentArticles();
    }
    return () => {
      if (firstUpdate.current) {
        setCurrentArticles([]);
        setAllArticles([]);
        firstUpdate.current = false;
      }
    };
  }, [articles]);

  useEffect(() => {
    updateCurrentArticles();

    console.log('TCL: selectedTypes', selectedTypes);
    console.log('TCL: selectedTypes', type);
  }, [selectedTypes, allArticles]);

  const isInFilter = (article) => {
    for (const type of selectedTypes) {
      if (article.value.type === type) {
        return true;
      }
    }
    return false;
  };

  const updateCurrentArticles = () => {
    const tempAllArticle = [...allArticles];
    console.log('TCL: updateCurrentArticles -> allArticles', allArticles);
    setCurrentArticles(tempAllArticle.filter((article) => isInFilter(article)));
  };

  window.onscroll = debounce(() => {
    // Bails early if:
    // * there's an error
    // * it's already loading
    // * there's nothing left to load
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
    changeQueryArticles(articles[0].value.date);
  };

  // filtering articles depending on the type selected
  // const filterArticles = (type) => {
  //   if (selectedTypes && type) {
  //     if (selectedTypes.includes(type)) {
  //       setCurrentArticles((prevArticles) =>
  //         prevArticles.filter((article) => article.value.type !== type),
  //       );
  //     } else {
  //       //if we add a type
  //       const newArticlesSelected = allArticles.filter((article) => article.type === type);
  //       setCurrentArticles((prevArticles) => [...prevArticles, ...newArticlesSelected]);
  //     }
  //   }
  //   console.log('TCL: filterArticles -> arrayArticles', allArticles);
  //   console.log(currentArticles);
  // };

  if (!isLoaded(articles)) {
    return <CircularProgress size='50' color='secondary' />;
  }

  return (
    <Fragment>
      {isEmpty(articles) ? (
        <div>There's no articles</div>
      ) : (
        <Container ref={articlesRef} container>
          {currentArticles.map(({ key, value }) => {
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
    console.log('TCL: queries', queries);
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
