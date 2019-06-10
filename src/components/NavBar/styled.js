import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { theme, viewport } from "../../GlobalStyle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import breakpoint from "styled-components-breakpoint";
import React from "react";

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
  ${breakpoint("sm")`
    display: block;
  `}
`;

export const HeaderWrapper = styled.div`
  height: 6.5vh;
`;

export const AppBarStyled = styled(AppBar)`
  box-shadow: none;
  height: 6vh;
  justify-content: center;

  @media screen and (max-height: ${viewport.sm}px) {
    height: 14vh;
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  justify-content: ${props => (props.withicon ? "space-between" : "center")};
`;

export const Search = styled.div`
  position: relative;
  border-radius: ${theme.shape.borderRadius}px;
  background-color: ${fade(theme.palette.common.white, 0.15)};
  & :hover {
    background-color: ${fade(theme.palette.common.white, 0.25)};
    border-radius: ${theme.shape.borderRadius}px;
  }
  margin-left: 0;
  width: 100%;
  ${breakpoint("sm")`
    width: auto;
    margin-left: {theme.spacing.unit}px;
  `}
`;

export const SearchIconStyled = styled.div`
  width: ${theme.spacing.unit * 9}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputBaseStyled = styled(props => (
  <InputBase {...props} classes={{ input: "input" }} />
))`
  width: 100%;
  & .input {
    color: inherit;
    padding-top: ${theme.spacing.unit}px;
    padding-right: ${theme.spacing.unit}px;
    padding-bottom: ${theme.spacing.unit}px;
    padding-left: ${theme.spacing.unit * 10}px;
    transition: ${theme.transitions.create("width")};
    width: 100%;

    ${breakpoint("sm")`
      width: 120px;
      &:focus {
        width: 200px;
      }
    `}
  }
`;
