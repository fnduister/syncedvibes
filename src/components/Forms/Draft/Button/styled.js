import styled from "styled-components";

export const ButtonStyled = styled.span`
  margin: 0.5em;
  color: ${props => props.active ? "#3b4956" : "#fff"};
  cursor: pointer;
  &:hover {
    color: #5dd;
  }

`;
