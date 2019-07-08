import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const ArticleContainer = styled(Link)`
  width: 20vw;
  text-decoration: none;
  height: 22vh;
  margin: 0.6em;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.backgroundimage});
  background-position: center;
  background-size: cover;
  min-width: 350px;
  min-height: 200px;
  justify-content: space-between;
`;

export const Type = styled(Typography)`
  margin: 0.3em;
  color: paleturquoise;
  margin: 0.5em;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.5em;
  border-radius: 15px;
`;

export const Looks = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: rgba(0, 0, 0, 0.3); */
`;

export const Content = styled(Typography)`
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  color: #fff;
  padding: 0.3em;

  ${ArticleContainer}:hover & {
    /* background-color: white; */
    padding-bottom: 2em;
  }
`;

export const Media = styled.div``;

export const HeaderText = styled(Typography)`
  color: paleturquoise;
  margin: 0.5em;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.5em;
  border-radius: 15px;
`;
