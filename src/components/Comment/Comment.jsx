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
        <AvatarContainer>
          {user.avatar ? (
            <AvatarStyled alt="User Avatar" src={user.avatar} />
          ) : (
            <AvatarStyled>{user.avatar}</AvatarStyled>
          )}
        </AvatarContainer>
        <ReplyDataContainer>
          <ReplyUserDate>
            <ReplyUserStyled color="textPrimary" variant="body2">
              {user.username}
            </ReplyUserStyled>
            <TimeStamp variant="body2">
              <Moment fromNow>{date}</Moment>
            </TimeStamp>
          </ReplyUserDate>
          <ReplyTextStyled color="textPrimary" variant="body1">
            {comment}
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
              <IconButton>
                <DeleteIconStyled />
              </IconButton>
            </ReplyButtonsContainer>
            <ReplySectionContainer
              style={this.state.reply ? {} : { display: "none" }}
            >
              <ReplyContainer>
                <ReplyAvatarStyled alt="User Avatar" src={Avatar} />
                <ReplyDataContainer>
                  <ReplyUserDate>
                    <ReplyUserStyled color="textPrimary" variant="body2">
                      {this.state.replyData[0].name}
                    </ReplyUserStyled>
                    <TimeStamp variant="body2">
                      <Moment fromNow>{this.props.date}</Moment>
                    </TimeStamp>
                  </ReplyUserDate>
                  <ReplyTextStyled color="textPrimary" variant="body1">
                    {comment}
                  </ReplyTextStyled>
                </ReplyDataContainer>
              </ReplyContainer>
              <ReplyOptionsContainer>
                <IconButton aria-label="Delete" onClick={this.toggleFavorite}>
                  <FavoriteButton favorite={this.state.favorite} />
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
                <IconButton>
                  <DeleteIconStyled />
                </IconButton>
              </ReplyOptionsContainer>
              <ReplyContainer>
                <ReplyAvatarStyled alt="User Avatar" src={Avatar} />
                <ReplyTextStyled>
                  <ReplyUserDate>
                    <ReplyUserStyled color="textPrimary" variant="body2">
                      {this.state.replyData[1].name}
                    </ReplyUserStyled>
                    <TimeStamp variant="body2">
                      <Moment fromNow>{this.props.date}</Moment>
                    </TimeStamp>
                  </ReplyUserDate>
                  <ReplyTextStyled color="textPrimary" variant="body1">
                    {comment}
                  </ReplyTextStyled>
                </ReplyTextStyled>
              </ReplyContainer>
              <ReplyOptionsContainer>
                <IconButton aria-label="Delete" onClick={this.toggleFavorite}>
                  <FavoriteButton favorite={this.state.favorite} />
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
                <IconButton>
                  <DeleteIconStyled />
                </IconButton>
              </ReplyOptionsContainer>

              <InformationContainer>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextAreaStyled
                      id="Reply"
                      name="Reply"
                      label="Reply"
                      multiline
                      rowsMax="5"
                      rows="1"
                      value={this.state.currentReply.comment}
                      onChange={this.onchangeText}
                      margin="normal"
                      fullWidth
                      onFocus={this.showReplySubmitButton}
                    />

                    {/* <TextField id="input-with-icon-grid" label="With a grid" /> */}
                  </Grid>
                  <Grid Item>
                    {this.state.replySubmitButtonFocused ? (
                      <ButtonContainer>
                        <ButtonStyled
                          variant="contained"
                          color="secondary"
                          id="submit"
                          value="Post"
                          type="submit"
                        >
                          Submit
                        </ButtonStyled>
                        <ButtonStyledTwo
                          id="cancel"
                          value="Clear"
                          type="cancel"
                          onClick={this.cancelReply}
                        >
                          Cancel
                        </ButtonStyledTwo>
                      </ButtonContainer>
                    ) : null}
                  </Grid>
                </Grid>
              </InformationContainer>
            </ReplySectionContainer>
            {/* <TextField id="input-with-icon-grid" label="leave comment" /> */}

            {/* <CommentContainer style={this.state.reply ? {} : { display: "none" }}>
                <SmallAvatarStyled alt="User Avatar" src={Avatar} />
        <CommentDataContainer  >
          <CommentUserDate>
            <CommentUserStyled color="textPrimary" variant="body2">
              {data.user.username}
            </CommentUserStyled>
            <TimeStamp variant="body2">
              <Moment fromNow>{this.props.date}</Moment>
            </TimeStamp>
          </CommentUserDate>
          <CommentTextStyled color="textPrimary" variant="body1">
            {data.comment}
 </CommentTextStyled></ReplyDataContainer></CommentContainer> */}

            {/* <TextField
                  style={this.state.reply ? {} : { display: "none" }}
                  id="input-with-icon-textfield"
                  label="TextField"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                /> */}
          </ReplyTextStyled>
        </ReplyDataContainer>
      </CommentContainer>
    );
  }
}

export default Comment;
/*  */
