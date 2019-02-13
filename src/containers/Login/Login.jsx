import React, { Fragment } from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Formik } from "formik";
import { Container } from "./styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import LoginFormSchema from "../../components/Forms/LoginForm/LoginFormSchema";

const Login = ({ firebase, auth, signup, history }) => (
  <Container>
    <Formik
      initialValues=""
      validationSchema={LoginFormSchema}
      onSubmit={async ({ email, password, username }, actions) => {
        // console.log({values});
        try {
          const user = await firebase.createUser(
            { email, password },
            { username, email, avatar: "A" }
          );
          console.log({ user });
          actions.setSubmitting(false);
          history.push("/");
        } catch (err) {
          console.log({ err });
          actions.setSubmitting(false);
          actions.setStatus({ msg: "Set some arbitrary status or data" });
        }
      }}
      render={props => <LoginForm {...props} signup={signup} />}
    />
  </Container>
);
export default compose(
  firebaseConnect("articles"),
  connect(({ firebase: { auth } }) => ({ auth }))
)(Login);
