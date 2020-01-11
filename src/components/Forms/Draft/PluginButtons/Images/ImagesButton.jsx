import React, { useState } from 'react';
import { ButtonStyled, Container, ImageIconStyled } from './styled';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import InputButton from '../Videos/InputButton';
import FileInput from '../../../FileInput/FileInput';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { withFirebase } from 'react-redux-firebase';

const ImagesButton = ({ onChange, editorState, firebase, modifier }) => {
  const [imageUrl, setImageUrl] = useState({});
  const FIREBASEIMAGESURL = 'imgs';

  const handleChange = async (files) => {
    try {
      const composedName = `${files[0].lastModified}-${files[0].name}`;
      let value;
      const formdata = new FormData();
      // this will override the file name
      formdata.append('file', files[0], composedName);

      for (let entry of formdata.entries()) {
        console.log(entry[1]);
        value = await firebase.uploadFile(FIREBASEIMAGESURL, entry[1]);
        firebase
          .storage()
          .ref()
          .child(`${FIREBASEIMAGESURL}/${composedName}`)
          .getDownloadURL()
          .then((newLink) => {
            onChange(modifier(editorState, newLink));
          });
      }
      console.log('TCL: handleChange -> value', value);
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
