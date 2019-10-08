import React, { useState } from "react";
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
  IconStyled
} from "./styled";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { theme } from "../../GlobalStyle";
import Button from "@material-ui/core/Button";
import Logo from "../../images/Logos/SV_SeeThrough_Logo_TeeEdit2.png";
import SoundCloudIcon from"../../images/soundcloudicon.png";
import InstagramIcon from"../../images/instagramicon.png";
import SpotifyIcon from"../../images/spotifyicon.png";
import TwitterIcon from"../../images/twittericon.png";
import { Icon } from "@material-ui/core";

export default function SlidingFooter() {
  const [checked, setChecked] = useState(false);

  // function handleChange() {
  //   setChecked(prev => !prev);
  // }

  return (
    <Fixed width={checked? 1: 0}>
      <Container>
        <ToggleContainer
          checked={checked}
          onClick={() => setChecked(prev => !prev)}
        >
          <ToggleLabel>{checked ? "CLOSE" : "OPEN"}</ToggleLabel>

          <LogoStyled background={checked ? 0 : 1} src={Logo} />
        </ToggleContainer>
        <SlideStyled
          direction="left"
          in={checked}
          mountOnEnter
          unmountOnExit
          timeout={800}
        >
          <BottomStyled>
            <Button onClick={() => window.open('https://twitter.com/syncedvibes')}>
              <IconStyled src={TwitterIcon}></IconStyled>  
            </Button>
            <Button onClick={() => window.open('https://www.instagram.com/synced.vibes/ ')}>
              <IconStyled src={InstagramIcon}></IconStyled>  
            </Button>
            <Button  onClick={() => window.open( 'https://open.spotify.com/playlist/4WLJKeeVOtZAqFjs88yr9k')}>
           <IconStyled src={SpotifyIcon}></IconStyled>
            </Button>
            <Button onClick={() => window.open('https://soundcloud.com/syncedvibesdotcom')}>
            <IconStyled src={SoundCloudIcon}>
            </IconStyled>
            </Button>
          </BottomStyled>
        </SlideStyled>
      </Container>
    </Fixed>
  );
}


