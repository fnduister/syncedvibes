import React, { Fragment, Component } from "react";
import {
  CommentBox,
  CommentList,
  CommentForm,
  Comment
} from "../../components/CommentSection/CommentSection";
import { CommentStyled, Form } from "./styled";
import TextField from "@material-ui/core/TextField";

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
  }

  render() {
    return (
      <Fragment>
        {/* <CommentBox />
      <CommentForm/>
      <CommentList/> */}

        <Form noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            value={this.state.name}
            onChange={() => null}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-email"
            label="Email"
            value={this.state.email}
            onChange={() => null}
            margin="normal"
            variant="outlined"
          />
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
      </Fragment>
    );
  }
}

export default CommentSec;
