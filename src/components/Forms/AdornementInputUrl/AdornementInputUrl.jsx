import React, { PureComponent, useRef } from "react";
import { TextInput, LibraryAddStyled, RemoveCircleStyled, FileCopyStyled } from "./styled";
import { InputAdornment, IconButton } from "@material-ui/core";

const AdornementInputUrl = props => {
  const newRef = useRef(null);
  console.log({props});
  const paste = () => {
    // newRef
    console.log("TCL: newRef", newRef.current.children[0].children[1].children[1]);
    newRef.current.children[0].children[1].children[1].focus();
    document.execCommand("paste");
  };
  const removeUrl = () => {};

  return (
    <span ref={newRef}>
      <TextInput
        {...props}
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* <IconButton
                aria-label="Toggle password visibility"
                onClick={paste}
              >
                <FileCopyStyled fontSize="small" />
              </IconButton> */}
              <IconButton onClick={props.removeUrl}  aria-label="Toggle password visibility">
                <RemoveCircleStyled fontSize="small" />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </span>
  );
};

export default AdornementInputUrl;
