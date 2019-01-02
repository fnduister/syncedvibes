import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBarStyled,
  ToolbarStyled,
  HeaderNavBar,
  IconBox,
  TypographyStyled,
  Search,
  SearchIconStyled,
  InputBaseStyled
} from "./styled";

const NavBar = ({
  withIcon,
  withSearch,
  toggleMenu,
  withTabs,
  zIndex,
  position,
  background,
  ...props
}) => {
  return (
    <AppBarStyled position={position} style={props}>
      <ToolbarStyled withIcon={withIcon}>
        {withIcon && (
          <IconBox>
            <IconButton c olor="inherit" aria-label="Menu" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
            <TypographyStyled color="inherit" variant="h6" align="justify">
              Menu
            </TypographyStyled>
          </IconBox>
        )}
        {withTabs && (
          <Tabs indicatorColor="primary" textColor="inherit" centered>
            <Tab label="Music" />
            <Tab label="News" />
            <Tab label="Photography" />
            <Tab label="Articles" />
            <Tab label="About" />
          </Tabs>
        )}
        {withSearch && (
          <Search>
            <SearchIconStyled>
              <SearchIcon />
            </SearchIconStyled>
            <InputBaseStyled placeholder="Search…" />
          </Search>
        )}
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default NavBar;
