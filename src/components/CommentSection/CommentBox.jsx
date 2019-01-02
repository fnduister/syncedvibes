import React from "react";
import commentData from './CommentData'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
  var CommentBox = React.createClass({
    getInitialState: function() {
      return {
        data: commentData
      }
    },
    handleCommentSubmit: function(comment) {
      this.props.data.push(comment);
      var comments = this.state.data;
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
    },
    render: function() {
      return (
        <div className="comment-box">
          <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
          <CommentList data={this.props.data} />
        </div>
      );
    }
  });

  export default CommentBox;