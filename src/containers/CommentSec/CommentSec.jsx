import React, { Fragment, Component } from "react";
import {
  CommentBox,
  CommentList,
  CommentForm,
  Comment
} from "../../components/CommentSection/CommentSection";
import {
  CommentStyled,
  Form,
  Container,
  AvatarContainer,
  TextAreaStyled,
  InformationContainer,
  ButtonStyled,
  TextFieldStyled
} from "./styled";
import TextField from "@material-ui/core/TextField";
import Avatar from "../../images/drake.gif";

class CommentSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentData: [
        {
          author: "User1",
          text: "Sample Comment 1"
        },
        {
          author: "User2",
          text: "Sample Comment 2"
        }
      ],
      currentComment: {
        author: "",
        email: "",
        comment: ""
      }
    };
  }

  handleCommentSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  onchangeText = evt => {
    this.setState({ currentComment: { [evt.target.name]: evt.target.value } });
  };

  render() {
    return (
      <Container>
        {/* <CommentBox />
      <CommentForm/>
      <CommentList/> */}

        <Form autoComplete="off" onSubmit={this.handleCommentSubmit}>
          <AvatarContainer>
            <img
              src={Avatar}
              alt="suckMydick"
              style={{ fontSize: "20px", height: "8vh", width: "5vw" }}
            />
            <InformationContainer>
              <TextFieldStyled
                id="outlined-name"
                label="Name"
                value={this.state.currentComment.author}
                onChange={this.onchangeText}
                margin="normal"
                variant="outlined"
              />
              <TextFieldStyled
                required
                id="outlined-email"
                label="Email"
                value={this.state.currentComment.email}
                onChange={this.onchangeText}
                margin="normal"
                variant="outlined"
              />
            </InformationContainer>
          </AvatarContainer>

          <TextAreaStyled
            required
            id="Comment"
            label="Comment"
            multiline
            rowsMax="5"
            value={this.state.currentComment.comment}
            margin="normal"
            variant="outlined"
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
        </Form>

        {this.state.commentData.map(data => (
          <div>
            <CommentStyled color="textPrimary" variant="body1">
              {data.author}
            </CommentStyled>
            <CommentStyled color="textPrimary" variant="body1">
              {data.text}
            </CommentStyled>
          </div>
        ))}
      </Container>
    );
  }
}

export default CommentSec;
