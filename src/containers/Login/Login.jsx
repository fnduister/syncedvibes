import React from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Formik } from "formik";
import { Container } from "./styled";
import { withRouter } from "react-router";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import LoginFormSchema from "../../components/Forms/LoginForm/LoginFormSchema";

const Login = ({ firebase, history, dialog, closeDialog }) => {

  const socialLogin = async provider => {
    try {
      await firebase.login({ provider, type: "popup" });
      dialog ? closeDialog() : history.goBack();
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <Container>
      <Formik
        initialValues=""
        validationSchema={LoginFormSchema}
        onSubmit={async ({ email, password }, actions) => {
          try {
            await firebase.login({ email, password });
            actions.setSubmitting(false);
            dialog ? closeDialog() : history.goBack();
          } catch (err) {
            console.error({ err });
            actions.setSubmitting(false);
            actions.setStatus({ msg: err.message });
          }
        }}
        render={props => (
          <LoginForm
            socialLogin={socialLogin}
            {...props}
          />
        )}
      />
    </Container>
  );
};
export default compose(
  withRouter,
  firebaseConnect("articles"),
)(Login);
