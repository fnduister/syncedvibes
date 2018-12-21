import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PermIdentity from "@material-ui/icons/PermIdentity";
import purple from "@material-ui/core/colors/purple";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Title from '../../components/Title/Title';
import {
  Background,
  BottomLine,
  AppBarStyled,
  ToolbarStyled,
  HeaderNavBar,
  IconBox,
  TypographyStyled
} from "./styled";

const Header = () => (
  <Background>
    <HeaderNavBar>
      <AppBarStyled position="sticky">
        <ToolbarStyled>
          <IconBox>
            <IconButton color="primary" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <TypographyStyled color="primary" variant="h6" align="justify">
              Menu
            </TypographyStyled>
          </IconBox>
          <IconBox>
            <TypographyStyled color="primary" variant="h6" align="justify">
              Login
            </TypographyStyled>
            <IconButton color="primary" aria-label="Menu">
              <PermIdentity />
            </IconButton>
          </IconBox>
        </ToolbarStyled>
      </AppBarStyled>
    </HeaderNavBar>
    <Title/>
    <BottomLine />
  </Background>
);
export default Header;
