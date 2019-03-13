import styled from "styled-components";
import { Typography, Avatar } from "@material-ui/core";
import Drake from "../../images/audience-band-blur-1587927.jpg";

export const ArticleContainer = styled.div`
  width: 25vw;
  height: 28vh;
  margin: 0.6em;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.backgroundImage});
  min-width: 250px;
  justify-content: space-between;
`;

export const Type = styled(Avatar)`
  margin: 0.3em;
`;

export const Looks = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: rgba(0, 0, 0, 0.3); */
`;

export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  color: #fff;
`;

export const Media = styled.div``;

export const HeaderText = styled(Typography)`
  color: #fff;
`;
