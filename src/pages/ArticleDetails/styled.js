import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { theme, viewport } from "../../GlobalStyle";
import Youtube from "react-youtube";

export const YoutubeStyled = styled(Youtube)`
  height: 100%;
  top: 0;
  left: 0;
`;

export const Title = styled(Typography)`
  margin-bottom: 2vh;
  text-decoration: none;

  @media screen and (max-width: ${viewport.lg}px) {
    width: 80vw;
  }

  @media screen and (min-width: ${viewport.lg}px) and (max-width: ${viewport.xl}px) {
    width: 60vw;
  }

  @media screen and (min-width: ${viewport.xl}px) {
    width: 42vw;
  }

  &:hover {
    color: ${theme.palette.action.hover};
  }
`;

export const AspectRatio = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 0;
    padding-bottom: 51%;

  & iframe {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const TimeStamp = styled(Typography)`
  margin-bottom: 2vh;
  opacity: 0.5;
`;

export const Summary = styled(Typography)`
  margin-top: 2vh;
  width: 100%;
  display: flex;
`;

export const ArticleGrid = styled(Grid)`
  margin-bottom: 15vh;
`;

export const ScheduleIconStyled = styled(ScheduleIcon)`
  font-size: 100%;
  font-weight: 500;
  font-style: normal;
`;
