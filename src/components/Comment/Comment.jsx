import React, { Component } from "react";
import {
  ReplyUserStyled,
  KeyboardArrowUpStyled,
  ReplyTextStyled,
  FavoriteButton,
  ReplyUserDate,
  ReplyDataContainer,
  CommentContainer,
  TimeStamp,
  ReplyButton,
  ReplyButtonsContainer,
  AvatarStyled,
  KeyboardArrowDownStyled,
  ViewReplies
} from "./styled";
import Moment from "react-moment";
import IconButton from "@material-ui/core/IconButton";
import AddCommentFormik from "../Forms/AddCommentFormik/AddCommentFormik";
import CommentList from "../CommentList/CommentList";
import { connect } from "react-redux";
import { withHandlers } from "recompose";
import { compose } from "redux";
import { withRouter } from "react-router";
import { withFirebase } from "react-redux-firebase";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      favoriteList: [],
      addReply: false,
      showReplies: false,
      replySubmitButtonFocused: false
    };
  }

  componentDidMount() {
    if (this.props.profile.hasOwnProperty("comments")) {
      this.setState({ favoriteList: this.props.profile.comments.favorites });
      if (this.props.profile.comments.favorites.includes(this.props.commentId))
        this.setState({ favorite: true });
    }
  }

  render() {
    const {
      data: { user, replies, favorite, date, comment },
      commentId,
      updateComment,
      firebase
    } = this.props;

    const toggleFavorite = () => {
      this.setState(state => ({ favorite: !state.favorite }));
      let newFavorite;
      if (this.state.favorite) {
        newFavorite = favorite - 1;
        console.log({ state: this.state, commentId });
        this.state.favoriteList = this.state.favoriteList.filter(
          id => id !== commentId
        );

        console.log({ newState: this.state, commentId });
      } else {
        // newFavorite = [...favorites, commentId];
        this.setState({
          favoriteList: this.state.favoriteList.push(commentId)
        });
        newFavorite = favorite + 1;
      }
      updateComment({ ...this.props.data, favorite: newFavorite }, commentId);
      firebase.updateProfile({
        comments: { favorites: this.state.favoriteList }
      });
    };

    const toggleReply = () => {
      this.setState(state => ({ addReply: !state.addReply }));
    };

    const handleCommentForm = async reply => {
      await this.props.addReply(reply, commentId);
      toggleReply();
    };

    const handleRepliesVisibility = () => {
      this.setState(state => ({ showReplies: !state.showReplies }));
    };

    return (
      <CommentContainer>
        {user.avatarUrl ? (
          <AvatarStyled alt="User Avatar" src={user.avatarUrl} />
        ) : (
          <AvatarStyled>{user.avatar}</AvatarStyled>
        )}
        <ReplyDataContainer>
          <ReplyUserDate>
            <ReplyUserStyled color="textPrimary" variant="body2">
              {user.displayName}
            </ReplyUserStyled>
            <TimeStamp variant="body2">
              <Moment fromNow>{date}</Moment>
            </TimeStamp>
          </ReplyUserDate>
          <ReplyTextStyled color="textPrimary" variant="body1">
            {comment}
          </ReplyTextStyled>
          <ReplyButtonsContainer>
            <IconButton aria-label="Favorite" onClick={toggleFavorite}>
              <FavoriteButton favorite={this.state.favorite ? "red" : "grey"} />
            </IconButton>
            <span>{favorite}</span>
            <ReplyButton
              id="Reply"
              value="Post"
              type="button"
              variant="text"
              onClick={toggleReply}
            >
              Reply
            </ReplyButton>
            {/* <IconButton>
              <DeleteIconStyled />
            </IconButton> */}
          </ReplyButtonsContainer>

          {replies ? (
            !this.state.showReplies ? (
              <ViewReplies size="small" onClick={handleRepliesVisibility}>
                Show replies
                <KeyboardArrowDownStyled />
              </ViewReplies>
            ) : (
              <ViewReplies size="small" onClick={handleRepliesVisibility}>
                Hide replies
                <KeyboardArrowUpStyled />
              </ViewReplies>
            )
          ) : null}
          {this.state.showReplies && (
            <CommentList smaller comments={replies} parentId={commentId} />
          )}
          {this.state.addReply ? (
            <AddCommentFormik
              smaller
              profile={this.props.profile}
              auth={this.props.auth}
              addComment={handleCommentForm}
            />
          ) : null}
        </ReplyDataContainer>
      </CommentContainer>
    );
  }
}

const enhance = compose(
  withFirebase,
  connect(({ firebase: { profile, auth } }) => ({
    profile,
    auth
  })),
  withHandlers({
    addReply: props => (reply, commentId) =>
      props.firebase.push(
        `articles/${
          props.match.params.articleId
        }/comments/${commentId}/replies`,
        reply
      )
  })
);
export default withRouter(enhance(Comment));
