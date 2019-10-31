import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Formik, Form, Field } from 'formik';
import FileInput from '../../components/Forms/FileInput/FileInput';
import { withFirebase } from 'react-redux-firebase';
import { SubmitButtonStyled, SaveIconStyled } from './styled';
import { Dropzone } from './styled';

const SettingPage = ({ firebase }) => {
  const [files, addFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    console.log("TCL: onDrop -> acceptedFiles", acceptedFiles)
    addFiles((files) => {
      for (const file of acceptedFiles) {
        files.push(file);
      }
      return files;
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Dropzone {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </Dropzone>
      <div>
        {files.map((file) => {
          return <img key={file.name} src={URL.createObjectURL(file)} alt={file.name} />;
        })}
      </div>
    </div>
  );
};

export default withFirebase(SettingPage);

{
  /* <Formik
  onSubmit={async (values, { setSubmitting }) => {
    await firebase.uploadFile(`background-imgs`, file);
  }}
>
  {({ isSubmitting, setFieldValue, values }) => (
    <Form>
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
      <SubmitButtonStyled
        variant='contained'
        color='secondary'
        type='submit'
        disabled={isSubmitting}
      >
        <SaveIconStyled />
        Submit
      </SubmitButtonStyled>
    </Form>
  )}
</Formik> */
}
