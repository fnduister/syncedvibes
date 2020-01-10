import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import {Container, Label, ButtonStyled} from "./styled";

const FileInput = (props) => {
  return (
    <Container>
      <ButtonStyled variant="contained" component="label" >
        Upload Thumbnail
        <input {...props} type="file" style={{ display: "none" }} id="customFile"/>
      </ButtonStyled>
    </Container>
  );
};

export default FileInput;
