import styled from "styled-components";
import { Formik } from "formik";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { theme } from "../../GlobalStyle";
import { Button } from "@material-ui/core";

export const DialogContentStyled = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  width: 40vw;
  position:relative;
  padding: 1em;
`;

export const TextContent = styled(TextField)`
  display: flex;
  margin: 1rem 0;
`;

export const TextUrl = styled(TextContent)``;
export const TextTitle = styled(TextContent)``;

export const ButtonStyled = styled(Button)`
  margin-top: 3em;
  display: flex;
  align-self: flex-end;
`;

export const SaveIconStyled = styled(SaveIcon)`
  font-size: 20px;
  margin-right: 0.3em`;
