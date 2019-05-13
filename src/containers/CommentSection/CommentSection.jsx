import React, { Component } from "react";
import { Container } from "./styled";
import moment from "moment";
import { compose } from "redux";
import { Formik } from "formik";
import Comment from "../../components/Comment/Comment";
import { connect } from "react-redux";
import AddCommentFormSchema from "../../components/Forms/AddCommentForm/AddCommentValidation.js";
import AddCommentForm from "../../components/Forms/AddCommentForm/AddCommentForm";
import { withHandlers } from "recompose";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = { pristine: false };
  }
  render() {
    let ArrayComment;
    if (this.props.comments) {
      ArrayComment = Object.keys(this.props.comments).map(key => {
        const comments = this.props.comments[key];
        return { ...comments, key };
      });
      ArrayComment.sort((a, b) => moment(b.date) - moment(a.date));
    }
    const showButtons = () => {
      this.setState(state => ({ pristine: true }));
    };

    const changeOnBlur = () => {
      console.log("change on changeOnBlur");
      this.setState(state => ({ pristine: false }));
    };

    return (
      <Container>
        <Formik
          initialValues=""
          validationSchema={AddCommentFormSchema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);
            actions.setStatus({ msg: "Set some arbitrary status or data" });
            const date = moment().format("LLLL");
            const avatarUrl = this.props.profile.avatarUrl
              ? this.props.profile.avatarUrl
              : null;
            const avatar = this.props.profile.avatar
              ? this.props.profile.avatar
              : null;
            console.log({ profile: this.props.profile });
            const comment = {
              ...values,
              user: {
                uid: this.props.auth.uid,
                displayName: this.props.profile.displayName,
                avatarUrl,
                avatar
              },
              date,
              replies: {},
              favorite: 0
            };
            this.props.addComment(comment);
            actions.setSubmitting(false);
            actions.resetForm();
            changeOnBlur();
          }}
          render={props => (
            <AddCommentForm
              profile={this.props.profile}
              auth={this.props.auth}
              showButtons={showButtons}
              changeOnBlur={changeOnBlur}
              pristine={this.state.pristine}
              {...props}
            />
          )}
        />
        {this.props.comments ? (
          ArrayComment.map(comment => (
            <Comment
              key={comment.key}
              commentId={comment.key}
              data={comment}
              updateComment={this.props.updateComment}
            />
          ))
        ) : (
          <p>Be the first to comment</p>
        )}
      </Container>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { profile, auth } }) => ({ profile, auth }))
);

export default enhance(CommentSection);
