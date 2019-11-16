import styled from 'styled-components';
import Popover from '@material-ui/core/Popover';
import { theme } from '../../GlobalStyle';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Fade from '@material-ui/core/Fade';

import { Typography } from '@material-ui/core';
import { IconButton, Button } from '@material-ui/core';

export const DeleteConfirmation = styled(Popover)``;
export const GroupStyled = styled(ButtonGroup)`
  width: 100%;
  height: 100%;
  font-size: 1em;
`;
export const ConfirmationButtonYes = styled(Button)`
  color: #1db954;
`;
export const ConfirmationButtonNo = styled(Button)`
  color: red;
`;

export const DeleteText = styled(Typography)`
  position: relative;
  font-size: 1em;
  z-index: 10;
  color: white;
  background-color: ${fade(theme.palette.primary[900], 1)};
  justify-content: right;

  /* margin-left: 96%; */
  /* position: relative; */
  cursor: pointer;
`;

export const Video = styled.video`
  width: 350px;
  z-index: -5;
`;
export const Image = styled.img`
  width: 350px;
  z-index: -4;
`;

export const Delete = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  transition: color 0.5s ease;
  color: #ec7e2a;

  &:hover {
    color: #e80909;
  }
`;

export const ArticleContainer = styled.div`
  margin: 0.6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 200px;
  overflow: hidden;
`;

export const Type = styled(Typography)`
  color: paleturquoise;
  margin: 0.5em;
`;

export const Looks = styled.div``;

export const Header = styled.div`
  position: absolute;
  top: 3px;
  width: 100%;
`;

export const Content = styled(Typography)`
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  width: 100%;
  color: #fff;
  padding: 0.3em;
  position: absolute;
  bottom: 0;
  transition: padding 0.1s ease-out;

  ${ArticleContainer}:hover & {
    padding-bottom: 1.5em;
  }
`;

export const Media = styled.div``;

export const HeaderText = styled(Typography)`
  color: paleturquoise;
  margin: 0.5em;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.5em;
  border-radius: 15px;
`;
