import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import {Container, Label, ButtonStyled} from "./styled";

const FileInput = () => {
  return (
    <Container>
      <ButtonStyled variant="contained" component="label" id="customFile">
        Upload File
        <input type="file" style={{ display: "none" }} />
      </ButtonStyled>
      <Label htmlFor="customFile">hhh eee lll lll lll ooo ooo ooo ooo</Label>
    </Container>
  );
};

export default FileInput;
