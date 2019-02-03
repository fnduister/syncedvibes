import React, { Component } from "react";
import {
  CommentUserStyled,
  CommentTextStyled,
  FavoriteButton,
  DeleteIconStyled,
  CommentUserDate,
  SmallAvatarStyled,
  CommentDataContainer,
  CommentContainer,
  TimeStamp,
  ReplyButton,
  ReplyButtonsContainer
} from "./styled";
import Moment from "react-moment";
import IconButton from "@material-ui/core/IconButton";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Avatar from "../../images/savage.jpg";
import { Typography } from "@material-ui/core";

class replyComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      reply: false
    };
  }
  toggleFavorite = e => {
    this.setState(state => ({ favorite: !state.favorite }));
    

  };
 
  toggleReply = e => {

    this.setState(state =>  ({ reply: !state.reply})
     

 )};
  render() {
    const { data } = this.props;
    return (
      <CommentContainer>
        <SmallAvatarStyled alt="User Avatar" src={Avatar} />
        <CommentDataContainer>
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
            <ReplyButtonsContainer>
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
              
        <TextField  style={this.state.reply ? {} : { display: 'none' }} 
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
      
          }}/>
              <IconButton>
                <DeleteIconStyled />
              </IconButton>
            </ReplyButtonsContainer>
          </CommentTextStyled>
        </CommentDataContainer>
      </CommentContainer>
    );
  }
}

export default replyComment;
/*  */
