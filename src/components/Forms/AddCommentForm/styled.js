import styled from "styled-components";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

export const TextAreaStyled = styled(TextField)`
  background-color: transparent;
  margin-top: 0px;
  & label {
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding-top: 1vh;
  margin-bottom: .5em;
  margin-right: .5em;
`;

export const SubContainer = styled.div`
  flex-direction: row;
  flex-grow: 1;
`;

export const AvatarStyled = styled(Avatar)`
  margin: 10px;
  color: red;
  /* margin-top: 1.7em; */
`;
export const ButtonStyled = styled(Button)`
  flex-direction: row-reverse;
  width: 2vw;
  margin-left: 1em;
`;

export const SubmitButton = styled(ButtonStyled)`
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;
