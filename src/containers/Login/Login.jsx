import React, { Fragment } from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Formik } from "formik";
import { Container } from "./styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import LoginFormSchema from "../../components/Forms/LoginForm/LoginFormSchema";

const Login = ({ firebase, auth }) => (
  <Container>
    <Formik
      initialValues=""
      validationSchema={LoginFormSchema}
      onSubmit={async (values, actions) => {
        try {
            const user = await firebase.login({ ...values });
            console.log({ user });
        } catch (err) {
          console.log({ err });
        }
      }}
      render={props => <LoginForm {...props} />}
    />
  </Container>
);
export default compose(
  firebaseConnect("articles"),
  connect(({ firebase: { auth } }) => ({ auth }))
)(Login);
