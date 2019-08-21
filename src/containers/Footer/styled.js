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
  height: 5em;
  align-items: center;
  overflow: hidden;
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

export const BottomStyled = styled.div`
  background-color: ${fade(theme.palette.primary[300], 0.5)};
  display: flex;
  justify-content: center;
  padding: .8em;
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
  background: green;
`;
