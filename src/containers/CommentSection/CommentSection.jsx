import React, { Component } from "react";
import {
  Form,
  Container,
  AvatarContainer,
  AvatarCenterContainer,
  TextAreaStyled,
  InformationContainer,
  ButtonStyled,
  ButtonStyledTwo,
  ButtonContainer,
  AvatarStyled
} from "./styled";
import moment from "moment";
import { compose } from "redux";
import { Formik } from "formik";
import {
  firebaseConnect,
  withFirebase,
  isLoaded,
  getVal
} from "react-redux-firebase";
import Avatar from "../../images/savage.jpg";
import Comment from "../../components/Comment/Comment";
import { connect } from "react-redux";
import AddCommentFormSchema from "../../components/Forms/AddCommentForm/AddCommentValidation.js";
import AddCommentForm from "../../components/Forms/AddCommentForm/AddCommentForm";

class CommentSection extends Component {
  render() {
    let ArrayComment = Object.keys(this.props.comments).map(key => {
      const comments = this.props.comments[key];
      return { ...comments, key };
    });
    ArrayComment.sort((a, b) => moment(b.date) - moment(a.date));

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
              {...props}
            />
          )}
        />
        {ArrayComment.map(comment => (
          <Comment key={comment.key} data={comment} />
        ))}
      </Container>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { profile, auth } }) => ({ profile, auth }))
);

export default enhance(CommentSection);
