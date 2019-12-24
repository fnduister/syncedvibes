import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Formik, Form, Field } from 'formik';
import FileInput from '../../components/Forms/FileInput/FileInput';
import { withFirebase } from 'react-redux-firebase';
import { SubmitButtonStyled, SaveIconStyled } from './styled';
import { Dropzone } from './styled';
import Slider from 'react-slick';

const SettingPage = ({ firebase }) => {
  const [files, addFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    console.log('TCL: onDrop -> acceptedFiles', acceptedFiles);
    addFiles((files) => {
      for (const file of acceptedFiles) {
        files.push(file);
      }
      return files;
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };

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
        {files.map((file) => (
          <Slider {...settings}>
            <img key={file.name} src={URL.createObjectURL(file)} alt={file.name} />;
          </Slider>
        ))}
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
