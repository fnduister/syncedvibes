import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "../Menu/Menu";
import { connect } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import Overlay from "../../components/Overlay/Overlay";
import { theme } from "../../GlobalStyle";
import Title from "../../components/Title/Title";
import SearchIcon from "@material-ui/icons/Search";
import { toggleMenu } from "./reducer";
import { Spring } from "react-spring";
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

class Header extends Component {
  render() {
    return (
      <Background>
        <HeaderNavBar>
          <AppBarStyled position="fixed">
            <ToolbarStyled>
              <IconBox>
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.props.toggleMenuHandler}
                >
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
        {this.props.openMenu && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => <Menu props />}
          </Spring>
        )}
        <Overlay
          overlayOpacity={0.4}
          overlayColor={theme.palette.primary[300]}
        />
      </Background>
    );
  }
}

const mapProps = (state, ownProps) => ({
  openMenu: state.global.Header.openMenu
});

const mapActions = {
  toggleMenuHandler: () => toggleMenu()
};
export default connect(
  mapProps,
  mapActions
)(Header);
