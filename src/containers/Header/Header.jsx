import React, { useState, useEffect, createRef } from "react";
import { connect } from "react-redux";
import Overlay from "../../components/Overlay/Overlay";
import { theme } from "../../GlobalStyle";
import NavBar from "../../components/NavBar/NavBar";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Title from "../../components/Title/Title";
import { toggleMenu } from "./reducer";
import { Transition, animated, Spring, config } from "react-spring";
import { Background, HeaderNavBar } from "./styled";

const Header = () => {
  let navbarEle;
  const [value, changeValue] = useState(0);
  const [scroll, setScroll] = useState(navbarEle.offsetTop);
  const [height, setHeight] = useState(navbarEle.offsetHeight);
  const [stickyNav, SetStickyNav] = useState(false);
  const maxHeight = window.innerHeight;

  console.log("TCL: Header -> navbarEle", navbarEle);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    navbarEle = document.getElementById("navbarID");
  });

  // componentDidMount() {
  //   this.setState({
  //     top: this.navRef.offsetTop,
  //     height: this.navRef.offsetHeight,
  //     maxHeight: window.innerHeight,
  //     stickyNav: false
  //   });
  //   window.addEventListener("scroll", setScroll( window.scrollY));
  // }

  // componentDidUpdate(prevProps, nextProps) {
  //   if (this.state.height + this.state.scroll > this.state.maxHeight) {
  //     if (this.state.stickyNav === false) this.changeSticky(true);
  //   } else {
  //     if (300 > this.state.maxHeight - this.state.scroll) {
  //       if (this.props.openMenu) this.props.toggleMenuHandler();
  //     }
  //     if (this.state.stickyNav === true) this.changeSticky(false);
  //   }
  // }

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
          {({ background }) => (
            <NavBar
              navRef={el => (this.navRef = el)}
              style={{ opacity: 0.1 }}
              value={this.state.value}
              background={background}
              position="fixed"
              id="navbarID"
              zIndex={6}
            />
          )}
        </Spring>
      </HeaderNavBar>

      <Title onMobile={this.props.onMobile} />

      <Overlay overlayOpacity={0.4} overlayColor={theme.palette.primary[300]} />
    </Background>
  );
};

export default Header;
