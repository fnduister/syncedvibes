import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import { theme } from "../../GlobalStyle";

export const Container = styled.div`
  background-color: ${theme.palette.primary[900]};
  border-radius: 4px;
  color: white;
  padding: 10px 20px;
  border-color: blue;
  overflow: hidden;
  display: flex;
  width: 10px;
  height: 150px;
  position: fixed;
  top: 45%;
  right: 0.5em;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  z-index: 50;
  transition: background-color ease-in-out 0.4s;

  :hover {
    background-color: ${theme.palette.primary[300]};
    color: black;
  }
`;

export const ButtonStyled = styled(Button)`
  height: 40px;
  ${Container}:hover & {
    color: black;
  }
`;
export const IconStyled = styled(Icon)`
  color: white;
  transition: color ease-in 0.4s;

  ${Container}:hover & {
    color: black;
  }

  ${ButtonStyled}:hover & {
    color: ${theme.palette.secondary[500]};
  }
`;
