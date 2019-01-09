import React, { PureComponent, createRef } from "react";
import { connect } from "react-redux";
import Overlay from "../../components/Overlay/Overlay";
import { theme, viewport } from "../../GlobalStyle";
import Grid from "@material-ui/core/Grid";
import NavBar from "../../components/NavBar/NavBar";
import Title from "../../components/Title/Title";
import { toggleMenu } from "./reducer";
import { Transition, animated, Spring, config } from "react-spring";
import { Background, HeaderNavBar } from "./styled";
import withSizes from "react-sizes";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleScroll = () => {
    this.setState({
      scroll: window.scrollY
    });
    console.log({ maxHeight: this.state.maxHeight });
    console.log({ Height: this.state.height });
  };

  componentDidMount() {
    this.setState({
      top: this.navRef.offsetTop,
      height: this.navRef.offsetHeight,
      maxHeight: window.innerHeight,
      stickyNav: false
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  changeSticky = sticky => {
    this.setState({
      stickyNav: sticky
    });
  };

  componentDidUpdate() {
    if (this.state.height + this.state.scroll > this.state.maxHeight) {
      if (this.state.stickyNav === false) this.changeSticky(true);
    } else {
      if (this.state.stickyNav === true) this.changeSticky(false);
    }
  }

  render() {
    return (
      <Background>
        <HeaderNavBar>
          <Spring
            from={{ background: "rgba(255, 255, 255, 0)" }}
            config={config.gentle}
            to={{
              background: this.state.stickyNav
                ? theme.palette.primary[300]
                : "rgba(255, 255, 255, 0)"
            }}
          >
            {({ toggle, background }) => (
              <NavBar
                navRef={el => (this.navRef = el)}
                style={{ opacity: 0.1 }}
                withIcon="true"
                withSearch
                value={this.state.value}
                background={background}
                withTabs={this.props.withTabs && this.state.stickyNav}
                toggleMenu={this.props.toggleMenuHandler}
                position="fixed"
                zIndex={6}
              />
            )}
          </Spring>
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
                    value={this.state.value}
                    withTabs="true"
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

const mapSizesToProps = ({ width }) => ({
  withTabs: width > viewport.md
});

export default connect(
  mapProps,
  mapActions
)(withSizes(mapSizesToProps)(Header));
