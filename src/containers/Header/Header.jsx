import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PermIdentity from "@material-ui/icons/PermIdentity";
import purple from "@material-ui/core/colors/purple";
import Menu from "../Menu/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Overlay from "../../components/Overlay/Overlay";
import Typography from "@material-ui/core/Typography";
import { theme } from "../../GlobalStyle";
import Title from "../../components/Title/Title";
import SearchIcon from "@material-ui/icons/Search";
import { BottomNavBar } from "../Menu/styled";
import {
  Background,
  BottomLine,
  AppBarStyled,
  ToolbarStyled,
  HeaderNavBar,
  IconBox,
  TypographyStyled,
  Search,
  SearchIconStyled,
  InputBaseStyled
} from "./styled";

const Header = () => (
  <Background>
    <HeaderNavBar>
      <AppBarStyled position="fixed">
        <ToolbarStyled>
          <IconBox>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <TypographyStyled color="inherit" variant="h6" align="justify">
              Menu
            </TypographyStyled>
          </IconBox>
          <Search>
            <SearchIconStyled>
              <SearchIcon />
            </SearchIconStyled>
            <InputBaseStyled placeholder="Search…" />
          </Search>
        </ToolbarStyled>
      </AppBarStyled>
    </HeaderNavBar>
    <Title />
    <Menu />
    <Overlay overlayOpacity={0.4} overlayColor={theme.palette.primary[300]} />
  </Background>
);
export default Header;
