import { React, Component } from "react";
import {
  CommentUserStyled,
  CommentTextStyled,
  Favorite,
  SmallAvatarStyled,
  CommentDataContainer,
  CommentContainer,
  TimeStamp
} from "./styled";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "../../images/savage.jpg";
import Comment from "../../components/";


class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }
  toggleFavorite = e => {
    e.target.styles.color = "red";
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
              <Favorite favorite={this.state.favorite} />
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
