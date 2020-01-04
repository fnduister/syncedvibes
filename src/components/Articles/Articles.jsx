import React, { Fragment, useState, useEffect, useRef } from 'react';
import Article from '../../components/Article/Article';
import { Container } from './styled';
import debounce from 'lodash.debounce';
import { withFirebase } from 'react-redux-firebase';
// import { getSelectedArticles } from './selectors';
import { objectToArrayWithKey } from '../../utils/common';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Articles = ({
  changeQueryArticles,
  onMobile,
  firebase,
  maxArticlesPerPage,
  searchValue,
  type,
  types,
  selectedTypes,
  ...restProps
}) => {
  const [images, setImages] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [previousQueryValue, setPreviousQueryValue] = useState('');
  const [noMoreFetch, setNoMoreFetch] = useState(false);
  const articlesRef = useRef();

  useEffect(() => {
    console.log('inside articles', searchValue);
  }, [searchValue]);

  useEffect(() => {
    console.log('inside articles', searchValue);
    console.log('calling useEffect');
    fetchFirstArticleBatch();
    addNewArticle();
    setImages(
      firebase
        .storage()
        .ref()
        .child('gifs'),
    );
    removeArticle();
  }, []);

  const addNewArticle = () => {
    let first = true;

    firebase
      .database()
      .ref('articles/')
      .endAt()
      .limitToLast(1)
      .on('child_added', (snapshot) => {
        if (!first) {
          const newArticle = snapshot.val();
          setAllArticles((prevArticles) => {
            //simple hack to prevent adding a deleted element
            //cause firebase call child_added event with delete
            return prevArticles[1].key === snapshot.key
              ? prevArticles
              : [{ key: snapshot.key, value: newArticle }, ...prevArticles];
          });
        }
        first = false;
      });
  };

  const fetchFirstArticleBatch = async () => {
    let arrayArticles = [];
    console.log('calling FetchFirst');
    setIsLoading(true);
    await firebase
      .database()
      .ref('articles/')
      .limitToLast(maxArticlesPerPage)
      .orderByChild('date')
      .once(
        'value',
        (snapshot) => {
          arrayArticles = objectToArrayWithKey(snapshot.val())
            .slice(1)
            .reverse();
          setPreviousQueryValue(arrayArticles[arrayArticles.length - 1].value.date);
          setAllArticles((prevArticles) => [...prevArticles, ...arrayArticles]);
          setIsLoading(false);
        },
        (error) => {
          console.log('Error: ' + error.code);
        },
      );
  };

  const fetchNextArticleBatch = async () => {
    let arrayArticles = [];
    setIsLoading(true);
    console.log("TCL: fetchNextArticleBatch -> previousQueryValue", previousQueryValue)

    await firebase
      .database()
      .ref('articles/')
      .orderByChild('date')
      .endAt(previousQueryValue)
      .limitToLast(maxArticlesPerPage)
      .once(
        'value',
        (snapshot) => {
          arrayArticles = objectToArrayWithKey(snapshot.val())
            .reverse()
            .slice(1);
          if (previousQueryValue === arrayArticles[arrayArticles.length - 1].value.date) {
            setNoMoreFetch(true);
          } else {
            setPreviousQueryValue(arrayArticles[arrayArticles.length - 1].value.date);
            setAllArticles((prevArticles) => [...prevArticles, ...arrayArticles]);
          }
          console.log(isLoading);
          setIsLoading(false)
          
        },
        (error) => {
          console.log('Error: ' + error.code);
        },
      );
  };

  useEffect(() => {
    updateCurrentArticles();
  }, [selectedTypes, allArticles, searchValue]);

  useEffect(() => {
    console.log("TCL: currentArticles", currentArticles)
    // if (!noMoreFetch && allArticles.length !== 0 && currentArticles.length === 0 && articlesRef.current) {
    //   fetchNextArticleBatch();
    // }
  }, [currentArticles])

  const isFilterTitle = (article) => {
    console.log(
      'TCL: isFilterTitle -> article.value.title.includes(searchValue)',
      article.value.title.includes(searchValue),
    );
    console.log('TCL: isFilterTitle -> searchValue', searchValue);
    console.log('TCL: isFilterTitle -> article.value.title', article.value.title);
    return !searchValue
      ? true
      : article.value.title.toLowerCase().includes(searchValue.toLowerCase());
  };

  const isInFilter = (article) => {
    for (const type of selectedTypes) {
      if (article.value.type === type.key) {
        return true;
      }
    }
    return false;
  };

  const removeArticle = () => {
    console.log('ok on test tous les articles', allArticles);
    firebase
      .database()
      .ref('articles/')
      .on('child_removed', (data) => {
        setAllArticles((prevArticles) => {
          console.log('TCL: removeArticle -> prevArticles', prevArticles);
          return prevArticles.filter((article) => {
            return article.key !== data.key;
          });
        });
      });
  };

  const updateCurrentArticles = () => {
    console.log('TCL: updateCurrentArticles -> allArticles', allArticles);
    const tempAllArticle = [...allArticles];

    setCurrentArticles(
      tempAllArticle.filter((article) => isInFilter(article) && isFilterTitle(article)),
    );
  };

  const canScroll = () => {
    return articlesRef.current.clientHeight - 50 < document.documentElement.scrollTop
  }

  window.onscroll = debounce(() => {
    if (
      allArticles.length &&
      articlesRef.current &&
      canScroll()
    ) {
      if (!noMoreFetch) {
        fetchNextArticleBatch();
      }
    }
  }, 100);

  return (
    <Fragment>
      {false ? (
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
                type={types[value.type]}
                removeArticleFromList={15}
                id={key}
                key={key}
              />
            );
          })}
        </Container>
      )}
      {isLoading && <CircularProgress size={50} color='secondary' />}
      {noMoreFetch && <p>There is no more articles!</p>}
    </Fragment>
  );
};

const mapProps = (
  {
    global: {
      searchValue: { value },
    },
  },
  ownProps,
) => ({
  searchValue: value,
});

const enhance = compose(withFirebase, connect(mapProps));

export default enhance(Articles);
