import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Favorite from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircle from "@material-ui/icons/AccountCircle";
export const ReplySectionStyled = styled.div``;

export const FavoriteButton = styled(Favorite)`
  color: ${props => (props.favorite ? "red" : "grey")};
  /* color: red; */
  font-size: 15px;
`;

export const AvatarStyled = styled(Avatar)`
  margin: 10;
  color: red;
  width: 32.5px;
  height: 32.5px;
`;

export const DeleteIconStyled = styled(DeleteIcon)`
  font-size: 15px;
`;

export const ReplyUserStyled = styled(Typography)`
  color: black;
  font-weight: bold;
  margin-right: 0.5em;
  padding-left: 0.8em;
`;

export const ReplyUserDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
export const ViewReplies = styled.div`
`;
export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3em;
`;

export const ReplyButton = styled(Button)`
  display: flex;
  width: 2vw;
  font-size: 12px;
`;

export const ReplyTextStyled = styled(Typography)`
  color: black;
  padding-left: 0.8em;
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
  padding-top: 1em;
  padding-left: 0.7em;
`;
export const ReplyButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ReplyOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10em;
`;
export const ReplyDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 3em;
`;

export const ReplyAvatarStyled = styled(AccountCircle)`
  margin: 0.5;
  flex: 1;
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
  margin-left: 1em;
  margin-right: 1em;
`;
export const ButtonStyledTwo = styled(Button)`
  display: flex;
  width: 1vw;
  height: 1vh;
  margin-left: 3em;
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
  height: 1em;
  & label {
  }
`;
