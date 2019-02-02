import React, { Component } from "react";
import {
  CommentUserStyled,
  CommentTextStyled,
  Fav,
  SmallAvatarStyled,
  CommentDataContainer,
  CommentContainer,
  TimeStamp
} from "./styled";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "../../images/savage.jpg";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }
  toggleFavorite = e => {
    this.setState(state => ({ favorite: !state.favorite }));
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
