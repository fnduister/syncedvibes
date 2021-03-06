import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { theme } from '../../GlobalStyle';

export const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0 0;
  width: 100%;
`;

export const SortButton = styled(({ color, ...other }) => <Button {...other} />)`
  background: ${(props) => (props.backgroundcolor ? 'white' : `${theme.palette.primary[900]}`)};
  color: ${(props) => (props.backgroundcolor ? `${theme.palette.primary[900]}` : 'white')};
  & :hover {
    color: ${theme.palette.primary[900]};
  }
`;
