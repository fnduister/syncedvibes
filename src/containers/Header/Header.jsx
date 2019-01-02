import React, { PureComponent, createRef } from "react";
import { connect } from "react-redux";
import Overlay from "../../components/Overlay/Overlay";
import { theme } from "../../GlobalStyle";
import NavBar from "../../components/NavBar/NavBar";
import Title from "../../components/Title/Title";
import { toggleMenu } from "./reducer";
import { Transition, animated } from "react-spring";
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
          <Transition
            native
            items={this.props.stickyNav}
            from={{}}
            enter={{ background: "#28d79f" }}
            leave={{ background: "#c23369" }}
          >
            {stick => props => (
              <NavBar
                style={{opacity: .1}}
                withIcon
                withSearch
                withTabs={stick}
                toggleMenu={this.props.toggleMenuHandler}
                position="fixed"
                zIndex={6}
              />
            )}
          </Transition>
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
