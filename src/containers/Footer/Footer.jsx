import React, { useState, useEffect, useRef } from 'react';
import {
  BottomStyled,
  SpotifyButton,
  SlideStyled,
  ControlButton,
  Container,
  LogoStyled,
  ToggleContainer,
  ToggleLabel,
  Fixed,
  IconStyled,
  FadeStyled,
  PageUpStyled,
  PageUpContainer
} from './styled';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { theme } from '../../GlobalStyle';
import Button from '@material-ui/core/Button';
import Logo from '../../images/Logos/SV_SeeThrough_Logo_TeeEdit2.png';
import SoundCloudIcon from '../../images/soundcloudicon.png';
import InstagramIcon from '../../images/instagramicon.png';
import SpotifyIcon from '../../images/spotifyicon.png';
import TwitterIcon from '../../images/twittericon.png';
import YouTubeIcon from '../../images/youtubeicon.png';
import NavigationIcon from '@material-ui/icons/Navigation'
import { Icon } from '@material-ui/core';

const SlidingFooter = props => {
  const [checked, setChecked] = useState(false);
  const navRef = useRef(null);

  const [maxHeight, setMaxHeight] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState();
  const [pageUpButton, setPageUpButton] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [, incrementCurrentImage] = useState(0);

  // function handleChange() {
  //   setChecked(prev => !prev);
  // }
  const handleScroll = value => {
    setScroll(window.scrollY);
    // if (scroll > 10 && scroll < height + 20) scrollToTheEnd();
  };
  const scrollToTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    setMaxHeight(window.innerHeight);
    window.addEventListener("scroll", handleScroll);

    if ( scroll > maxHeight) {
      if (pageUpButton === false) {setPageUpButton(true); console.log(scroll); }
    } else {
      if (pageUpButton === true) setPageUpButton(false);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);
  return (
    <div>

    <Fixed width={checked ? 1 : 0} >


      <Container>  

        <ToggleContainer checked={checked} onClick={() => setChecked((prev) => !prev)}>
          <ToggleLabel>{checked ? 'CLOSE' : 'OPEN'}</ToggleLabel>

          <LogoStyled background={checked ? 0 : 1} src={Logo} />
        </ToggleContainer>
        <SlideStyled direction='left' in={checked} mountOnEnter unmountOnExit timeout={800}>
          <BottomStyled>            
          
            <Button onClick={() => window.open('https://twitter.com/syncedvibes')}>
              <IconStyled src={TwitterIcon}></IconStyled>
            </Button>
            <Button onClick={() => window.open('https://www.instagram.com/synced.vibes/ ')}>
              <IconStyled src={InstagramIcon}></IconStyled>
            </Button>
            <Button
              onClick={() =>
                window.open('https://open.spotify.com/playlist/4WLJKeeVOtZAqFjs88yr9k')
              }
            >
              <IconStyled src={SpotifyIcon}></IconStyled>
            </Button>
            <Button onClick={() => window.open('https://soundcloud.com/syncedvibesdotcom')}>
              <IconStyled src={SoundCloudIcon}></IconStyled>
            </Button>
            <Button onClick={() => window.open('https://www.youtube.com/channel/UCUDwoWSTVPAfXLLN48xzBPA/videos?disable_polymer=1')}>
              <IconStyled src={YouTubeIcon}></IconStyled>
            </Button>
          </BottomStyled>
        </SlideStyled>
      </Container>
    </Fixed>
    <PageUpContainer >
      <FadeStyled in={pageUpButton} mountOnEnter unmountOnExit >
         <PageUpStyled onClick={scrollToTop}  size="medium" > <NavigationIcon/></PageUpStyled>
         </FadeStyled>
         </PageUpContainer>
    </div>
  );
};

export default SlidingFooter;
