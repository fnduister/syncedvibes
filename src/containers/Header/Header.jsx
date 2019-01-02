import React, { PureComponent, createRef } from "react";
import { connect } from "react-redux";
import Overlay from "../../components/Overlay/Overlay";
import { theme } from "../../GlobalStyle";
import NavBar from "../../components/NavBar/NavBar";
import Title from "../../components/Title/Title";
import { toggleMenu } from "./reducer";
import { Transition, animated, Spring } from "react-spring";
import { Background, HeaderNavBar } from "./styled";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <Background>
        <HeaderNavBar ref={this.props.navRef}>
          <Spring
            toggle={this.props.stickyNav}
            from={{ background: "transparent" }}
            to={{ background: "#28d79f" }}
            leave={{ background: "#c23369" }}
          >
            {({ toggle, background }) => (
              <NavBar
                style={{ opacity: 0.1 }}
                withIcon
                withSearch
                background={background}
                withTabs={this.props.stickyNav}
                toggleMenu={this.props.toggleMenuHandler}
                position="fixed"
                zIndex={6}
              />
            )}
          </Spring>
        </HeaderNavBar>
        <Title />

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
