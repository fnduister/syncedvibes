import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { viewport } from "../../GlobalStyle";
import { Button, Fab } from "@material-ui/core";
import { Slide } from "@material-ui/core";
import { theme } from "../../GlobalStyle";
import { fade } from "@material-ui/core/styles/colorManipulator";
import IconButton from '@material-ui/core/IconButton';
// import { black } from "material-ui/styles/colors";


export const Container = styled.div`
  position: relative;
  flex-direction: row;
  height: 5em;
  align-items: center;
  overflow: hidden;
  flex-direction: row;

  /* flex-direction: column-reverse; */
`;
export const Fixed = styled.div`
  position: fixed;
bottom: 0;
right: 0;
width:  ${({width})=> width ? "100%" :  "4em"};
transition: width .3s ease-in ;
z-index: 0;
  /* flex-direction: column-reverse; */
`;

export const LogoStyled = styled.img`
  height: 4em;
  width: 4em;
  position: absolute;
  background-color: ${({ background }) =>
    background ? `${fade(theme.palette.primary[900], 0.5)}` : "none"};
    transition: background-color 1s ease-in;
  z-index: 1;
  right: 0;
  cursor: pointer;
`;

export const BottomStyled = styled.div`
  background-color: ${fade(theme.palette.primary[900], 0.9)};
  display: flex;
  justify-content: center;
  padding: 0.8em;
  position: absolute;
  width: 100%;
`;

export const ToggleLabel = styled(Typography)`
  position: relative;
  font-size: 0.7em;
  right: 0;
  z-index: 1000;
  justify-content: left;
  /* margin-left: 96%; */
  margin-bottom: 0.1em;
  /* position: relative; */
  cursor: pointer;
`;

export const ToggleContainer = styled.div`
  position: absolute;
  right: 0;
  width: 4em;

  /* bottom: 1em; */

  flex-direction: column;
  /* margin-bottom: 5.5vh; */
`;

export const SlideStyled = styled(Slide)`
  margin-top: 1.1em;
`;

export const SpotifyButton = styled(Button)`
  margin-right: 1vw;   
  background-color: #1DB954 ;
  color: white;
`;

export const IconStyled = styled.img`
  color: white;
width: 2vw;
height: 4vh;
padding-bottom: 1vh;

`;
