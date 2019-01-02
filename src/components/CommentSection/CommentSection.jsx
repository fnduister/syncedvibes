import React, { Fragment } from "react";
import {Comment} from './styled';

const CommentSection = () => {
  var commentData = [
    {
      author: "Test",
      text: "TesTestTEEEEST"
    }
  ];

  return (
    <Fragment>
      <Comment color='primary'>comment section</Comment>
      {/* <CommentBox />
      <CommentList />
      <CommentForm />
      <Comment />*/}
    </Fragment> 
  );
};

export default CommentSection;
