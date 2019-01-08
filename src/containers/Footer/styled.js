import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import breakpoint from "styled-components-breakpoint";
import {viewport} from '../../GlobalStyle';

export const BottomStyled = styled(Grid)`
  background-color: ${props => props.background};
  height: 100%;
  padding: 3vh 0vh;
  @media(max-width: ${viewport.md}px){
    justify-content: flex-start;
    padding: 3vh 4vh;
  }
`;
export const BottomBox = styled(Grid)`
  width: ${props => (props.archive ? "15vh" : "30vh")};
  margin: 2vh auto;
  display: flex;
  flex-direction: column;
  & span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media(max-width: ${viewport.md}px){
    justify-content: flex-start;
  }
`;
export const Title = styled(Typography)`
  margin-bottom: 2vh;
`;
