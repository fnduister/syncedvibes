import styled from 'styled-components';
import Youtube from "react-youtube";

export const YoutubeStyled = styled(Youtube)`
  height: 100%;
  top: 0;
  left: 0;
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
