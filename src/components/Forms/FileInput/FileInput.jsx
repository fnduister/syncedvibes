import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import {Container, Label, ButtonStyled} from "./styled";

const FileInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Container>
      <ButtonStyled variant="contained" component="label" >
        Upload Thumbnail
        <input {...props} type="file" style={{ display: "none" }} id="customFile"/>
      </ButtonStyled>
      {console.log({field})}
      <Label htmlFor="customFile">{field.value ? field.value : "No file was selected yet"}</Label>
    </Container>
  );
};

export default FileInput;
