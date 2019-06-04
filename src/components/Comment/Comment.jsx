import React, { Component } from "react";
import {
  ReplyUserStyled,
  ReplyTextStyled,
  FavoriteButton,
  DeleteIconStyled,
  ReplyUserDate,
  SmallAvatarStyled,
  ReplyDataContainer,
  CommentContainer,
  TimeStamp,
  ReplyButton,
  ReplyButtonsContainer,
  AvatarStyled,
  ViewReplies
} from "./styled";
import Moment from "react-moment";
import IconButton from "@material-ui/core/IconButton";
import AddCommentFormik from "../Forms/AddCommentFormik/AddCommentFormik";
import CommentList from "../CommentList/CommentList";
import Avatar from "../../images/savage.jpg";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      addReply: false,
      replySubmitButtonFocused: false
    };
  }

  render() {
    const {
      data: { user, replies, favorite, date, comment },
      commentId,
      updateComment
    } = this.props;

    const toggleFavorite = e => {
      this.setState(state => ({ favorite: !state.favorite }));
      let newFavorite = this.state.favorite ? favorite + 1 : favorite - 1;
      updateComment({ ...this.props.data, favorite: newFavorite }, commentId);
    };

    const toggleReply = () => {
      this.setState(state => ({ addReply: !state.addReply }));
    };

    const handleCommentForm = reply => {
      const newReplies = { ...replies, reply };
      this.props.updateComment({ ...comment, newReplies }, commentId);
      console.log("TCL: Comment -> render -> newReplies", newReplies);

      // toggleReply();
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
            <IconButton aria-label="Delete" onClick={toggleFavorite}>
              <FavoriteButton favorite={this.state.favorite} />
            </IconButton>
            <span>{favorite}</span>
            <ReplyButton
              id="Reply"
              value="Post"
              type="Reply"
              variant="text"
              onClick={toggleReply}
            >
              Reply
            </ReplyButton>
            {/* <IconButton>
              <DeleteIconStyled />
            </IconButton> */}
          </ReplyButtonsContainer>
          <ViewReplies style={this.state.reply ? {} : { display: "none" }}>
            {replies ? <commentList comments={replies} /> : "view replies"}
          </ViewReplies>
          {this.state.addReply ? (
            <AddCommentFormik
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

const enhance = connect(({ firebase: { profile, auth } }) => ({
  profile,
  auth
}));
export default enhance(Comment);
/*  */
