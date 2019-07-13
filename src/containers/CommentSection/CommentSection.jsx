import React, { useState } from "react";
import { Container } from "./styled";
import { compose } from "redux";
import Button from "@material-ui/core/Button";
import CommentList from "../../components/CommentList/CommentList";
import AddCommentFormik from "../../components/Forms/AddCommentFormik/AddCommentFormik";
import Dialog from "@material-ui/core/Dialog";
import Login from "../Login/Login";
import { connect } from "react-redux";

const CommentSection = props => {
  const [openLoginDialog, changeLoginStatus] = useState(false);
  const editHandler = () => {
    changeLoginStatus(false);
  };
  return (
    <Container>
      {props.auth.isEmpty ? (
        <div>
          <p> please connect to leave a message </p>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={() => changeLoginStatus(true)}
          >
            login
          </Button>
        </div>
      ) : (
        <AddCommentFormik
          profile={props.profile}
          mustLogin={() => changeLoginStatus(true)}
          auth={props.auth}
          addComment={props.addComment}
        />
      )}
      <CommentList
        comments={props.comments}
        updateComment={props.updateComment}
        addComment={props.addComment}
      />
      <Dialog
        open={openLoginDialog}
        onClose={editHandler}
        aria-labelledby="form-dialog-title"
      >
        <Login
          dialog
          closeDialog={editHandler}
          article={props.article}
          updateArticle={props.updateArticle}
        />
      </Dialog>
    </Container>
  );
};

const enhance = compose(
  connect(({ firebase: { profile, auth } }) => ({ profile, auth }))
);

export default enhance(CommentSection);
