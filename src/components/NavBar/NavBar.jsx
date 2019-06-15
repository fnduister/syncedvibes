import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { Link } from 'react-router-dom';
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from 'react-router';
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBarStyled,
  HomePageButton,
  ToolbarStyled,
  TabStyled,
  IconBox,
  TypographyStyled,
  HeaderWrapper,
  Search,
  SearchIconStyled,
  InputBaseStyled
} from "./styled";

// const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const NavBar = ({
  withIcon,
  withSearch,
  navRef,
  toggleMenu,
  withTabs,
  zIndex,
  value,
  position,
  background,
  ...props
}) => {
  return (
    <HeaderWrapper ref={navRef}>
      <AppBarStyled position={position} background={background}>
        <ToolbarStyled withicon={withIcon}>
          <HomePageButton component={Link} to="/">
            Menu
          </HomePageButton>
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
