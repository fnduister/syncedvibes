import styled from "styled-components";
import { Formik } from "formik";
import DialogContent from "@material-ui/core/DialogContent";
import { TextField } from "formik-material-ui";
import SaveIcon from "@material-ui/icons/Save";
import { theme } from "../../../GlobalStyle";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

export const TextAreaStyled = styled(TextField)`
  background-color: transparent;
  margin-top: 0px;
  & label {
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2vh;
  flex-grow: 1;
  padding-bottom: 10%;
`;

export const AvatarStyled = styled(Avatar)`
  margin: 10;
  color: red;
`;
export const ButtonStyled = styled(Button)`
  display: flex;
  width: 2vw;
  margin-left: 1%;
  margin-right: 1%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;
