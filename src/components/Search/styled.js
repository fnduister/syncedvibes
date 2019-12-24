import styled from 'styled-components';
import React from "react";
import { theme, viewport } from '../../GlobalStyle';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';

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

  @media screen and (max-width: ${viewport.sm}px) {
    display: none;
  }
`;

export const InputBaseStyled = styled((props) => (
  <InputBase {...props} classes={{ input: 'input' }} />
))`
  width: 100%;
  & .input {
    color: inherit;
    padding-top: ${theme.spacing(1)}px;
    padding-right: ${theme.spacing(1)}px;
    padding-bottom: ${theme.spacing(1)}px;
    padding-left: ${theme.spacing(10)}px;
    transition: ${theme.transitions.create('width')};
    width: 100%;
  }
`;
