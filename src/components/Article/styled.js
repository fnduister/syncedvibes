import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';

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
  z-index: 50;
  transition: color 0.5s ease;
  color: #EC7E2A;

  &:hover {
    color: #E80909;
  }
`;

export const ArticleContainer = styled.div`
  margin: 0.6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 200px;
  overflow:hidden;
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
