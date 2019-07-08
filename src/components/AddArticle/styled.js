import styled from "styled-components";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";

export const DialogTitleStyled = styled(DialogTitle)`
  display: flex;
  padding: 0;
`;

export const DialogContentStyled = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1em;
  flex-flow: row wrap;
  align-content: stretch;
  justify-content: center;
`;

export const TextContent = styled(TextField)`
  display: flex;
  margin: 1rem 0;
  width: 100%;
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
  margin-right: 0.3em;
`;
