import React from 'react';
import { OverlayDiv } from './styled';
import { theme } from '../../GlobalStyle';

const Overlay = (props) => 
    <OverlayDiv overlayOpacity={props.overlayOpacity} overlayColor={props.overlayColor}/>
     

export default Overlay;
