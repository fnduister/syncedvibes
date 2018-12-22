import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import backgroundImage from "../../images/jan-strecha-722905-unsplash.jpg";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Typography from "@material-ui/core/Typography";

export const Background = styled.div`
  background-image: url(${backgroundImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  width: 100wh;
  height: 98.45vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 5vh;
`;

export const BottomLine = styled.div`
  background-color: ${deepPurple[800]};
  height: 1vh;
  width: 100wh;
`;

export const HeaderNavBar = styled.div`
  flex-grow: 1;
  height: 2vh;
  z-index: 1;
`;

export const IconBox = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-end;
`;

export const TypographyStyled = styled(Typography)`
  padding: 0.9vh;
`;

export const AppBarStyled = styled(AppBar)`
  background: transparent;
  box-shadow: none;
`;

export const ToolbarStyled = styled(Toolbar)`
  justify-content: space-between;
`;
