import React from "react";
import {
  TextContent,
  TextUrl,
  ForgotPassword,
  Header,
  SubHeader,
  Social,
  GoogleButton,
  Separator,
  FacebookButton,
  Image,
  TextTitle,
  SaveIconStyled,
  LoginButton
} from "./styled";
import { Button, Typography, Fab } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import GoogleIcon from "../../../images/google-icon2.png";
import FacebookIcon from "../../../images/facebook-icon.png";
import { withFirebase } from "react-redux-firebase";

const LoginForm = ({ errors, status, touched, isSubmitting, firebase }) => {
  return (
    <Form>
      <SubHeader color="secondary" variant="h4">
        LOGIN
      </SubHeader>
      <SubHeader variant="subheading">Welcome to the Vibe</SubHeader>
      <Field
        type="text"
        className="error"
        name="email"
        component={TextTitle}
        label="email"
        variant="outlined"
      />

      <Field
        type="password"
        name="password"
        component={TextContent}
        variant="outlined"
        label="password"
      />
      <ForgotPassword variant="caption" to="login" component={Link}>
        Forgot Password?
      </ForgotPassword>

      <ErrorMessage name="social.twitter" className="error" component="div" />
      {status && status.msg && <div>{status.msg}</div>}
      <LoginButton
        variant="contained"
        color="secondary"
        size="large"
        type="submit"
        disabled={isSubmitting}
      >
        login
      </LoginButton>
      <Separator> OR </Separator>
      <Social>
        <FacebookButton
          aria-label="Facebook"
          disabled={isSubmitting}
          onClick={() =>
            firebase.login({ provider: "facebook", type: "popup" })
          }
          variant="contained"
          color="default"
        >
          <Image src={FacebookIcon} alt="facebook" />
          Login Facebook
        </FacebookButton>
        <GoogleButton
          aria-label="Google"
          disabled={isSubmitting}
          onClick={() => firebase.login({ provider: "google", type: "popup" })}
          variant="contained"
          color="default"
        >
          <Image src={GoogleIcon} alt="facebook" />
          Login Google
        </GoogleButton>
      </Social>
    </Form>
  );
};

export default withFirebase(LoginForm);
