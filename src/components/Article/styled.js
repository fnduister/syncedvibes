import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Video = styled.video`
  width: 350px;
  z-index: -5;
`;

export const ArticleContainer = styled(Link)`
  margin: 0.6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Type = styled(Typography)`
  color: paleturquoise;
  margin: 0.5em;
`;

export const Looks = styled.div``;

export const Header = styled.div`
  position: absolute;
  top: 3px;
  /* background-color: rgba(0, 0, 0, 0.3); */
`;

export const Content = styled(Typography)`
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  width: 100%;
  color: #fff;
  padding: 0.3em;
  position: absolute;
  bottom: 0;
  transition: padding .1s ease-out;

  ${ArticleContainer}:hover & {
    /* background-color: white; */
    padding-bottom: 1.5em;
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
