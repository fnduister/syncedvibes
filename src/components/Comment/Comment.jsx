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
  ReplyContainer,
  ReplyAvatarStyled,
  ReplyOptionsContainer,
  InformationContainer,
  TextAreaStyled,
  AvatarContainer,
  AvatarStyled,
  ButtonStyledTwo,
  ButtonStyled,
  ButtonContainer,
  ReplySectionContainer
} from "./styled";
import Moment from "react-moment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Avatar from "../../images/savage.jpg";
import { Typography } from "@material-ui/core";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      reply: false,
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
              onClick={this.toggleReply}
            >
              Reply
            </ReplyButton>
            {/* <IconButton>
              <DeleteIconStyled />
            </IconButton> */}
          </ReplyButtonsContainer>
          <ReplySectionContainer
            style={this.state.reply ? {} : { display: "none" }}
          />
        </ReplyDataContainer>
      </CommentContainer>
    );
  }
}

export default Comment;
/*  */
