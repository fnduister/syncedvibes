import React from "react";
import {
  TextContent,
  TextUrl,
  TextTitle,
  SaveIconStyled,
  ButtonStyled,
  TextType
} from "./styled";
import { Button, MenuItem } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Form, Field, ErrorMessage } from "formik";

const EditForm = ({ types, errors, status, touched, isSubmitting }) => (
  <Form>
    <Field
      type="text"
      name="title"
      component={TextTitle}
      label="title"
      variant="outlined"
    />

    <Field
      type="select"
      component={TextType}
      name="type"
      select
      label="Select type"
      margin="normal"
    >
      {Object.keys(types).map(key => (
        <MenuItem key={key} value={types[key]}>
          {types[key]}
        </MenuItem>
      ))}
    </Field>

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

    <Field
      type="text"
      name="thumbnail"
      component={TextUrl}
      label="thumbnail"
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
