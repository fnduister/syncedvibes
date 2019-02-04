import styled from "styled-components";
import { Formik } from "formik";
import DialogContent from "@material-ui/core/DialogContent";
import { TextField } from "formik-material-ui";
import SaveIcon from "@material-ui/icons/Save";
import { theme } from "../../../GlobalStyle";
import { Button, Typography } from "@material-ui/core";

export const TextContent = styled(TextField)`
  display: flex;
  margin-top: 2em;
`;

export const Text = styled(Typography)`
  align-self: center;
`;

export const Separator = styled(Text)`
  margin: 2em 0;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Image = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-right: 1em;
`;

export const Buttons = styled(Button)`
  height: 3em;
  width: 49%;
`;

export const FacebookButton = styled(Buttons)`
  background-color: #305ea8;
  margin-right: .5em;
`;

export const GoogleButton = styled(Buttons)`

`;

export const Header = styled(Text)``;
export const SubHeader = styled(Text)``;
export const TextUrl = styled(TextContent)``;
export const TextTitle = styled(TextContent)``;
export const LoginButton = styled(Button)`
  display: flex;
  width: 100%;
  margin-top: 2em;
`;

export const SaveIconStyled = styled(SaveIcon)`
  font-size: 20px;
  margin-right: 0.3em;
`;

export const ForgotPassword = styled(Typography)`
  align-self: flex-end;
  text-decoration: none;

  :hover {
    color: red;
  }
`;
