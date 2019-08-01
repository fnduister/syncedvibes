import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0 0;
`;

export const SortButton = styled(({ color, ...other }) => <Button {...other} />)` 
  background: ${props => (props.backgroundcolor ? "#b9b9" : "#673ab7")};
  /* border-color: #673ab7; */
 color: ${props => (props.backgroundcolor ? "#673ab7" : "white")};
  & :hover {
    /* background-color: #b9b9; */
    color: #673ab7;
  }
`;
