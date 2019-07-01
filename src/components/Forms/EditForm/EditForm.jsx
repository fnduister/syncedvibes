import React, { useState } from "react";
import {
  TextContent,
  TextUrl,
  LibraryAddStyled,
  FormStyled,
  TextTitle,
  SaveIconStyled,
  ButtonStyled,
  TextType
} from "./styled";
import AdornementInputUrl from "../AdornementInputUrl/AdornementInputUrl";
import MyEditor from "../Draft/Draft";
import { Button, MenuItem } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Form, Field, ErrorMessage } from "formik";

const EditForm = ({
  types,
  errors,
  status,
  touched,
  isSubmitting,
  values,
  handleBlur,
  setFieldValue
}) => {
  const [extraUrl, addExtraUrl] = useState([]);
  let index = values.media.lenght;

  console.log("TCL: index", values.media);

  const addUrl = evt => {
    addExtraUrl([...extraUrl, `url${index}`]);
  };

  return (
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
      {Object.keys(values.media).map(url => (
        <Field
          type="text"
          name={`media.${url}`}
          component={AdornementInputUrl}
          label={url}
          variant="outlined"
        />
      ))}

      {/* {extraUrl.map(url => (
        <Field
          type="text"
          name={`media.${url}`}
          component={AdornementInputUrl}
          label={url}
          variant="outlined"
        />
      ))} */}

      {/* <ButtonStyled
        variant="contained"
        color="primary"
        size="large"
        onClick={addUrl()}
        disabled={isSubmitting}
      >
        <LibraryAddStyled />
        Add an url
      </ButtonStyled> */}

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
};

export default EditForm;
