import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { theme } from "../../GlobalStyle";
import {
  AppBarStyled,
  ToolbarStyled,
  HeaderNavBar,
  TabStyled,
  IconBox,
  TypographyStyled,
  HeaderWrapper,
  Search,
  SearchIconStyled,
  InputBaseStyled
} from "./styled";

const NavBar = ({
  withIcon,
  withSearch,
  navRef,
  toggleMenu,
  withTabs,
  zIndex,
  value,
  position,
  ...props
}) => {
  console.log({ theme });
  return (
    <HeaderWrapper ref={navRef}>
      <AppBarStyled position={position} color="default">
        <ToolbarStyled withicon={withIcon}>
          <IconBox>
            <IconButton color="inherit" aria-label="Menu" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
            <TypographyStyled color="inherit" variant="h6" align="justify">
              SyncedVibes
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
    </HeaderWrapper>
  );
};

export default NavBar;
