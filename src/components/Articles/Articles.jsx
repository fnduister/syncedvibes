import React, { Fragment, useState, useEffect, useRef } from 'react';
import Article from '../../components/Article/Article';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Container } from './styled';
import debounce from 'lodash.debounce';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
// import { getSelectedArticles } from './selectors';
import { objectToArrayWithKey } from '../../utils/common';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';

const Articles = ({
  changeQueryArticles,
  onMobile,
  firebase,
  maxArticlesPerPage,
  type,
  types,
  selectedTypes,
  ...restProps
}) => {
  const [images, setImages] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const firstUpdate = useRef(true);
  const articlesRef = useRef();

  useEffect(() => {
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
    // ref.on('child_removed', function(data) {
    //   var deletedPlayer = data.val();
    //   console.log(deletedPlayer + ' has been deleted');
    // });
    // return () => {
    //   if (firstUpdate.current) {
    //     setCurrentArticles([]);
    //     setAllArticles([]);
    //     firstUpdate.current = false;
    //   }
    // };
  }, []);

  const addNewArticle = () => {
    let first = true;
    console.log('calling addNewArticle');

    firebase
      .database()
      .ref('articles/')
      .endAt()
      .limitToLast(1)
      .on('child_added', (snapshot) => {
        if (!first) {
          const newArticle = snapshot.val();
          setAllArticles((prevArticles) => [
            { key: snapshot.key, value: newArticle },
            ...prevArticles,
          ]);
        }
        first = false;
      });
  };

  const fetchFirstArticleBatch = async () => {
    let arrayArticles = [];
    console.log('calling FetchFirst');
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
          setAllArticles((prevArticles) => [...prevArticles, ...arrayArticles]);
        },
        (error) => {
          console.log('Error: ' + error.code);
        },
      );
  };

  const fetchNextArticleBatch = async () => {
    let arrayArticles = [];
    console.log('calling FetchNext');
    await firebase
      .database()
      .ref('articles/')
      .limitToLast(maxArticlesPerPage)
      .orderByChild('date')
      .endAt(allArticles[allArticles.length - 1].value.date)
      .once(
        'value',
        (snapshot) => {
          arrayArticles = objectToArrayWithKey(snapshot.val())
            .reverse()
            .slice(1);
          setAllArticles((prevArticles) => [...prevArticles, ...arrayArticles]);
        },
        (error) => {
          console.log('Error: ' + error.code);
        },
      );
  };

  useEffect(() => {
    updateCurrentArticles();
  }, [selectedTypes, allArticles]);

  const isInFilter = (article) => {
    for (const type of selectedTypes) {
      if (article.value.type === type.key) {
        return true;
      }
    }
    return false;
  };

  const removeArticle = () => {
    firebase
      .database()
      .ref('articles/')
      .on('child_removed', (data) => {
        var deletedPlayer = data.val();
        console.log(deletedPlayer + ' has been deleted');
        console.log(data.key + ' key has been deleted');
        setAllArticles((prevArticles) => prevArticles.filter((article) => 
        {
          console.log("TCL: removeArticle -> prevArticles", prevArticles)
          
          console.log("TCL: removeArticle -> article.key", article.key, data.key);
          return article.key !== data.key
        }));
      });
  };

  const updateCurrentArticles = () => {
    const tempAllArticle = [...allArticles];
    setCurrentArticles(tempAllArticle.filter((article) => isInFilter(article)));
  };

  window.onscroll = debounce(() => {
    if (
      allArticles.length &&
      articlesRef.current &&
      articlesRef.current.clientHeight < document.documentElement.scrollTop
    ) {
      fetchNextArticleBatch();
    }
  }, 100);

  // const loadMoreArticles = () => {
  //   console.log(articles[0].key);
  //   changeQueryArticles(articles[0].value.date);
  // };

  // if (!isLoaded(articles)) {
  //   return <CircularProgress size='50' color='secondary' />;
  // }

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
    </Fragment>
  );
};

const enhance = compose(
  firebaseConnect(),
  connect((state) => ({
    articles: state.firebase.ordered.articles,
  })),
);

export default enhance(Articles);
