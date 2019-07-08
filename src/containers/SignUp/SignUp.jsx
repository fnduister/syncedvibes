import React from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Formik } from "formik";
import { Container } from "./styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import LoginFormSchema from "../../components/Forms/LoginForm/LoginFormSchema";

const SignUp = ({ firebase, auth, signup, history }) => (
  <Container>
    <Formik
      initialValues=""
      validationSchema={LoginFormSchema}
      onSubmit={async ({ email, password, displayName }, actions) => {
        try {
          const avatar = displayName.substr(0, 1).toUpperCase();
          await firebase.createUser({ email, password }, {email, displayName, avatar});
          actions.setSubmitting(false);
          history.push("/");
        } catch (err) {
          console.log({ err });
          actions.setSubmitting(false);
          actions.setStatus({ msg: err.message });
        }
      }}
      render={props => <LoginForm {...props} signup />}
    />
  </Container>
);
export default compose(
  firebaseConnect("articles"),
  connect(({ firebase: { auth } }) => ({ auth }))
)(SignUp);
