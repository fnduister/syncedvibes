import React from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Formik } from "formik";
import { Container } from "./styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import LoginFormSchema from "../../components/Forms/LoginForm/LoginFormSchema";

const Login = ({ firebase, auth, signup, history }) => {
  console.log("je suis dans le login");
  return (
    <Container>
      <Formik
        initialValues=""
        validationSchema={LoginFormSchema}
        onSubmit={async ({ email, password }, actions) => {
          // console.log({values});
          console.log({ email, password });
          try {
            await firebase.login({ email, password });
            actions.setSubmitting(false);
            history.push("/");
          } catch (err) {
            console.log({ err });
            actions.setSubmitting(false);
            actions.setStatus({ msg: err.message });
          }
        }}
        render={props => <LoginForm {...props} />}
      />
    </Container>
  );
};
export default compose(
  firebaseConnect("articles"),
  connect(({ firebase: { auth } }) => ({ auth }))
)(Login);
