import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { theme } from "../../GlobalStyle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import breakpoint from "styled-components-breakpoint";
import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';

export const ProgressiveLine = styled(LinearProgress)`
  height: 3px;

  & .root{
    flex-grow: 1;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  width: 100wh;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 5;
  /* margin-bottom: 5vh; */
`;

export const BottomLine = styled.div`
  background-color: ${theme.palette.primary[900]};
  height: 1vh;
  width: 100wh;
`;

export const HeaderNavBar = styled.div`
  flex-grow: 1;
  /* height: 2vh; */
  z-index: 50;
`;

export const IconBox = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-end;
`;

export const TypographyStyled = styled(Typography)`
  padding: 0.9vh;
`;

export const AppBarStyled = styled(AppBar)`
  animation: background-color 3s linear;
  background-color: ${props => props.background};
  box-shadow: none;

  & .scrolled {
    background-color: ${props => props.otherBackground};
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  justify-content: space-between;
`;

export const Search = styled.div`
  position: relative;
  border-radius: ${theme.shape.borderRadius}px;
  background-color: ${fade(theme.palette.common.white, 0.15)};
  && :hover {
    background-color: ${fade(theme.palette.common.white, 0.25)};
  }
  margin-left: 0;
  width: 100%;
  ${breakpoint("sm")`
    width: auto;
    margin-left: {theme.spacing(1)}px;
  `}
`;

export const SearchIconStyled = styled.div`
  width: ${theme.spacing(9)}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputBaseStyled = styled(props => (
  <InputBase {...props} classes={{ root: "root", input: "input" }} />
))`
  & .input {
    color: inherit;
    padding-top: ${theme.spacing(1)}px;
    padding-right: ${theme.spacing(1)}px;
    padding-bottom: ${theme.spacing(1)}px;
    padding-left: ${theme.spacing(10)}px;
    transition: ${theme.transitions.create("width")};
    width: 100%;
    ${breakpoint("sm")`
      width: 120px;
      &:focus {
        width: 200px;
      }
    `}
  }

  & .root {
    color: inherit;
    width: 100%;
  }
`;
