import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { theme, viewport } from '../../GlobalStyle';
import Youtube from 'react-youtube';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

export const KeyboardArrowDownStyled = styled(KeyboardArrowDown)`
  margin-bottom: 0.2em;
`;
export const KeyboardArrowUpStyled = styled(KeyboardArrowUp)`
  margin-bottom: 0.2em;
`;
export const YoutubeStyled = styled(Youtube)`
  height: 100%;
  top: 0;
  left: 0;
`;

const nextPrevButton = styled(Button)`
  width: 20vw;
  background-color: ${theme.palette.primary[600]};
`;

export const Prev = styled(nextPrevButton)``;

export const Next = styled(nextPrevButton)``;

export const PrevNextContainer = styled.div`
  display: flex;
  margin: 1em 0;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${viewport.sm}px) {
    justify-content: center;
    flex-direction: column;

    & a {
      width: 100%;
      margin: 0.5em 0;
    }
  }
`;

export const ShowComment = styled(Button)`
  margin: 0.5em 0;
`;

export const MediaContainer = styled.div`
  margin-top: 0.5em;
  width: 100%;
`;

export const ContentStyled = styled.div`
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled(Typography)`
  margin-bottom: 0.2em;
  text-decoration: none;

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
  margin-bottom: 2em;

  & iframe {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const TimeStamp = styled(Typography)`
  margin-bottom: 1em;
  opacity: 0.5;
`;

export const Summary = styled(Typography)`
  margin-top: 2vh;
  width: 100%;
  display: flex;
`;

export const ArticleGrid = styled(Grid)`
  margin: 1em;
  width: 80vw;
`;

export const ScheduleIconStyled = styled(ScheduleIcon)`
  font-size: 100%;
  font-weight: 500;
  font-style: normal;
`;
