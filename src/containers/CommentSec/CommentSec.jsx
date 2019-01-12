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
      ]
    };

    const handleCommentSubmit = comment => {
      this.props.data.push(comment);
      const comments = this.state.data;
      const newComments = comments.concat([comment]);
      this.setState({ data: newComments });
    };
  }

  render() {
    return (
      <Container>
        {/* <CommentBox />
      <CommentForm/>
      <CommentList/> */}
        <AvatarContainer>
          <img
            src={Avatar}
            alt="suckMydick"
            style={{ fontSize: "8px", height: "5vh", width: "5vw" }}
          />

          <Form
            noValidate
            autoComplete="off"
            onSubmit={this.handleCommentSubmit}
          >
            <TextFieldStyled
              id="outlined-name"
              label="Name"
              value={this.state.name}
              onChange={() => null}
              margin="normal"
              variant="outlined"
            />
            <TextFieldStyled
              required
              id="outlined-email"
              label="Email"
              value={this.state.email}
              onChange={() => null}
              margin="normal"
              variant="outlined"
            />
            <TextAreaStyled
              required
              id="Comment"
              label="Comment"
              value={this.state.comment}
              onChange={() => null}
              margin="normal"
              variant="outlined"
            />

            <ButtonStyled
              variant="contained"
              color="secondary"
              id="submit"
              value="Post"
            >
              Submit
            </ButtonStyled>
          </Form>
        </AvatarContainer>

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
