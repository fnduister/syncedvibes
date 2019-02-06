import React, { Fragment } from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Formik } from "formik";
import { Container } from "./styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import LoginFormSchema from "../../components/Forms/LoginForm/LoginFormSchema";

const Login = ({ firebase, auth, signup }) => (
  <Container>
    <Formik
      initialValues=""
      validationSchema={LoginFormSchema}
      onSubmit={async ({ email, password, username }, actions) => {
        // console.log({values});
        try {
          const user = await firebase.createUser(
            { email, password },
            { username, email }
          );
          console.log({ user });
        } catch (err) {
          console.log({ err });
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
