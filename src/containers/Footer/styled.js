import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import breakpoint from "styled-components-breakpoint";
import { viewport } from "../../GlobalStyle";

export const BottomStyled = styled(Grid)`
  background-color: ${props => props.background};
  height: 100%;
  padding: 3vh 0vh;
  /* @media (max-width: ${viewport.md}px) {
    justify-content: flex-start;
    padding: 3vh 4vh;
  } */
  @media screen and (max-width: ${viewport.lg}px) {
    justify-content: space-around;
  }
  @media screen and (max-width: ${viewport.sm}px) {
    justify-content: flex-start;
    padding: 3vh 3vw;
    flex-direction: column;
  }
`;

export const BottomBox = styled(Grid)`
  width: ${props => (props.archive ? "15vw" : "30vw")};
  margin: 2vh auto;
  display: flex;
  flex-direction: column;
  padding: 0 1vw;
  & span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  @media screen and (max-width: ${viewport.md}px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: ${viewport.sm}px) {
    width: 100%;
  }

  @media screen {
    justify-content: space-around;
  }
`;


export const Title = styled(Typography)`
  margin-bottom: 2vh;
`;
