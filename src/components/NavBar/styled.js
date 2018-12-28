import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { theme } from "../../GlobalStyle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import breakpoint from "styled-components-breakpoint";
import React from "react";

export const IconBox = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-end;
`;

export const TypographyStyled = styled(Typography)`
  padding: 0.9vh;
`;

export const AppBarStyled = styled(AppBar)`
  background: ${props => props.background};
  box-shadow: none;
  z-index: ${props => props.zIndex};
  height: 5vh;
  justify-content: center;
`;

export const ToolbarStyled = styled(Toolbar)`
  justify-content: ${props => (props.showIcon ? "space-between" : "center")};
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
  <InputBase {...props} classes={{ root: "root", input: "input" }} />
))`
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

  & .root {
    color: inherit;
    width: 100%;
  }
`;
