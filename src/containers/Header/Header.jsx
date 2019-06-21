import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Overlay from "../../components/Overlay/Overlay";
import { theme } from "../../GlobalStyle";
import NavBar from "../../components/NavBar/NavBar";
import Title from "../../components/Title/Title";
import { Transition, animated, Spring, config } from "react-spring";
import { Background, HeaderNavBar, ProgressiveLine } from "./styled";
import Button from "@material-ui/core/Button";
import Slider from '../../components/Slider/Slider';

const Header = props => {
  const navRef = useRef(null);
  let images = [];
  let backgroundImageUrl = "";
  let backgrounds;
  const [maxHeight, setMaxHeight] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState();
  const [stickyNav, SetStickyNav] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [currentImage, incrementCurrentImage] = useState(0);

  const handleScroll = value => {
    setScroll(window.scrollY);
  };

  const changeBackground = () => {
    incrementCurrentImage(prev => (prev + 1) % 6);
  }

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  useEffect(() => {
    const progress = () => {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          changeBackground();
          return 0;
        }
        return Math.min(oldCompleted + 10, 110);
      });
    }

    const timer = setInterval(progress, 350);
    return () => {
      clearInterval(timer);
    };
  }, []);

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
      <Slider completed={completed}/>  
      <ProgressiveLine color="secondary" variant="determinate" value={completed} />
      <Overlay overlayOpacity={0.4} overlayColor={theme.palette.primary[300]} />
    </Background>
  );
};

export default Header;
