import React, { useState } from "react";
import {
  BottomStyled,
  SpotifyButton,
  SlideStyled,
  ControlButton,
  Container,
  LogoStyled,
  ToggleContainer,
  ToggleLabel
} from "./styled";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { theme } from "../../GlobalStyle";
import Button from "@material-ui/core/Button";
import Logo from "../../images/Logos/SV_SeeThrough_Logo.png";

export default function SlidingFooter() {
  const [checked, setChecked] = useState(false);

  // function handleChange() {
  //   setChecked(prev => !prev);
  // }

  return (
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
          <SpotifyButton variant="contained">Spotify</SpotifyButton>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </BottomStyled>
      </SlideStyled>
    </Container>
  );
}

// const Footer = () => {
//   return (

//     <BottomStyled
//       container
//       alignItems="flex-start"
//       direction="row"
//       justify="center"
//       background={theme.palette.primary[300]}
//     >

//       <Grid item md={3}>
//         <BottomBox>
//           <Title variant="h5" color="secondary">
//             Recent Posts
//           </Title>
//           <Typography variant="caption" color="inherit">
//             Kodak Black – Close To The Grave
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             OMB Peezy – Ms. Lois House
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             Warm Brew Feat. Dom Kennedy – Full Effect
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             Iamsu! – Freestyle
//           </Typography>
//         </BottomBox>
//       </Grid>
//       <Grid item md={3}>
//         <BottomBox archive="true">
//           <Title variant="h5" color="secondary">
//             Archives
//           </Title>
//           <Typography variant="caption" color="inherit">
//             December 2018
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             November 2018
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             October 2018
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             September 2018
//           </Typography>
//         </BottomBox>
//       </Grid>
//       <Grid item md={3}>
//         <BottomBox>
//           <Title variant="h5" color="secondary">
//             Recent comment
//           </Title>
//           <Typography variant="caption" color="inherit">
//             Buggy B – Losi… on Buggy B – Who Is This Home
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             Flatbush Zombies… on Flatbush Zombies – New Baby
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             G Herbo – Bonj… on G Herbo & Southside Presente
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             Curren$y – 300… on Curren$y Presents ‘FireBase
//           </Typography>
//         </BottomBox>
//       </Grid>
//     </BottomStyled>

//   );
// };

// export default Footer;
