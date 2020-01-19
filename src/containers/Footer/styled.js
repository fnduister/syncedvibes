import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Button, Fab } from '@material-ui/core';
import { Slide } from '@material-ui/core';
import { theme } from '../../GlobalStyle';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Fade from '@material-ui/core/Fade';
// import { black } from "material-ui/styles/colors";
export const PageUpContainer = styled.div`
  position: fixed;
  bottom: 0.3em;
  left: 0;
  transition: width 0.3s ease-in;
  z-index: 100;
  /* flex-direction: column-reverse; */
`;

export const PageUpStyled = styled(Fab)`
  position: relative;
  background-color: ${fade(theme.palette.primary[900], 1)};
`;

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
  width: ${({ width }) => (width ? '100%' : '4em')};
  transition: width 0.3s ease-in;
  z-index: 2;
  /* flex-direction: column-reverse; */
`;

export const LogoStyled = styled.img`
  height: 4em;
  width: 4em;
  position: absolute;
  background-color: ${({ background }) =>
    background ? `${fade(theme.palette.primary[900], 0.7)}` : 'none'};
  transition: background-color 1s ease-in;
  z-index: 4;
  right: 0;
  cursor: pointer;
`;

export const BottomStyled = styled.div`
  background-color: ${fade(theme.palette.primary[900], 0.7)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 3;
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

export const FadeStyled = styled(Fade)``;

export const SpotifyButton = styled(Button)`
  margin-right: 0.5vw;
  background-color: #1db954;
  color: white;
`;

export const IconStyled = styled.img`
  height: 3.5vh;
  margin-bottom: 1em;
`;

export const PreviousWebsiteIconStyled = styled.img`
  height: 3.7em;
  margin-bottom: 1em;
  /* height: 4em; */
`;
