import React, { useState } from 'react';
import { ButtonStyled, Container, ImageIconStyled } from './styled';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import InputButton from '../video/InputButton';
import FileInput from '../../../FileInput/FileInput';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const ImagesButton = (props) => {
  const [file, setFile] = useState({});
  const InputWrapper = () => <FileInput {...props} />;

  const onClick = () => {
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    return props.onOverrideContent(InputWrapper);
  };

  const handleChange = (files) => {
    console.log({ files });
    setFile(files[0]);
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

export default ImagesButton;
