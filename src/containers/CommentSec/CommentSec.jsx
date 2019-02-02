import React, { Fragment, Component } from "react";
import {
  CommentBox,
  CommentList,
  CommentForm,
  Comment
} from "../../components/CommentSection/CommentSection";
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
  TextFieldStyled,
  UserDetailsContainer,
  AvatarStyled,
  SmallAvatarStyled,
  CommentDataContainer,
  CommentContainer
} from "./styled";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Avatar from "../../images/savage.jpg";

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
      }
    };
  }

  handleCommentSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };
  showSubmitButton = e => {
    console.log("submit");
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
                onFocus={this.showSubmitButton()}
              />

              <ButtonStyled
                variant="contained"
                color="secondary"
                id="submit"
                value="Post"
                type="submit"
              >
                Submit
              </ButtonStyled>
            </InformationContainer>
          </AvatarContainer>
        </Form>

        {this.state.commentData.map(data => (
          <div>
             
            <CommentContainer>
            
            <SmallAvatarStyled alt="User Avatar" src={Avatar} />
            
            <CommentDataContainer>
            <CommentUserStyled color="textPrimary">
              {data.name}
            </CommentUserStyled>
            <CommentTextStyled color="textPrimary">
              {data.text}
            </CommentTextStyled>
            </CommentDataContainer>
            </CommentContainer>
          </div>
        ))}</Container>
      
    );
  }
}

export default CommentSec;
