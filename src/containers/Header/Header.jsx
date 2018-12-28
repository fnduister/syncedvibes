import React, { PureComponent, createRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "../Menu/Menu";
import { connect } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import Overlay from "../../components/Overlay/Overlay";
import { theme } from "../../GlobalStyle";
import Title from "../../components/Title/Title";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import SearchIcon from "@material-ui/icons/Search";
import { toggleMenu } from "./reducer";
import { Transition, animated } from "react-spring";
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

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.bottomNav = createRef();
    this.state = { value: 0 };
    console.log({ nav: this.bottomNav.current });
  }

  handleScroll = () => {
    this.setState({
      scroll: window.scrollY
    });
  };

  componentDidMount() {
    this.setState({
      top: this.bottomNav.offsetTop,
      height: this.bottomNav.offsetHeight
    });
    window.addEventListener("scroll", this.handleScroll);
    console.log({ heightBottomNav: this.state.top });
  }

  componentDidUpdate() {
    console.log({ scroll: this.state.scroll, height: this.state.height });
  }

  render() {
    return (
      <Background id="bottomNav">
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

        {
          <Transition
            native
            items={this.props.openMenu}
            from={{ height: 0, overflow: "hidden" }}
            enter={[{ height: "auto" }]}
            leave={{ height: 0 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <div id="merde">
                    <Menu value={this.state.value} />
                  </div>
                </animated.div>
              ))
            }
          </Transition>
        }

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
