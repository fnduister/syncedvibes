import React from "react";
import {
  TextContent,
  TextUrl,
  TextTitle,
  SaveIconStyled,
  ButtonStyled
} from "./Styled";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Form, Field, ErrorMessage } from "formik";

const LoginForm = ({ errors, status, touched, isSubmitting }) => (
  <Form>
    <Field
      type="text"
      className="error"
      name="username"
      component={TextTitle}
      label="username"
      variant="outlined"
    />

    <Field
      type="password"
      name="password"
      component={TextContent}
      variant="outlined"
      label="content"
    />

    <ErrorMessage name="social.twitter" className="error" component="div" />
    {status && status.msg && <div>{status.msg}</div>}
    <ButtonStyled
      variant="contained"
      color="secondary"
      size="large"
      type="submit"
      disabled={isSubmitting}
    >
      <SaveIconStyled />
      log in
    </ButtonStyled>
  </Form>
);

export default LoginForm;
