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
        Upload File
        <input {...field} {...props} type="file" style={{ display: "none" }} id="customFile"/>
      </ButtonStyled>
      <Label htmlFor="customFile">hhh eee lll lll lll ooo ooo ooo ooo</Label>
    </Container>
  );
};

export default FileInput;
