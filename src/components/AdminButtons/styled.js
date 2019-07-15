import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

export const Container = styled.div`
  background-color: palevioletred;
  border-radius: 4px;
  color: white;
  padding: 10px 20px;
  border-color: blue;
  overflow: hidden;
  display: flex;
  width: 10px;
  height: 13.5vh;
  position: fixed;
  top: 45%;
  justify-content: center;
  align-items: center;
  right: 0.5em;
  flex-direction: column;
  z-index: 50;
  transition: background-color ease-in-out 0.4s;

  :hover {
    background-color: peachpuff;
    color: black;
  }
`;

export const ButtonStyled = styled(Button)`
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
    color: red;
  }
`;
