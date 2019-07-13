import React from "react";
import {
  ForgotPassword,
  SubHeader,
  Social,
  GoogleButton,
  Separator,
  FacebookButton,
  Image,
  TextTitle,
  Already,
  LoginButton
} from "./styled";
import { withRouter } from "react-router-dom";
import { Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import GoogleIcon from "../../../images/google-icon2.png";
import FacebookIcon from "../../../images/facebook-icon.png";
import { withFirebase } from "react-redux-firebase";
import AdornementInputText from "../AdornmentInputText/AdornementInputText";
import { compose } from "recompose";

const LoginForm = ({
  signup,
  errors,
  status,
  touched,
  dialog,
  closeDialog,
  isSubmitting,
  firebase,
  socialLogin,
  history
}) => {

  return (
    <Form>
      <SubHeader color="secondary" variant="h4">
        {signup ? "SIGN UP" : "LOG IN"}
      </SubHeader>
      <SubHeader variant="subtitle1">Welcome to the Vibe</SubHeader>
      <Field
        type="text"
        className="error"
        name="email"
        component={TextTitle}
        label="email"
        variant="outlined"
      />
      {signup && (
        <Field
          type="text"
          className="error"
          name="displayName"
          component={TextTitle}
          label="display name"
          variant="outlined"
        />
      )}
      <Field
        name="password"
        component={AdornementInputText}
        variant="outlined"
        label="password"
      />
      {!signup && (
        <ForgotPassword variant="caption" to="login" component={Link}>
          Forgot Password?
        </ForgotPassword>
      )}

      <ErrorMessage name="social.twitter" className="error" component="div" />
      {status && status.msg && <div>{status.msg}</div>}
      <LoginButton
        variant="contained"
        color="secondary"
        size="large"
        type="submit"
        disabled={isSubmitting}
      >
        {!signup ? "Login" : "Sign up"}
      </LoginButton>
      <Separator> OR </Separator>
      <Social>
        <FacebookButton
          aria-label="Facebook"
          disabled={isSubmitting}
          onClick={() => socialLogin("Facebook")}
          variant="contained"
          color="default"
        >
          <Image src={FacebookIcon} alt="facebook" />
          Login Facebook
        </FacebookButton>
        <GoogleButton
          aria-label="Google"
          disabled={isSubmitting}
          onClick={() => socialLogin("google")}
          variant="contained"
          color="default"
        >
          <Image src={GoogleIcon} alt="facebook" />
          Login Google
        </GoogleButton>
      </Social>
      <Already>
        Already have an account?{" "}
        <Link to={signup ? "login" : "signup"}>
          {signup ? "Log in" : "Sign up"}
        </Link>
      </Already>
    </Form>
  );
};

export default compose(
  withFirebase,
  withRouter
)(LoginForm);
