import styled from "styled-components";
import { Button } from "@material-ui/core";
import { theme } from "../../../GlobalStyle";

export const Container = styled.div`
  display: flex;
  margin: 0.8em 0;
  flex-wrap: wrap;
`;

export const ButtonStyled = styled(Button)`
  background: ${theme.palette.primary[600]};
color: white;
  width: 200px;
`;

export const Label = styled.p`
  margin: auto 1em;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
