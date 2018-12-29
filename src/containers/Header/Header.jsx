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
    this.bottomNav = createRef();
    this.state = { value: 0 };
    // console.log({ nav: this.bottomNav.current });
  }

  // handleScroll = () => {
  //   this.setState({
  //     scroll: window.scrollY
  //   });
  // };

  // componentDidMount() {
  //   this.setState({
  //     top: this.bottomNav.offsetTop,
  //     height: this.bottomNav.offsetHeight
  //   });
  //   window.addEventListener("scroll", this.handleScroll);
  //   console.log({ heightBottomNav: this.state.top });
  // }

  // componentDidUpdate() {
  //   console.log({ scroll: this.state.scroll, height: this.state.height });
  // }

  render() {
    return (
      <Background id="bottomNav">
        <HeaderNavBar>
          <NavBar
            withIcon
            withSearch
            toggleMenu={this.props.toggleMenuHandler}
            background="transparent"
            position="fixed"
            zIndex={1}
          />
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
                  <NavBar
                    background={theme.palette.primary[300]}
                    zIndex={1}
                    withTabs
                    position="relative"
                  />
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
