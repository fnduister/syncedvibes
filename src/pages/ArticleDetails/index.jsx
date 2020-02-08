import React, { Fragment, useState, useEffect } from 'react';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import CommentSection from '../../containers/CommentSection/CommentSection';
import Dialog from '@material-ui/core/Dialog';
import AddArticle from '../../components/AddArticle/AddArticle';
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  YoutubeStyled,
  Title,
  KeyboardArrowDownStyled,
  KeyboardArrowUpStyled,
  TimeStamp,
  MediaContainer,
  ContentStyled,
  PrevNextContainer,
  Prev,
  Next,
  ArticleGrid,
  ScheduleIconStyled,
  AspectRatio,
} from './styled';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { connect } from 'react-redux';
import { withHandlers } from 'recompose';
import { firebaseConnect, isLoaded, getVal } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { objectToArrayWithKey } from '../../utils/common';

const ArticleDetails = (props) => {
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  const onPlayerReady = (evt) => {
    evt.target.pauseVideo();
  };

  const editHandler = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const commentHandler = () => {
    setComment((prevComment) => !prevComment);
  };

  useEffect(() => {
    fetchNextArticleBatch();
    fetchPreviousArticleBatch();
  }, [props.article]);

  const fetchNextArticleBatch = async () => {
    let arrayArticles = [];
    if (props.article) {
      await props.firebase
        .database()
        .ref('articles/')
        .orderByChild('date')
        .endAt(props.article.date)
        .limitToLast(2)
        .once(
          'value',
          (snapshot) => {
            arrayArticles = objectToArrayWithKey(snapshot.val());
            if (arrayArticles.length > 1) {
              if (arrayArticles[0].value.date.localeCompare(props.article.date)) {
                setNext(arrayArticles[0]);
              } else {
                setNext(arrayArticles[1]);
              }
            }
          },
          (error) => {
            console.error('Error: ' + error.code);
          },
        );
    }
  };

  const fetchPreviousArticleBatch = async () => {
    let arrayArticles = [];
    if (props.article) {
      await props.firebase
        .database()
        .ref('articles/')
        .orderByChild('date')
        .startAt(props.article.date)
        .limitToFirst(2)
        .once(
          'value',
          (snapshot) => {
            arrayArticles = objectToArrayWithKey(snapshot.val());
            if (arrayArticles.length > 1) {
              if (arrayArticles[0].value.date.localeCompare(props.article.date)) {
                setPrevious(arrayArticles[0]);
              } else {
                setPrevious(arrayArticles[1]);
              }
            }
          },
          (error) => {
            console.error('Error: ' + error.code);
          },
        );
    }
  };

  const parseUrl = (iframeCode) => {
    const regex = /https:\/\/[\w./-]+/g;
    return iframeCode
      .match(regex)[0]
      .split('/')
      .pop();
  };

  const opts = {
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return isLoaded(props.article) ? (
    <Fragment>
      <ArticleGrid item xs={10} md={8} lg={6}>
        <Title variant={props.onMobile ? 'h3' : 'h2'} color='secondary'>
          {props.article.title}
        </Title>
        <TimeStamp variant='body2' color='textPrimary'>
          <ScheduleIconStyled fontSize='small' />
          <Moment fromNow date={props.article.date} />
        </TimeStamp>
        <MediaContainer>
          {props.article.media &&
            props.article.media.map((url, index) => (
              <Fragment key={index}>
                {url.includes('youtube') ? (
                  <AspectRatio>
                    <YoutubeStyled opts={opts} videoId={parseUrl(url)} onReady={onPlayerReady} />
                  </AspectRatio>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: url }} />
                )}
              </Fragment>
            ))}
        </MediaContainer>
        <ContentStyled>
          {/* on recuperer une version json du content, alors on le parse
            ensuite on le convertie en stateContent pour draft, 
            ensuite on le transforme en text, et pour finir, on convertie le text en html
            */}
          {ReactHtmlParser(stateToHTML(convertFromRaw(JSON.parse(props.article.content))))}
        </ContentStyled>
        {!props.profile.isEmpty && props.profile.role === 'admin' && (
          <Button color='secondary' type='button' onClick={editHandler}>
            edit
          </Button>
        )}

        <PrevNextContainer>
          {previous && (
            <Prev component={Link} variant='contained' to={`/article/${previous.key}`}>
              <KeyboardArrowLeft size='medium' />
              {previous.value.title}
            </Prev>
          )}
          {next && (
            <Next component={Link} variant='contained' to={`/article/${next.key}`}>
              {next.value.title}
              <KeyboardArrowRight size='medium' />
            </Next>
          )}
        </PrevNextContainer>

        <Button color='primary' type='button' onClick={commentHandler}>
          {comment ? <KeyboardArrowUpStyled /> : <KeyboardArrowDownStyled />}
          {!comment ? 'SHOW ' : 'HIDE '}
          comments
        </Button>

        {comment && (
          <CommentSection
            updateComment={props.updateComment}
            comments={props.article.comments}
            addComment={props.addComment}
          />
        )}
      </ArticleGrid>
      <Dialog open={edit} onClose={editHandler} aria-labelledby='form-dialog-title'>
        <AddArticle
          article={props.article}
          updateArticle={props.updateArticle}
          edit={edit}
          editHandler={editHandler}
        />
      </Dialog>
    </Fragment>
  ) : (
    <CircularProgress size='50' color='secondary' />
  );
};

const enhance = compose(
  firebaseConnect((props) => [
    `articles/${props.match.params.articleId}`,
    'settings', // equivalent string notation
  ]),
  connect(({ firebase }, props) => ({
    article: getVal(firebase, `data/articles/${props.match.params.articleId}`), // lodash's get can also be used
    profile: firebase.profile,
  })),
  withHandlers({
    updateComment: (props) => (comment, commentId) =>
      props.firebase.update(
        `articles/${props.match.params.articleId}/comments/${commentId}`,
        comment,
      ),
    addComment: (props) => (comment) =>
      props.firebase.push(`articles/${props.match.params.articleId}/comments`, comment),
    updateArticle: (props) => (article) =>
      props.firebase.update(`articles/${props.match.params.articleId}`, article),
  }),
);

export default enhance(ArticleDetails);
