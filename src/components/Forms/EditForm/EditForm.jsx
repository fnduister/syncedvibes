import React, { Fragment } from 'react';
import {
  LibraryAddStyled,
  FormStyled,
  TextTitle,
  SaveIconStyled,
  ButtonStyled,
  ProgressStyled,
  TextType,
  SubmitButtonStyled,
} from './styled';
import AdornementInputUrl from '../AdornementInputUrl/AdornementInputUrl';
import MyEditor from '../Draft/Draft';
import { MenuItem } from '@material-ui/core';
import { Field, ErrorMessage, FieldArray } from 'formik';
import FileInput from '../FileInput/FileInput';

const EditForm = ({
  types,
  errors,
  status,
  setFile,
  touched,
  isSubmitting,
  values,
  handleBlur,
  editorState,
  changeEditorState,
  setFieldValue,
}) => {
  return (
    <FormStyled>
      <Field type='text' name='title' component={TextTitle} label='title' variant='outlined' />

      <Field
        type='select'
        component={TextType}
        name='type'
        select
        label='Select type'
        margin='normal'
        value='{types}'
      >
        {Object.keys(types).map((index) => (
          <MenuItem key={index} value={index}>
            {types[index]}
          </MenuItem>
        ))}
      </Field>

      <MyEditor editorState={editorState} changeEditorState={changeEditorState} />

      <FieldArray
        name='media'
        render={(arrayHelpers) => (
          <Fragment>
            {values.media
              ? values.media.map((url, index) => (
                  <div key={index}>
                    <Field
                      type='text'
                      name={`media.${index}`}
                      component={AdornementInputUrl}
                      label={`url ${index}`}
                      variant='outlined'
                      removeurl={() => arrayHelpers.remove(index)}
                    />
                  </div>
                ))
              : null}
            <ButtonStyled
              variant='contained'
              color='primary'
              onClick={() => arrayHelpers.push('')} // insert an empty string at a position
              disabled={isSubmitting}
            >
              <LibraryAddStyled />
              Add an embed media
            </ButtonStyled>
          </Fragment>
        )}
      />

      <Field
        type='file'
        name='thumbnail'
        component={FileInput}
        label='thumbnail'
        variant='outlined'
        onChange={(event) => {
          console.log({ values });
          setFile(event.currentTarget.files[0]);
          setFieldValue('thumbnail', event.currentTarget.files[0].name);
        }}
      />

      <ErrorMessage name='social.twitter' className='error' component='div' />
      {status && status.msg && <div>{status.msg}</div>}

      <SubmitButtonStyled
        variant='contained'
        color='secondary'
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting ? <ProgressStyled size={15} color='secondary' /> : <SaveIconStyled />}
        Submit
      </SubmitButtonStyled>
    </FormStyled>
  );
};

export default EditForm;
