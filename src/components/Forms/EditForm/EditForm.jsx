import React from "react";
import {
  TextContent,
  TextUrl,
  FormStyled,
  TextTitle,
  SaveIconStyled,
  ButtonStyled,
  TextType
} from "./styled";
import MyEditor from '../Draft/Draft';
import { Button, MenuItem } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Form, Field, ErrorMessage } from "formik";

const EditForm = ({ types, errors, status, touched, isSubmitting, values, handleBlur, setFieldValue }) => (
  <FormStyled>
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

    <MyEditor
      editorState={values.editorState}
      onChange={setFieldValue}
      onBlur={handleBlur}
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
  </FormStyled>
);

export default EditForm;
