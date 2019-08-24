import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  margin: 0.8em 0;
`;

export const ButtonStyled = styled(Button)`
  width: 200px;
`;

export const Label = styled.p`
  margin: auto 1em;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
