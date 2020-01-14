import React, { Fragment, Component } from 'react';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import CommentSection from '../../containers/CommentSection/CommentSection';
import { Link } from 'react-router-dom';
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
  ArticleGrid,
  ScheduleIconStyled,
  AspectRatio,
} from './styled';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { withHandlers } from 'recompose';
import { firebaseConnect, isLoaded, getVal } from 'react-redux-firebase';

class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, comment: false };
  }
  onPlayerReady = (evt) => {
    evt.target.pauseVideo();
  };

  editHandler = () => {
    this.setState((state) => ({ edit: !state.edit }));
  };

  commentHandler = () => {
    this.setState((state) => ({ comment: !state.comment }));
  };

  parseUrl = (iframeCode) => {
    const regex = /https:\/\/[\w./-]+/g;
    return iframeCode
      .match(regex)[0]
      .split('/')
      .pop();
  };

  render() {
    const opts = {
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return isLoaded(this.props.article) ? (
      <Fragment>
        {console.log('dans articles details')}
        <ArticleGrid item xs={10} md={8} lg={6}>
          <Title variant={this.props.onMobile ? 'h3' : 'h2'} color='secondary'>
            {this.props.article.title}
          </Title>
          <TimeStamp variant='body2' color='textPrimary'>
            <ScheduleIconStyled fontSize='small' />
            <Moment fromNow date={this.props.article.date} />
            {console.log(this.props.article.date)}
          </TimeStamp>
          <MediaContainer>
            {this.props.article.media &&
              this.props.article.media.map((url, index) => (
                <Fragment key={index}>
                  {url.includes('youtube') ? (
                    <AspectRatio>
                      <YoutubeStyled
                        opts={opts}
                        videoId={this.parseUrl(url)}
                        onReady={this.onPlayerReady}
                      />
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
            {ReactHtmlParser(stateToHTML(convertFromRaw(JSON.parse(this.props.article.content))))}
          </ContentStyled>
          {!this.props.profile.isEmpty && this.props.profile.role === 'admin' && (
            <Button color='secondary' type='button' onClick={this.editHandler}>
              edit
            </Button>
          )}

          <Button color='primary' type='button' onClick={this.commentHandler}>
            {this.state.comment ? <KeyboardArrowUpStyled /> : <KeyboardArrowDownStyled />}
            {!this.state.comment ? 'SHOW ' : 'HIDE '}
            comments
          </Button>

          {this.state.comment && (
            <CommentSection
              updateComment={this.props.updateComment}
              comments={this.props.article.comments}
              addComment={this.props.addComment}
            />
          )}
        </ArticleGrid>
        <Dialog
          open={this.state.edit}
          onClose={this.editHandler}
          aria-labelledby='form-dialog-title'
        >
          <AddArticle
            article={this.props.article}
            updateArticle={this.props.updateArticle}
            edit={this.state.edit}
            editHandler={this.editHandler}
          />
        </Dialog>
      </Fragment>
    ) : (
      <CircularProgress size='50' color='secondary' />
    );
  }
}
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
