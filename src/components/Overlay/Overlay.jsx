import React from 'react';
import { OverlayDiv } from './styled';

const Overlay = (props) => 
    <OverlayDiv overlayOpacity={props.overlayOpacity} overlayColor={props.overlayColor}/>
     

export default Overlay;
