import styled from 'styled-components';


export const OverlayDiv = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.overlayColor};
    opacity: ${props => props.overlayOpacity};
    position:absolute;
`;