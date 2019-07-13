import React from "react";
import Comment from "../Comment/Comment";
import moment from "moment";

const CommentList = ({ smaller, comments, updateComment, parentId }) => {
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
        ArrayComment.map(comment => {
          const commentId = parentId ? `${parentId}/replies/${comment.key}` : comment.key ;
          return (
            <Comment
              key={comment.key}
              smaller
              commentId={commentId}
              data={comment}
              updateComment={updateComment}
            />
          );
        })
      ) : (
        <p>Be the first to comment</p>
      )}
    </div>
  );
};

export default CommentList;
