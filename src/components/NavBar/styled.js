import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { theme, viewport } from "../../GlobalStyle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import AccountCircle from '@material-ui/icons/AccountCircle';

export const AvatarProgress = styled(CircularProgress)`
`;

export const AvatarContainer = styled.div`
  margin-left: 2em;
  width: 32px;
  height: 32px;
  display: flex;

`;

export const SearchContainer = styled.div`
  display: flex;

`;

export const EmptyAccount = styled(AccountCircle)`
  color: ${props => props.status ? "green": "white"};
  cursor: pointer;
`;

export const AvatarStyled = styled(Avatar)`
  margin: 10;
   color: red;
  width: 32px;
  height: 32px;
`;

export const HomePageButton = styled(Button)`
  color: white;
`;

export const TabStyled = styled(Tab)`
  @media (max-width: ${viewport.xl}px) and (min-width: ${viewport.lg}px) {
    min-width: 20px;
  }
`;

export const IconBox = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: ${viewport.lg}px) {
    & h6 {
      display: none;
    }
  }
`;

export const TypographyStyled = styled(Typography)`
  padding: 0.9vh;
  display: none;
`;

export const HeaderWrapper = styled.div`
  height: 4em;
`;

export const AppBarStyled = styled(AppBar).attrs(props => ({
  style: { backgroundColor: props.background }
}))`
  box-shadow: none;
  z-index: ${props => props.zIndex};
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0); */

  @media screen and (max-height: ${viewport.sm}px) {
    height: 14vh;
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  justify-content: ${props => (props.withicon ? "center" : "space-between")};
`;

export const Search = styled.div`
  position: relative;
  margin-left: 0;
  width: 100%;
  border-radius: ${theme.shape.borderRadius}px;
  background-color: ${fade(theme.palette.common.white, 0.15)};

  & :hover {
    background-color: ${fade(theme.palette.common.white, 0.25)};
    border-radius: ${theme.shape.borderRadius}px;
  }
  

  @media screen and (max-width: ${viewport.sm}px){
    display: none;
  }
`;

export const SearchIconStyled = styled.div`
  width: ${theme.spacing(9)}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const InputBaseStyled = styled(props => (
  <InputBase {...props} classes={{ input: "input" }} />
))`
  width: 100%;
  & .input {
    color: inherit;
    padding-top: ${theme.spacing(1)}px;
    padding-right: ${theme.spacing(1)}px;
    padding-bottom: ${theme.spacing(1)}px;
    padding-left: ${theme.spacing(10)}px;
    transition: ${theme.transitions.create("width")};
    width: 100%;

  }
`;
