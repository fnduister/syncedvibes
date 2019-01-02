import React from "react";
import CommentBox from './CommentBox';
import commentData from './CommentData'
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="author">{this.props.author}</h2>
        {this.props.text}
      </div>
    );
  }
});
React.render(
  <CommentBox data={commentData} />,
  document.getElementById('CommentSec')
);

export default Comment;