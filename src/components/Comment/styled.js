import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Moment from "react-moment";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

export const CommentSectionStyled = styled.div``;

export const Favorite = styled(FavoriteBorder)`
  color: ${props => (props.favorite ? "red" : "blue")};
`;

export const CommentUserStyled = styled(Typography)`
  margin-top: 1vh;
  color: black;
  font-weight: bold;
  font-size: 0.7rem;
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
