import React from "react";
import {
  TextContent,
  TextUrl,
  TextTitle,
  SaveIconStyled,
  ButtonStyled
} from "./styled";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Form, Field, ErrorMessage } from "formik";

const EditForm = ({ errors, status, touched, isSubmitting }) => (
  <Form>
    <Field
      type="text"
      className="error"
      name="title"
      component={TextTitle}
      label="title"
      variant="outlined"
    />

    <Field
      type="text"
      name="content"
      component={TextContent}
      multiline
      rowsMax="5"
      rows="3"
      variant="outlined"
      label="content"
      margin="normal"
    />
    <Field
      type="text"
      name="url"
      component={TextUrl}
      label="url"
      variant="outlined"
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
      Submit
    </ButtonStyled>
  </Form>
);

export default EditForm;
