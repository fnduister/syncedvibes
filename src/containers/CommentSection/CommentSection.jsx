import React, { Component } from "react";
import {
  Form,
  Container,
  AvatarContainer,
  AvatarCenterContainer,
  TextAreaStyled,
  InformationContainer,
  ButtonStyled,
  ButtonStyledTwo,
  ButtonContainer,
  AvatarStyled
} from "./styled";
import { compose } from "redux";
import {
  firebaseConnect,
  withFirebase,
  isLoaded,
  getVal
} from "react-redux-firebase";
import Avatar from "../../images/savage.jpg";
import Comment from "../../components/Comment/Comment";
import { connect } from "react-redux";

class CommentSection extends Component {
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
              {this.props.profile.avatarUrl ? (
                <AvatarStyled
                  alt="User Avatar"
                  src={this.props.profile.avatarUrl}
                />
              ) : (
                <AvatarStyled>{this.props.profile.avatar}</AvatarStyled>
              )}
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

        {Object.keys(this.props.comments).map(key => (
          <Comment key={key} data={this.props.comments[key]} />
        ))}
      </Container>
    );
  }
}

const enhance = compose(connect(({ firebase: { profile } }) => ({ profile })));

export default enhance(CommentSection);
