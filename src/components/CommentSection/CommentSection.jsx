import React from "react";
import commentData from "../../containers/CommentSec/CommentSec";

const CommentBox = () => {
  const getInitialState = commentData => {
    return {
      data: commentData
    };
  };
  const handleCommentSubmit = comment => {
    this.props.data.push(comment);
    const comments = this.state.data;
    const newComments = comments.concat([comment]);
    this.setState({ data: newComments });
  };

  return (
    <div className="comment-box">
      <CommentForm
        data={this.props.data}
        onCommentSubmit={this.handleCommentSubmit}
      />
      {/* <CommentList data={this.props.data} /> */}
    </div>
  );
};

const CommentForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    var authorValue = e.target[0].value.trim();
    var textValue = e.target[1].value.trim();
    if (!textValue || !authorValue) {
      return;
    }
    props.onCommentSubmit({ author: authorValue, text: textValue });
    e.target[0].value = "";
    e.target[1].value = "";
    return;
  };
  return (
    <form className="comment-form form-group" onSubmit={handleSubmit}>
      <div className="input-group">
        <span className="input-group-addon">Name</span>
        <input type="text" placeholder="Your name" className="form-control" />
      </div>
      <div className="input-group">
        <span className="input-group-addon">Comment</span>
        <input
          type="text"
          placeholder="Say something..."
          className="form-control"
        />
      </div>
      <input type="submit" value="Post" className="btn btn-primary" />
    </form>
  );
};
const Comment = props => {
  return (
    <div className="comment">
      <h2 className="author">{props.author}</h2>
      {props.text}
    </div>
  );
};

export { CommentBox, CommentForm, Comment };
