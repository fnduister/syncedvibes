import React, { Fragment, Component } from "react";
import {
  CommentBox,
  CommentList,
  CommentForm,
  Comment
} from "../../components/CommentSection/CommentSection";

class CommentSec extends Component {
  state = {
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

  render() {
    return (
      <Fragment color="default" variant="body1">
        <CommentBox />,
        <CommentForm />,
        <CommentList />,
        <Comment
          author={this.state.commentData[0].author}
          text={this.state.commentData[0].text}
        />
      </Fragment>
    );
  }
}

export default CommentSec;
