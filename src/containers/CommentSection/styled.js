import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

export const CommentSectionStyled = styled.div``;



export const ButtonStyled = styled(Button)`
  display: flex;
  width: 2vw;
  margin-left: 1%;
  margin-right: 1%;
`;
export const ButtonStyledTwo = styled(Button)`
  display: flex;
  width: 2vw;
  margin-left: 3%;
`;

export const AvatarStyled = styled(Avatar)`
  margin: 10;
`;


export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2vh;
  flex-grow: 1;
  padding-bottom: 10%;
`;
export const AvatarCenterContainer = styled.div`
  padding-top: 2%;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1vh;
  width: 100%;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 40vw;
`;
export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TextFieldStyled = styled(TextField)`
  background-color: transparent;
  margin-top: 0px;
  height: 3.5vh;
  width: 15vw;
  & label {
    transform: translate(15px, 10px) scale(1);
    font-size: 0.8rem;
  }
`;

export const TextAreaStyled = styled(TextField)`
  background-color: transparent;
  margin-top: 0px;
  & label {
  }
`;
export const Container = styled.div`
  padding: 0 0.5vw 1vh;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f2;
  border-radius: 7px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;
