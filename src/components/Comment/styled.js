import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Moment from "react-moment";
import Favorite from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const CommentSectionStyled = styled.div``;

export const Fav = styled(Favorite)`
  color: ${props => (props.favorite ? "red" : "grey")};
`;

export const CommentUserStyled = styled(Typography)`
  margin-top: 1vh;
  color: black;
  font-weight: bold;
  font-size: 0.7rem;
`;
export const ReplyButton = styled(Button)`
  display: flex;
  width: 2vw;
  margin-left: 3%;
`;

export const CommentTextStyled = styled(Typography)`
  color: black;
`;

export const TimeStamp = styled(Moment)`
  font-size: 0.5vw;
  color: grey;
  padding-left: 5%;
`;

export const SmallAvatarStyled = styled(Avatar)`
  margin: 10;
  margin-top: 1%;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2%;
`;
export const CommentDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1%;
`;
