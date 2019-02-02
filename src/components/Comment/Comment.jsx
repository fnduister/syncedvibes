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

import Avatar from "../../images/savage.jpg";
import { Typography } from "@material-ui/core";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentReply: [
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
      favorite: false
    };
  }
  toggleFavorite = e => {
    this.setState(state => ({ favorite: !state.favorite }));
  };
  reply = e => {};

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
                onClick={this.reply}
              >
                Reply
              </ReplyButton>
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

export default Comment;
/*  */
