import React, { PureComponent, createRef, useState } from "react";
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
import { Background, HeaderNavBar } from "./styled";

const Header = props => {

  // handleScroll = () => {
  //   this.setState({
  //     scroll: window.scrollY
  //   });
  // };

  // componentDidMount() {
  //   this.setState({
  //     top: this.navRef.offsetTop,
  //     height: this.navRef.offsetHeight,
  //     maxHeight: window.innerHeight,
  //     stickyNav: false
  //   });
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // changeSticky = sticky => {
  //   this.setState({
  //     stickyNav: sticky
  //   });
  // };

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
              <NavBar
                // navRef={el => (this.navRef = el)}
                style={{ opacity: 0.1 }}
                withIcon="true"
                position="fixed"
                zIndex={6}
              />
        </HeaderNavBar>

        <Title onMobile={props.onMobile} />

        <Overlay
          overlayOpacity={0.4}
          overlayColor={theme.palette.primary[300]}
        />
      </Background>
    );
  }



export default Header;
