import React, { Fragment, Component } from "react";
import {
  CommentUserStyled,
  CommentTextStyled,
  Form,
  Container,
  AvatarContainer,
  AvatarCenterContainer,
  TextAreaStyled,
  InformationContainer,
  ButtonStyled,
  ButtonStyledTwo,
  ButtonContainer,
  Favorite,
  AvatarStyled,
  SmallAvatarStyled,
  CommentDataContainer,
  CommentContainer,
  TimeStamp
} from "./styled";
import Typography from "@material-ui/core/Typography";
import Avatar from "../../images/savage.jpg";
import Moment from "react-moment";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
class CommentSec extends Component {
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
      submitButtonFocused: false,
      favorite: false
    };
  }

  handleCommentSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };
  showSubmitButton = e => {
    this.setState({ submitButtonFocused: true });
  };

  toggleFavorite = e => {
    e.target.styles.color = "red";
  };
  cancelComment = e => {
    this.setState({
      submitButtonFocused: false,
      currentComment: {
        comment: ""
      }
    });
  };

  onchangeText = e => {
    this.setState({ currentComment: { [e.target.name]: e.target.value } });
  };

  render() {
    return (
      <Container>
        <Form autoComplete="off" onSubmit={this.handleCommentSubmit}>
          <AvatarContainer>
            <AvatarCenterContainer>
              <AvatarStyled alt="User Avatar" src={Avatar} />
            </AvatarCenterContainer>
            <InformationContainer>
              <TextAreaStyled
                id="Comment"
                name="comment"
                label="Comment"
                multiline
                rowsMax="5"
                rows="1"
                value={this.state.currentComment.comment}
                onChange={this.onchangeText}
                margin="normal"
                fullWidth
                onFocus={this.showSubmitButton}
              />

              {this.state.submitButtonFocused ? (
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
                    value="Post"
                    type="cancel"
                    onClick={this.cancelComment}
                  >
                    Cancel
                  </ButtonStyledTwo>
                </ButtonContainer>
              ) : null}
            </InformationContainer>
          </AvatarContainer>
        </Form>

        {this.state.commentData.map(data => (
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
                    {/* {this.state.fovrite ? ( ) : null ()} */}
                    <Favorite favorite={this.state.favorite} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </CommentTextStyled>
              </CommentDataContainer>
            </CommentContainer>
        ))}
      </Container>
    );
  }
}

export default CommentSec;
