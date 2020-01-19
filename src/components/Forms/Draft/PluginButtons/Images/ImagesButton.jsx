import React from 'react';
import { Container, ImageIconStyled } from './styled';
import { withFirebase } from 'react-redux-firebase';

const ImagesButton = ({ onChange, editorState, firebase, modifier }) => {
  const FIREBASEIMAGESURL = 'imgs';

  const handleChange = async (files) => {
    try {
      const composedName = `${files[0].lastModified}-${files[0].name}`;
      const formdata = new FormData();
      // this will override the file name
      formdata.append('file', files[0], composedName);

      for (let entry of formdata.entries()) {
        await firebase.uploadFile(FIREBASEIMAGESURL, entry[1]);
        firebase
          .storage()
          .ref()
          .child(`${FIREBASEIMAGESURL}/${composedName}`)
          .getDownloadURL()
          .then((newLink) => {
            onChange(modifier(editorState, newLink));
          });
      }
    } catch (err) {
      console.error({ err });
    }
    // setFieldValue("thumbnail", event.currentTarget.files[0].name);
  };

  return (
    <Container>
      <label for='file-input'>
        <ImageIconStyled />
      </label>

      <input onChange={(e) => handleChange(e.target.files)} id='file-input' type='file' />
    </Container>
  );
};

export default withFirebase(ImagesButton);
