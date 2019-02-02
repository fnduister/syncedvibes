import React, { Component } from "react";
import {
  CommentUserStyled,
  CommentTextStyled,
  Fav,
  SmallAvatarStyled,
  CommentDataContainer,
  CommentContainer,
  TimeStamp,
  ReplyButton,
} from "./styled";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "../../images/savage.jpg";

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
  reply = e =>{
    
  };

  render() {
    const { data } = this.props;
    return (
      <CommentContainer>
        <SmallAvatarStyled alt="User Avatar" src={Avatar} />
        <CommentDataContainer>
          <CommentUserStyled color="textPrimary">
            {data.name}
            <TimeStamp fromNow>{this.props.date}</TimeStamp>
          </CommentUserStyled>
          <CommentTextStyled color="textPrimary">
            {data.text}
            <IconButton aria-label="Delete" onClick={this.toggleFavorite}>
              <Fav favorite={this.state.favorite} />
            </IconButton>
            <ReplyButton
                    id="Reply"
                    value="Post"
                    type="Reply"
                    onClick={this.reply}
                  >
                  Reply</ReplyButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CommentTextStyled>
        </CommentDataContainer>
      </CommentContainer>
    );
  }
}

export default Comment;
/*  */
