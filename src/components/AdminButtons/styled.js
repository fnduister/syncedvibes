import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Settings from '@material-ui/icons/Settings';
import HowToReg from '@material-ui/icons/HowToReg';
import InvertColors from '@material-ui/icons/InvertColors';
import Divider from '@material-ui/core/Divider';

export const Container = styled.div`
    background-color: palevioletred;
    border-radius: 4px;
    color: white;
    padding: 10px 20px;
    border-color: blue;
    overflow: hidden;
    display: flex;
    width: 10px;
    height: 10vh;
    position: fixed;
    top: 45%;
    justify-content: center;
    align-items: center;
    right:.5em;
    flex-direction: column;
    z-index: 50;

    &:hover{
        background-color: papayawhip;
    }
`;



export const ButtonStyled = styled(Button)`

`;
export const SettingsStyled = styled(Settings)`
    color: white;
`;
export const HowToRegStyled = styled(HowToReg)`
color: white;
`;
export const DividerStyled = styled(Divider)`
color: white;

`;
export const InvertColorsStyled = styled(InvertColors)`
    color: white;

`;
