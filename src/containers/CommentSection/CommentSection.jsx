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
    return (
      <Container>
        <Formik
          initialValues=""
          validationSchema={AddCommentFormSchema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            actions.setStatus({ msg: "Set some arbitrary status or data" });
            const date = moment().format("LLLL");
            const avatar = this.props.profile.avatarUrl
              ? this.props.profile.avatarUrl
              : this.props.profile.avatar;
            const comment = {
              ...values,
              user: { avatar, uid: this.props.auth.uid },
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

        {Object.keys(this.props.comments).map(key => (
          <Comment key={key} data={this.props.comments[key]} />
        ))}
      </Container>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { profile, auth } }) => ({ profile, auth }))
);

export default enhance(CommentSection);
