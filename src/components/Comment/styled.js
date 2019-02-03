import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Moment from "react-moment";
import Favorite from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircle from '@material-ui/icons/AccountCircle';
export const ReplySectionStyled = styled.div``;

export const FavoriteButton = styled(Favorite)`
  color: ${props => (props.favorite ? "red" : "grey")};
  font-size: 15px;
`;

export const DeleteIconStyled = styled(DeleteIcon)`
  font-size: 15px;
`;

export const ReplyUserStyled = styled(Typography)`
  color: black;
  font-weight: bold;
`;

export const ReplyUserDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
export const ReplySectionContainer = styled.div`
`;
export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
`;

export const ReplyButton = styled(Button)`
  display: flex;
  width: 2vw;
  margin-left: 3%;
  font-size: 12px;
`;

export const ReplyTextStyled = styled(Typography)`
  color: black;
  /* width: 95%; */
  margin-left: 1%;
  margin-right: 1%;
  text-align: justify;
  /* padding-left: 1em;
  padding-right: 1em; */
`;

export const TimeStamp = styled(Typography)`
  display: flex;
  font-weight: 10;
  color: grey;
  margin-left: 0.2em;
`;

export const SmallAvatarStyled = styled(Avatar)`
  margin: 10;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1%;

`;
export const ReplyButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1%;
`;
export const ReplyOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1%;
  margin-left: 10%;
`;
export const ReplyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1%;
`;

export const ReplyAvatarStyled = styled(AccountCircle)`
  margin: .5;
  flex:1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

export const ButtonStyled = styled(Button)`
  display: flex;
  width: 1vw;
  height: 1vh;
  margin-left: 1%;
  margin-right: 1%;
`;
export const ButtonStyledTwo = styled(Button)`
  display: flex;
  width: 1vw;
  height: 1vh;
  margin-left: 3%;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1vh;
  width: 100%;
`;

export const TextAreaStyled = styled(TextField)`
  background-color: transparent;
  margin-bottom: 0px;
  height: 1%;
  & label {
  }
`;
