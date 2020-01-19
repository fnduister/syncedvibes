import React from 'react';
import { VideoIconStyled } from './styled';
import IconButton from '@material-ui/core/IconButton';
import InputButton from './InputButton';
import { withFirebase } from 'react-redux-firebase';

const VideosButton = (props) => {
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
        <VideoIconStyled />
      </IconButton>
    </div>
  );
};

export default withFirebase(VideosButton);
