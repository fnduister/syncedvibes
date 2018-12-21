import React from 'react';
import { OverlayDiv } from './overlayStyled';
import { theme } from '../../GlobalStyle';

const Overlay = (props) => {
  return (
    <OverlayDiv overlayOpacity={props.overlayOpacity} overlayColor={props.overlayColor}>
      
    </OverlayDiv>
  )
}

export default Overlay;
