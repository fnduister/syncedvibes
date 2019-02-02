import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Moment from "react-moment";
import Favorite from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
export const CommentSectionStyled = styled.div``;

export const FavoriteButton = styled(Favorite)`
  color: ${props => (props.favorite ? "red" : "grey")};
  font-size: 15px;
`;

export const DeleteIconStyled = styled(DeleteIcon)`
  font-size: 15px;
`;

export const CommentUserStyled = styled(Typography)`
  color: black;
  font-weight: bold;
`;

export const CommentUserDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const ReplyButton = styled(Button)`
  display: flex;
  width: 2vw;
  margin-left: 3%;
  font-size: 12px;
`;

export const CommentTextStyled = styled(Typography)`
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
  padding-top: 2%;
`;
export const ReplyButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1%;
`;
export const CommentDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1%;
`;
