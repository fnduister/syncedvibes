import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export const CommentSectionStyled = styled.div``;

export const CommentStyled = styled(Typography)`
  margin-top: 2vh;
  color: black;
`;

export const ButtonStyled = styled(Button)`

`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  flexwrap: wrap;
  flex-direction: column;
  width: 30vw;
`;

export const TextFieldStyled = styled(TextField)`
  background-color: white;
  margin-top: 0px;
  height: 3.5vh;
  width: 15vw;
  & label {
    transform: translate(15px, 10px) scale(1);
    font-size: 0.8rem;
  }
`;

export const TextAreaStyled = styled(TextField)`
  background-color: white;
  margin-top: 0px;
  height: 5vh;
  & label {
    transform: translate(15px, 10px) scale(1);
    font-size: 0.8rem;
  }
`;
export const Container = styled.div`
  padding: 0 3vw 1vh;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f2;
  border-radius: 7px;
`;

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   dense: {
//     marginTop: 16,
//   },
//   menu: {
//     width: 200,
//   },
// });
