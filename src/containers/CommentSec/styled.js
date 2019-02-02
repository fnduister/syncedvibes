import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';

export const CommentSectionStyled = styled.div``;

export const CommentUserStyled = styled(Typography)`
  margin-top: 1vh;
  color: black;
  font-weight:bold;
  font-size: 0.7rem;
`;

export const CommentTextStyled = styled(Typography)`
  color: black;
 
`;



export const ButtonStyled = styled(Button)`
  display: flex;
  align-self: flex-end;
  width: 2vw;
`;

export const AvatarStyled = styled(Avatar)`
    margin: 10;
    
`;
export const SmallAvatarStyled = styled(Avatar)`
    margin: 10;
    margin-top: 1%;
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
  /* width: 30vw; */
  /* height: 8vh; */

  & label {
    
  }
`;
export const Container = styled.div`
  padding: 0 .5vw 1vh;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f2;
  border-radius: 7px;
`;
export const CommentContainer = styled.div`
  display: flex;
  flex-direction:row;
  padding-top: 2%;
 
  
`;
export const CommentDataContainer = styled.div`
  display: flex;
  flex-direction:column;
  padding-left: 1% ;
 
 
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
