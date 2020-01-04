import React from "react";
import { ButtonStyled } from "./styled";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ImagesButton = props =>  {
  onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

  render() {
    return (
      <div className={editorStyles.headlineButtonWrapper}>
        <IconButton onClick={onClick} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }
}

export default Button;
