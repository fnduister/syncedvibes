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
      commentData: [
        {
          name: "User1",
          text: "Sample Comment 1"
        },
        {
          name: "User2",
          text: "Sample Comment 2"
        }
      ],
      currentComment: {
        name: "",
        email: "",
        comment: ""
      },
      replyData: [
        {
          name: "User1",
          text: "Sample Comment 1"
        },
        {
          name: "User2",
          text: "Sample Comment 2"
        }
      ],
      currentReply: {
        name: "",
        email: "",
        comment: ""
      },
      favorite: false,
      reply: false,
      replySubmitButtonFocused: false
    };
  }
  toggleFavorite = e => {
    this.setState(state => ({ favorite: !state.favorite }));
  };

  toggleReply = e => {
    this.setState(state => ({ reply: !state.reply }));
  };
  handleReplySubmit = e => {
    e.preventDefault();
    console.log("submit");
  };
  showReplySubmitButton = e => {
    this.setState({ replySubmitButtonFocused: true });
  };

  cancelReply = e => {
    this.setState({
      replySubmitButtonFocused: false,
      currentReply: {
        comment: ""
      }
    });
  };

  onchangeText = e => {
    this.setState({ currentReply: { [e.target.name]: e.target.value } });
  };

  render() {
    const {
      data: { user, replies, favorite, date, comment }
    } = this.props;
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
            <IconButton aria-label="Delete" onClick={this.toggleFavorite}>
              <FavoriteButton favorite={favorite} />
            </IconButton>
            <ReplyButton
              id="Reply"
              value="Post"
              type="Reply"
              variant="button"
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
