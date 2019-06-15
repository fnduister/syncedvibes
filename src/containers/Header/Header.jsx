import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Overlay from "../../components/Overlay/Overlay";
import { theme } from "../../GlobalStyle";
import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import Title from "../../components/Title/Title";
import { toggleMenu } from "./reducer";
import { Transition, animated, Spring, config } from "react-spring";
import { Background, HeaderNavBar } from "./styled";
import Button from '@material-ui/core/Button';

const Header = props => {
  const navRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState();
  const [stickyNav, SetStickyNav] = useState(false);

  const handleScroll = (value) => {
    setScroll(window.scrollY);
  }

  console.log({ props });
  useEffect(() => {
    const { offsetHeight } = navRef.current;
    setMaxHeight(window.innerHeight);
    setHeight(offsetHeight);
    window.addEventListener("scroll", handleScroll);

    if (height + scroll > maxHeight) {
      if (stickyNav === false) SetStickyNav(true);
    } else {
      if (stickyNav === true) SetStickyNav(false);
    }
  }, [scroll]);

  return (
    <Background>
      <HeaderNavBar>
        <Spring
          from={{ background: "rgba(255, 255, 255, 0)" }}
          config={config.gentle}
          to={{
            background: stickyNav
              ? theme.palette.primary[300]
              : "rgba(255, 255, 255, 0)"
          }}
        >
          {({ background }) => (
            <NavBar
              navRef={navRef}
              style={{ opacity: 0.1 }}
              background={background}
              position="fixed"
              id="navbarID"
              zIndex={6}
            />
          )}
        </Spring>
      </HeaderNavBar>
      <Title onMobile={props.onMobile} />

      <Overlay overlayOpacity={0.4} overlayColor={theme.palette.primary[300]} />
    </Background>
  );
};

export default Header;
