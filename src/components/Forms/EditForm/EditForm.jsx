import React, { Fragment } from "react";
import {
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
import { MenuItem } from "@material-ui/core";
import { Field, ErrorMessage, FieldArray } from "formik";

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
  console.log({ media: values });
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

      <FieldArray
        name="media"
        render={arrayHelpers => (
          <Fragment>
            {values.media
              ? values.media.map((url, index) => (
                  <div key={index}>
                    <Field
                      type="text"
                      name={`media.${index}`}
                      component={AdornementInputUrl}
                      label={`url ${index}`}
                      variant="outlined"
                      removeurl={() => arrayHelpers.remove(index)}
                    />
                  </div>
                ))
              : null}
            <ButtonStyled
              variant="contained"
              color="primary"
              size="large"
              onClick={() => arrayHelpers.push("")} // insert an empty string at a position
              disabled={isSubmitting}
            >
              <LibraryAddStyled />
              Add an url
            </ButtonStyled>
          </Fragment>
        )}
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
};

export default EditForm;
