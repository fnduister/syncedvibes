import styled from "styled-components";
import { Formik } from "formik";
import DialogContent from "@material-ui/core/DialogContent";
import { TextField } from "formik-material-ui";
import SaveIcon from "@material-ui/icons/Save";
import { theme } from "../../../GlobalStyle";
import { Button } from "@material-ui/core";
import { Form } from "formik";

export const TextContent = styled(TextField)`
  display: flex;
  margin: 1rem 0;
`;

export const FormStyled = styled(Form)`
  width: 100%;
`;

export const TextType = styled(TextContent)`
  width: 20vw;
`;
export const TextUrl = styled(TextContent)``;
export const TextTitle = styled(TextContent)``;
export const ButtonStyled = styled(Button)`
  margin-top: 0.5em;
  display: flex;
  align-self: flex-end;
`;

export const SaveIconStyled = styled(SaveIcon)`
  font-size: 20px;
  margin-right: 0.3em;
`;
