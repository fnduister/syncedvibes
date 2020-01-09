import React from 'react';
import { ButtonStyled } from './styled';
import IconButton from '@material-ui/core/IconButton';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import InputButton from './InputButton';

const ImagesButton = (props) => {
  const InputWrapper = () => <InputButton {...props}/>;
  
  const onClick = () => {
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    return props.onOverrideContent(InputWrapper);
  };

  return (
    <div>
      <IconButton onClick={onClick} aria-label='delete'>
        <InsertPhotoIcon />
      </IconButton>
    </div>
  );
};

export default ImagesButton;
