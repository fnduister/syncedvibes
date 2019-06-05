import React, { Fragment } from "react";
import Comment from "../Comment/Comment";
import moment from "moment";

const CommentList = ({ smaller, comments, updateComment }) => {
  let ArrayComment;
  if (comments) {
    ArrayComment = Object.keys(comments).map(key => {
      const comment = comments[key];
      return { ...comment, key };
    });
    ArrayComment.sort((a, b) => moment(b.date) - moment(a.date));
  }

  return (
    <div>
      {comments ? (
        ArrayComment.map(comment => (
          <Comment
            key={comment.key}
            smaller
            commentId={comment.key}
            data={comment}
            updateComment={updateComment}
          />
        ))
      ) : (
        <p>Be the first to comment</p>
      )}
    </div>
  );
};

export default CommentList;
