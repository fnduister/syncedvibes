import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { viewport } from "../../GlobalStyle";
import { Button, Fab } from "@material-ui/core";
import { Slide } from "@material-ui/core";
import { theme } from "../../GlobalStyle";
import { fade } from "@material-ui/core/styles/colorManipulator";
export const Container = styled.div`
  position: relative;
  flex-direction: row;  
  /* flex-direction: column-reverse; */
`;

export const LogoStyled = styled.img`
  height: 4em;
  width: 4em;
  position: absolute;
  background-color: ${fade(theme.palette.primary[300], 0.5)};
  z-index: 1;
  right: 0;
  cursor: pointer;
`;

export const ControlButton = styled(Fab)`
  /* margin-bottom: 2em; */
  position: absolute;
  background-color: ${theme.palette.secondary[500]};
  z-index: 1;
  right: 0;
`;

export const BottomStyled = styled.div`
  background-color: ${fade(theme.palette.primary[300], 0.5)};
  display: flex;
  justify-content: center;
  padding: 1em;
  position: absolute;
  width: 100%;
`;

export const ToggleLabel = styled(Typography)`

display:flex;
font-size: 0.7em;
flex-direction: row-reverse;
justify-content: right;
/* margin-left: 96%; */
margin-right: 1em;

bottom: 5;
  /* position: relative; */

`;

export const SlideContainer = styled.div`
  position: relative;
  /* bottom: 1em; */
  height: 5vh;
  display: flex;
  align-items: center;
  overflow: hidden;
flex-direction: row;
/* margin-bottom: 5.5vh; */


`;

export const SlideStyled = styled(Slide)`
position: absolute;`;

export const SpotifyButton = styled(Button)`
  margin-right: 1vw;
  background: green;
`;
