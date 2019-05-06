import React, { Component } from "react";
import {
  Container,
} from "./styled";
import moment from "moment";
import { compose } from "redux";
import { Formik } from "formik";
import Comment from "../../components/Comment/Comment";
import { connect } from "react-redux";
import AddCommentFormSchema from "../../components/Forms/AddCommentForm/AddCommentValidation.js";
import AddCommentForm from "../../components/Forms/AddCommentForm/AddCommentForm";

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
      this.setState(state => ({ pristine: !state.pristine }));
    };
    return (
      <Container>
        <Formik
          initialValues=""
          validationSchema={AddCommentFormSchema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
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
          }}
          render={props => (
            <AddCommentForm
              profile={this.props.profile}
              auth={this.props.auth}
              showButtons={showButtons}
              pristine={this.state.pristine}
              {...props}
            />
          )}
        />
        {this.props.comments ? (
          ArrayComment.map(comment => (
            <Comment key={comment.key} data={comment} />
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
